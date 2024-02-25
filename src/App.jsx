
import './App.css'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from './Pages/Home'



function App() {
  

  return (
    <>

      <Routes>
     <Route path="/" element={ <div className='h-[100%] w-[100%] overflow-auto flex flex-col'><Home /></div>} />
   
     
      </Routes>

    </>
  )
}

export default App

  