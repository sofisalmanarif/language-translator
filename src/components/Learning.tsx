import { useEffect, useState } from "react"
import Button from "./Button"
import { useNavigate, useSearchParams } from "react-router-dom"
import { IoVolumeHigh } from "react-icons/io5";
import { translateWords } from "../utils/features";
import { useDispatch, useSelector } from "react-redux";
import { getWordRequest, getWordsFail, getWordsSuccess } from "../redux/slices";


const Learning = () => {
  const [count, setCount] = useState<number>(0)
 const navigate =  useNavigate()
 const dispatch = useDispatch()

const params =  useSearchParams()[0].get("language") as string

const {words,loading} = useSelector((state: {
  rootReducer :StateType
})=>state.rootReducer)

 useEffect(() => {
  dispatch(getWordRequest())
  translateWords(params)
  .then(arr=>(
       dispatch(getWordsSuccess(arr))
 ))
 .catch((err)=>dispatch(getWordsFail(err)))

 console.log("wordss",words)
   
 }, [])
 
 if(loading)return <div>Loading....</div>
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-extrabold">Learning</h1>
      <div className="flex my-10 font-bold text-xl " >
        <span>{count+1} - {words[count]?.word} </span>
        <div > : <span className=" text-blue-500 mr-4 mx-2 "> {words[count]?.meaning}  </span>  </div>
        <IoVolumeHigh/>
      </div>
      <Button label={count>=7?"Quiz":"Next"} handler={count>=7?()=>navigate("/quiz"):()=>setCount(prev=>prev+1)}/>
    </div>
  )
}

export default Learning