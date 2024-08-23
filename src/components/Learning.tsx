import { useEffect, useState } from "react"
import Button from "./Button"
import { useNavigate, useSearchParams } from "react-router-dom"
import { IoVolumeHigh } from "react-icons/io5";
import { translateWords } from "../utils/features";


const Learning = () => {
  const [count, setCount] = useState<number>(0)
 const navigate =  useNavigate()
const params =  useSearchParams()[0].get("language") as string

 useEffect(() => {
  translateWords(params).then(()=>console.log("worked"))
 
   
 }, [])
 
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-extrabold">Learning</h1>
      <div className="flex my-10 font-bold text-xl " >
        <span>{count+1} - word </span>
        <div > : <span className=" text-blue-500 mr-4 mx-2 ">Meaning </span>  </div>
        <IoVolumeHigh/>
      </div>
      <Button label={count>=7?"Quiz":"Next"} handler={count>=7?()=>navigate("/quiz"):()=>setCount(prev=>prev+1)}/>
    </div>
  )
}

export default Learning