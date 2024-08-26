import { generate } from "random-words";
import axios from 'axios'
import _ from "lodash"

// import {ResponseType} from '../vite-env'

export const translateWords = async (lang: string): Promise<WordType[]> => {
    try {
        // Generate random words
        const words = generate(8).map((word) => ({
            Text: word,
        }));

        const generateOptions =(words:{
            Text: string,
        }[],idx:number):string[]=>{
            const correctAns:string = words[idx].Text

            const allAnsWithOutCorrectAns = words.filter(item=>item.Text !==correctAns)
            const incorrectAns:string[] = _.sampleSize(allAnsWithOutCorrectAns,3).map(item=>item.Text)

            const options = _.shuffle([...incorrectAns,correctAns])


            return options


        }
        const response = await axios.post(
            "https://microsoft-translator-text.p.rapidapi.com/translate",
            words,
            {
                params: {
                    "to[0]": lang,
                    "api-version": "3.0",
                    profanityAction: "NoAction",
                    textType: "plain",
                },
                headers: {
                    'x-rapidapi-key': 'efa105cddbmsh1ce41efd6431fe0p19cafbjsn8b788a1322ed',
                    'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
                    'Content-Type': 'application/json'
                  },
            }
        );

        const received: DataResponseType[] = response.data;

        const translatedWords: WordType[] = received.map((item, idx) => {
            const options:string[]=generateOptions(words,idx)
            return {
                word: item.translations[0].text,
                meaning: words[idx].Text, // Use Text instead of text
                options: options, 
            };
        });

        return translatedWords;
    } catch (error) {
        console.error("Translation failed:", error);
        throw new Error("Error in translating words");
    }
};