import React from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { Spin as Hamburger } from 'hamburger-react'
import Navbar from '../Components/Navbar';
import Marquee from "react-fast-marquee";
import { BsInstagram } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate, NavLink } from "react-router-dom";
import SecondSection from '../Components/SecondSection';
import FirstSection from '../Components/FirstSection';


export default function Home() {
    return (
        <div className='overflow-x-hidden'>
             <FirstSection/>
        
             {  /*  <Navbar />


                <div className='relative min-h-[100vh] flex flex-col font-openSans font-bold text-white text-heading3 lg:text-heading1'>


                    <div className='z-5 absolute right-0 top-[-100px] pt-40 flex flex-col justify-center items-center bg-black  min-h-[100vh] w-[100%]'>
                        <ul className=' mr-10 uppercase list-none'>
                            <li>qatar</li>
                            <li>qatar</li>
                            <li>qatar</li>
                            <li>qatar</li>
                            <li>qatar</li>
                            <li>qatar</li>
                        </ul>
                    </div>
                    </div>

               
    */}





                    <SecondSection />
                    </div>
                    
    );

}


                    { /*  <div className='ml-10 z-5 absolute left-0 bottom-[-300px] flex text-heading5 lg:text-heading4' >
                        <div>  <AiOutlineMail size={40} /></div>

                        <div>
                            <span className='uppercase  text-center block tracking-tighter'>get in </span>
                            <span className=' uppercase  text-center block tracking-tighter'>touch</span>
                        </div>
                        <div className='lg:hidden md:hidden mr-10 mt-8'><GoArrowRight style={{ transform: 'rotate(-45deg)' }} size={40} stroke-width="1" /></div>
                        <div className=' hidden-on-phone mr-10 mt-10'><GoArrowRight style={{ transform: 'rotate(-45deg)' }} size={50} stroke-width="1" /></div>

                    </div>



                    <div className='z-5 absolute right-0 bottom-[-500px] lg:right-60 lg:bottom-[-350px] flex text-heading5 lg:text-heading4' >
                        <div className=' mr-2'>  <BsInstagram size={30} /></div>
                        <div>
                            <span className=' uppercase  text-center block tracking-tighter'>follow </span>
                            <span className='uppercase  text-center block tracking-tighter'>mehyo</span>
                        </div>
                        <div className='lg:hidden md:hidden mr-10 mt-8'><GoArrowRight style={{ transform: 'rotate(-45deg)' }} size={40} stroke-width="1" /></div>
                        <div className='hidden-on-phone mr-10 mt-10'><GoArrowRight style={{ transform: 'rotate(-45deg)' }} size={50} stroke-width="1" /></div>


                    </div>
                    <div className='tracking-tighter uppercase z-5 absolute right-0 bottom-[-600px] lg:bottom-[-600px]'>
                        <Marquee >
                            I can be a React component, multiple React components, or just some text.
                        </Marquee>
                    </div>

                    <div className=' uppercase hidden-on-phone text-left text-smallpara flex lg:flex-row justify-between items-center z-5 absolute right-0 bottom-[-650px]  w-[100%]'>
                        <p className='font-openSans ml-10'>Mehyo @ 2023</p>
                        <ul className='font-openSans p-0 m-0 list-none lg:flex'>
                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/"><li className='mr-5 font-openSans'>Home</li></Link>
                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Portfolio"><li className='mr-5 font-openSans'>portfolio</li></Link>
                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Contact"><li className='mr-5 font-openSans'>contact</li></Link>
                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/About"><li className='mr-5 font-openSans'>about</li></Link>
                        </ul>
                        <p className='mr-10 font-openSans' >site by Abed</p>
                    </div>


                    <div className='font-openSans lg:hidden md:hidden text-left text-smallpara flex flex-col lg:flex-row items-center z-5 absolute right-0 bottom-[-900px]  w-[100%]'>
                        <ul className='w-[100%] justify-start p-0 ml-40 uppercase list-none lg:flex'>
                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/"><li className='mr-5 mb-5 '>Home</li></Link>
                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Portfolio"><li className='mr-5 mb-5'>portfolio</li></Link>
                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Contact"><li className='mr-5 mb-5'>contact</li></Link>
                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/About"><li className='mr-5 mb-5'>about</li></Link>
                            <li className='mb-20'>site by Abed</li>
                        </ul>

                    </div>*/}

