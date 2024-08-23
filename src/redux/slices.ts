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
            state.loading=false
            state.words=action.payload

        },
        getWordsFail:(state,action:PayloadAction<string>)=>{
            state.loading=true
            state.error=action.payload

        },
        saveResults:(state,action:PayloadAction<string[]>)=>{
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
export const {saveResults ,getWordRequest,getWordsFail,getWordsSuccess,clearState } = rootSlice.actions

export default rootSlice.reducer