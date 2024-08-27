import { useEffect, useState } from 'react'
import Button from './Button'

import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { saveResults } from '../redux/slices'

const Quiz = () => {
  
    const [count, setCount] = useState<number>(0)
    const [result,setResult] = useState<string[]>([])
    // const [ans, setAns] = useState<string>('')
    const [selectedOption, setSelectedOption] = useState('');
    const dispatch = useDispatch()

    const {words} = useSelector((state: {
      rootReducer :StateType
    })=>state.rootReducer)

    const handleOptionChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value)
      setSelectedOption(event.target.value);
    };

    const navigate =  useNavigate()
    
    const submitHandler=()=>{
      setResult(prev=>([...prev,selectedOption]))
      setCount(prev=>prev+1)
      setSelectedOption('')
      console.log(result)
    }

    useEffect(() => {
      if (count + 1 > words.length) navigate("/result");
      dispatch(saveResults(result));
    }, [result]);
    

     return (
       <div className="flex flex-col items-center justify-center">
         <h1 className="text-3xl font-extrabold">Quiz</h1>
         <div className="flex mt-10 mb-2 font-bold text-xl " >
           <span>{count+1} - <span className=" text-blue-500 mr-4 mx-2 ">{words[count]?.word} </span> </span>

         
           
         </div>
         <div className="space-y-2 mb-10 ">
      <p className="text-lg font-medium">meaning :</p>
      {
        words[count]?.options.map((option)=>(
          <label className="flex items-center space-x-3">
        <input
          type="radio"
          name="radio"
          value={option}
          checked={selectedOption === option}
          onChange={handleOptionChange}
          className="form-radio h-5 w-5 text-blue-600"
        />
        <span className="text-gray-700">{option}</span>
      </label>
        ))
      }
     
    </div>
         <Button isDisabled={!selectedOption?true:false} label={count === words.length - 1 ?"Submit":"Next"} handler={()=>{submitHandler()}}/>
       </div>
     )
  
}

export default Quiz