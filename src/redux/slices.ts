import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:StateType ={
    loading: false,
    result: [],
    words: [],
}

const rootSlice = createSlice({
    name: 'mySlice',
    initialState,
    reducers: {
        getWordRequest:(state)=>{
            state.loading=true

        },
        getWordsSuccess:(state,action:PayloadAction<WordType[]>)=>{
            state.loading=true
            state.words=action.payload

        },
        getWordsFail:(state,action:PayloadAction<string>)=>{
            state.loading=true
            state.error=action.payload

        },
        getResults:(state,action:PayloadAction<string[]>)=>{
            state.loading=true
            state.result=action.payload

        },
        clearState:(state)=>{
            state.loading=false
            state.words=[]
            state.error=undefined
            state.result=[]

        },

    }
})
export const {getResults ,getWordRequest,getWordsFail,getWordsSuccess,clearState } = rootSlice.actions

export default rootSlice.reducer