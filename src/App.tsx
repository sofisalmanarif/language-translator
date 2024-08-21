
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Learning from './components/Learning'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Quiz from './components/Quiz'
import Result from './components/Result'

function App() {
  

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
