
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
import React, { useState, useEffect, useLocation } from 'react';
import Layout from "./Components/Layout";


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


        </Routes>

      </Layout>
    </>
  )
}

export default App

