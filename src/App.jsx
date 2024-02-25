
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
{/*<div className='bg-transparent backdrop-blur-[40px] flex min-w-[350px] absolute  top-0 right-0 p-30'>
{open && (
  <ul className='py-10 px-5 text-whitecolor h-screen text-left '>
    <Link to="/"><li className='mt-10 p-5 py-6 hover:border-b-2 hover:border-lightdarkcolor transition ease-out duration-500'><span className='font-bold'>00</span> HOME</li></Link>
    <Link to="/destination">  <li className='p-5 py-6 hover:border-b-2 hover:border-lightdarkcolor transition ease-out duration-500' ><span className='font-bold'>01</span> DESTINATION</li></Link>
    <Link to="/crew"><li className='p-5 py-6 hover:border-b-2 hover:border-lightdarkcolor transition ease-out duration-500'  ><span className='font-bold'>02</span> CREW</li></Link>
    <Link to="/technology"><li className='p-5 py-6 hover:border-b-2 hover:border-lightdarkcolor transition ease-out duration-500' ><span className='font-bold'>03</span> TECHNOLOGY</li></Link>

</ul>*/}