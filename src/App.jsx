
import './App.css'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import About from './Pages/About'
import Contact from './Pages/Contact'



function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<div className=' overflow-auto '><Home /></div>} />
        <Route path="/" element={<div className='overflow-auto'><Portfolio /></div>} />
        <Route path="/" element={<div className=' overflow-auto'><About /></div>} />
        <Route path="/" element={<div className=' overflow-auto '><Contact /></div>} />


      </Routes>

    </>
  )
}

export default App

