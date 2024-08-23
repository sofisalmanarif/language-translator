import { generate } from "random-words";
import axios from 'axios'

export const translateWords =async(lang:string)=>{
    try {
        const words = generate(8).map((word)=>(
            {
                Text :word,
            }
        ));
       const {data} =await axios.post('https://microsoft-translator-text.p.rapidapi.com/translate',words,{
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

        console.log(data)

    } catch (error) {
        console.log(error)
    }


}