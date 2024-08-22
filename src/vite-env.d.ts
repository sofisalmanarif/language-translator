/// <reference types="vite/client" />
type languageType ={
    name: string;
    code: string;
}

type WordType ={
    word: string;
    meaning:string,
    options:string[]
}

type StateType ={
    loading:boolean,
    result:string[],
    error?:string,
    words:WordType[]

}