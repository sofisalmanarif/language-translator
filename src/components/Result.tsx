import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'
import { clearState } from '../redux/slices'
import { useNavigate } from 'react-router-dom'

const Result = () => {
  const {words,result} = useSelector((state: {
    rootReducer :StateType
  })=>state.rootReducer)

  const dispatch =useDispatch()
 const navigate =  useNavigate()

  const resetHandler =()=>{
    dispatch(clearState())
    navigate('/')
    
  }
  return (
    <div className="flex flex-col items-center justify-center">
         <h1 className="text-3xl font-extrabold">Result</h1>
            <p>you got 3 out of {words.length}</p>
         <div className='flex gap-20'>
          <div className='flex flex-col'><h1>your Ans</h1>
          <div>{
            result.map(yourAns=><p key={yourAns} className='my-2 capitalize font-bold'>{yourAns}</p>

            )}</div>
          </div>
          <div className='flex flex-col'> 
            <h1>Correct Ans</h1>
          <div>{
            words.map(word=><p key={word.word} className='my-2 capitalize font-bold'>{word.word}</p>

            )}</div>
          </div>
         </div>
         <Button label='Reset' handler={resetHandler}/>
         </div>
     )
  
}

export default Result