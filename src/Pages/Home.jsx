import React from 'react'
import first from '../../public/assets/first.jpg'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { Spin as Hamburger } from 'hamburger-react'
import Navbar from '../Components/Navbar';
import Marquee from "react-fast-marquee";
import { BsInstagram } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate, NavLink } from "react-router-dom";


export default function Home() {
    return (
        <>
            <ReactLenis root className='relative'>
                <Navbar />


                <div className=' flex flex-col font-sansOpen font-bold text-white font-openSans text-heading3 lg:text-heading1'>


                    <div className='mt-20 flex flex-col justify-center items-center bg-black z-5 absolute right-0 top-[-80px] h-[100vh] w-[100%]'>
                        <ul className='uppercase list-none'><li >qatar</li>
                            <li>qatar</li>
                            <li >qatar</li>
                            <li >qatar</li>
                        </ul>
                    </div>



                    <div className='ml-10 z-5 absolute left-0 bottom-[-200px] flex text-heading4' >
                        <div className=''>  <AiOutlineMail size={40} /></div>
                        <div>
                            <span className='uppercase  text-center block tracking-tighter'>get in </span>
                            <span className=' uppercase  text-center block tracking-tighter'>touch</span>
                        </div>
                        <div className='mr-10 mt-10'><GoArrowRight style={{ transform: 'rotate(-45deg)' }} size={50} stroke-width="1" /></div>

                    </div>



                    <div className='z-5 absolute right-0 bottom-[-500px] lg:right-60 lg:bottom-[-350px] flex text-heading4' >
                        <div className=' mr-2'>  <BsInstagram size={30} /></div>
                        <div>
                            <span className=' uppercase  text-center block tracking-tighter'>follow </span>
                            <span className='uppercase  text-center block tracking-tighter'>mehyo</span>
                        </div>
                        <div className='mr-10 mt-10'><GoArrowRight style={{ transform: 'rotate(-45deg)' }} size={50} stroke-width="1" /></div>

                    </div>
                    <div className='tracking-tighter uppercase z-5 absolute right-0 bottom-[-600px] lg:bottom-[-500px]'>
                        <Marquee >
                            I can be a React component, multiple React components, or just some text.
                        </Marquee>
                    </div>

                    <div className='uppercase hidden-on-phone text-left text-smallpara flex lg:flex-row justify-between items-center z-5 absolute right-0 bottom-[-550px]  w-[100%]'>
                        <p className='ml-10'>Mehyo @ 2023</p>
                        <ul className='p-0 m-0 list-none lg:flex'>
                        <Link to="/"><li className='mr-5'>Home</li></Link>
                        <Link to="/destination"><li className='mr-5'>portfolio</li></Link>
                        <Link to="/crew"><li className='mr-5'>contact</li></Link>
                        <Link to="/technology"><li className='mr-5'>about</li></Link>
                        </ul>
                        <p className='mr-10' >site by Abed</p>
                    </div>


                    <div className='lg:hidden md:hidden text-left text-smallpara flex flex-col lg:flex-row items-center z-5 absolute right-0 bottom-[-900px]  w-[100%]'>
                        <ul className='w-[100%] justify-start p-0 ml-40 uppercase list-none lg:flex'>
                            <li className='mb-5'>Home</li>
                            <li className='mb-5'>portfolio</li>
                            <li className='mb-5'>contact</li>
                            <li className='mb-5'>about</li>
                            <li className='mb-20'>site by Abed</li>
                        </ul>

                    </div>


                </div>

            </ReactLenis>





        </>
    );

}
