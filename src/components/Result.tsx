
import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'
import { clearState } from '../redux/slices'
import { useNavigate } from 'react-router-dom'
import { matchingCount } from '../utils/features'

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

  const matches =matchingCount(result,words.map(item=>item.word))
  return (
    <div className="flex flex-col items-center justify-center">
         <h1 className="text-3xl font-extrabold">Result</h1>
            <p className='mt-10 font-bold'>You got {matches} out of {words.length}</p>
         <div className='flex gap-20 mt-5'>
          <div className='flex flex-col  '><h1 className='text-red-500 font-xl'>Your Answers</h1>
          <div>{
            result.map((yourAns,idx)=><p key={yourAns} className='my-2 flex  capitalize '>{idx+1} . {yourAns}</p>

            )}</div>
          </div>
          <div className='flex flex-col'> 
            <h1 className='text-green-700 font-xl'>Correct Ans</h1>
          <div>{
            words.map((word,idx)=><p key={word.word} className='my-2 capitalize '>{idx+1} . {word.word}</p>

            )}</div>
          </div>
         </div>
         <p className={`font-bold text-xl ${(matches / words.length) * 100 > 50 ? 'text-green-500' : 'text-red-500'}`}
         >{matches/words.length*100 >50 ?"Pass":"Fail"}</p>
         <Button label='Reset' handler={resetHandler}/>
         </div>
     )
  
}

export default Result