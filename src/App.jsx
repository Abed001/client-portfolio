
import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import About from './Pages/About'
import Contact from './Pages/Contact'
import KioskProject from './Pages/KioskProject'
import InvestProject from './Pages/InvestProject'
import ExpoProject from './Pages/ExpoProject'
import QndProject from './Pages/QndProject'
import Layout from "./Components/Layout";
import QataLum from "./Pages/QataLum"
import Qup from "./Pages/Qup"
import Mun from "./Pages/Mun"
import Quphb from "./Pages/Quphb"
import BMW from "./Pages/BMW"
import BOAW from "./Pages/Boaw"


function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<div className=' overflow-auto '><Home /></div>} />
          <Route path="/Portfolio" element={<div className='overflow-auto'><Portfolio /></div>} />
          <Route path="/About" element={<div className=' overflow-auto'><About /></div>} />
          <Route path="/Contact" element={<div className=' overflow-auto '><Contact /></div>} />
          <Route path="/InvestProject" element={<div className=' overflow-auto '><InvestProject /></div>} />
          <Route path="/KioskProject" element={<div className='overflow-auto'><KioskProject /></div>} />
          <Route path="/QndProject" element={<div className=' overflow-auto'><QndProject /></div>} />
          <Route path="/ExpoProject" element={<div className=' overflow-auto '><ExpoProject /></div>} />
          <Route path="/QataLum" element={<div className=' overflow-auto '><QataLum /></div>} />
          <Route path="/Qup" element={<div className=' overflow-auto '><Qup /></div>} />
          <Route path="/Mun" element={<div className=' overflow-auto '><Mun /></div>} />
          <Route path="/Quphb" element={<div className=' overflow-auto '><Quphb /></div>} />
          <Route path="/BMW" element={<div className=' overflow-auto '><BMW /></div>} />
          <Route path="/BOAW" element={<div className=' overflow-auto '><BOAW /></div>} />








        </Routes>

      </Layout>
    </>
  )
}

export default App

