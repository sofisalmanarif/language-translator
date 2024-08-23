import { generate } from "random-words";
import axios from 'axios'

// import {ResponseType} from '../vite-env'

export const translateWords = async (lang: string): Promise<WordType[]> => {
    try {
        // Generate random words
        const words = generate(8).map((word) => ({
            Text: word,
        }));

        // Make a request to the translation API
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

        // Map the translated words to the expected structure
        const translatedWords: WordType[] = received.map((item, idx) => {
            return {
                word: item.translations[0].text,
                meaning: words[idx].Text, // Use Text instead of text
                options: ["Option1", "Option2", "Option3", "Option4"], // Add realistic options here
            };
        });

        return translatedWords;
    } catch (error) {
        console.error("Translation failed:", error);
        throw new Error("Error in translating words");
    }
};