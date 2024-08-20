import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Learning from './components/Learning'
import Quiz from './components/Quiz'
import Result from './components/Result'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter >
    <Navbar/>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/learning" element={<Learning />} />
      <Route path="/quiz" element={<Quiz/>} />
      <Route path="/result" element={<Result/>} />

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
