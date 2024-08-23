import { generate } from "random-words";
import axios from 'axios'

// import {ResponseType} from '../vite-env'

export const translateWords=async(lang:string) :Promise<WordType[]>=>{
    try {
        const words = generate(8).map((word)=>(
            {
                Text :word,
            }
        ));
       const response =await axios.post('https://microsoft-translator-text.p.rapidapi.com/translate',words,{
            params: {
                "to[0]": lang,
                'api-version': '3.0',
                profanityAction: 'NoAction',
                textType: 'plain'
              },
              headers: {
                'x-rapidapi-key': 'efa105cddbmsh1ce41efd6431fe0p19cafbjsn8b788a1322ed',
                'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
                'Content-Type': 'application/json'
              },
        })
        const  revieve: DataResponseType[] =response.data
        console.log(response.data[0].translations[0].text)
          
        const arr:WordType[] = revieve.map((i,idx)=>{
            return{
                word :i.translations[0].text,
                meaning:words[idx],
                options:["hdhd"]
            }
        })

          return arr

    } catch (error) {
        // console.log(error)
        // throw new Error("error")
    }


}