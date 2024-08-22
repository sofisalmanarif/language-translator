
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate()
  const languages:languageType[] =[
    {name:"english",code:"en"}
  ,
    {name:"urdu",code:"ur"},
    {name:"japanese",code:"jp"},
    {name:"hindi",code:"hi"}
  ]
  return (
    <div className='flex flex-col items-center justify-center'>
    <h1 className='text-3xl font-extrabold'>Choose your Language</h1>
      <div className='my-10 gap-5 flex'>{
        languages.map((language)=>(<Button key={language.name} label={language.name} handler={()=>navigate(`/learning?language=${language.code}`)} />))
      }</div>
    </div>
  )
}

export default Main