import { useState } from 'react'
import Button from './Button'

import { useNavigate } from 'react-router-dom'

const Quiz = () => {
  
    const [count, setCount] = useState<number>(0)
    const [result,setResult] = useState<string[]>([])
    const [ans, setAns] = useState<string>('')
    const navigate =  useNavigate()
    
    const submitHandler=()=>{
      setResult(prev=>([...prev,ans]))
      setCount(prev=>prev+1)
      setAns('')
    }

     return (
       <div className="flex flex-col items-center justify-center">
         <h1 className="text-3xl font-extrabold">Quiz</h1>
         <div className="flex my-10 font-bold text-xl " >
           <span>{count+1} - <span className=" text-blue-500 mr-4 mx-2 ">Quiz </span> </span>
           
         </div>
         <Button label={count>=7?"Result":"Next"} handler={count>=7?()=>navigate("/result"):()=>{submitHandler()}}/>
       </div>
     )
  
}

export default Quiz