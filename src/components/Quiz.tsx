import { useState } from 'react'
import Button from './Button'

import { useNavigate } from 'react-router-dom'
import { VscGlobe } from 'react-icons/vsc'

const Quiz = () => {
  
    const [count, setCount] = useState<number>(0)
    const [result,setResult] = useState<string[]>([])
    // const [ans, setAns] = useState<string>('')
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      setSelectedOption(event.target.value);
    };

    const navigate =  useNavigate()
    
    const submitHandler=()=>{
      setResult(prev=>([...prev,selectedOption]))
      setCount(prev=>prev+1)
      setSelectedOption('')
      // console.log(result)
    }

     return (
       <div className="flex flex-col items-center justify-center">
         <h1 className="text-3xl font-extrabold">Quiz</h1>
         <div className="flex mt-10 mb-2 font-bold text-xl " >
           <span>{count+1} - <span className=" text-blue-500 mr-4 mx-2 ">Quiz </span> </span>

         
           
         </div>
         <div className="space-y-2 mb-10 ">
      <p className="text-lg font-medium">meaning:</p>
      <label className="flex items-center space-x-3">
        <input
          type="radio"
          name="option"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
          className="form-radio h-5 w-5 text-blue-600"
        />
        <span className="text-gray-700">Option 1</span>
      </label>
      <label className="flex items-center space-x-3">
        <input
          type="radio"
          name="option"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
          className="form-radio h-5 w-5 text-blue-600"
        />
        <span className="text-gray-700">Option 2</span>
      </label>
      <label className="flex items-center space-x-3">
        <input
          type="radio"
          name="option"
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
          className="form-radio h-5 w-5 text-blue-600"
        />
        <span className="text-gray-700">Option 3</span>
      </label>
      <label className="flex items-center space-x-3">
        <input
          type="radio"
          name="option"
          value="option4"
          checked={selectedOption === 'option4'}
          onChange={handleOptionChange}
          className="form-radio h-5 w-5 text-blue-600"
        />
        <span className="text-gray-700">Option 4</span>
      </label>
    </div>
         <Button label={count>=7?"Result":"Next"} handler={count>=7?()=>navigate("/result"):()=>{submitHandler()}}/>
       </div>
     )
  
}

export default Quiz