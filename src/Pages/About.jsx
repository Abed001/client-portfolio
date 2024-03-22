import React from 'react'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from "react"
import SecondSection from '../Components/SecondSection';
import mehyo from '/assets/mehyo/mehyo.webp'
import Marquee from "react-fast-marquee";
import { IoCloseSharp } from "react-icons/io5";
import Navbar from '../Components/Navbar';
import { motion } from 'framer-motion';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export default function About() {
  return (
    <ReactLenis root>
      <motion.div
        initial={{ opacity: 0 }} // Fade in from invisible
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} // Fade duration (1 second)
      >
        {/* Your page content */}

        <>
          <div className='relative overflow-x-hidden overflow-y-hidden flex flex-col justify-center items-center px-5 text-white'>
            <h3 className='textleft leading-8 uppercase text-heading4 tracking-tighter lg:text-heading1 lg:leading-[0.85] lg:w-full mt-40 '>
              <span className='lg:ml-80 lg:block'>FROM A FERVENT</span> <span className='lg:block'>FIRE—FUELED BY FASHION, MUSIC, AND DESIGN—MOHIE
                <span className='lg:block'>EDDIN</span> <span className='lg:ml-40'>ZIDANE</span>  <span className='lg:ml-80'>RISES</span></span> </h3>

            <div className='w-[100%] flex flex-col justify-center  lg:flex-row lg:justify-between'>
              <div className='w-[100%] flex justify-start'>
                <p id='text2' className='font-bold mt-[-38px] justify-end text-left leading-none uppercase text-smallpara tracking-tighter max-w-[130px] lg:mt-20 lg:text-para lg:max-w-[190px]'>
                  THE MIND THAT SEEKS
                  TO BREAK THE MOLD</p></div>

              <div className='w-[100%] justify-start'>

                <img className='w-full object-cover object-center lg:w-[1000px] lg:h-[1500px] ' src={mehyo} alt="" />

              </div>

            </div>

            <div className='w-[100%] absolute top-[1260px] lg:top-[1850px] tracking-tighter uppercase'>
              <Marquee  >
                <p className="pt-10 hidden-on-phone "><IoCloseSharp name="close" size={180} strokeWidth={50} /></p>
                <p className="pt-2 px-4 lg:hidden md:hidden "><IoCloseSharp name="close" size={50} strokeWidth={70} /></p>

                <span className="text-heading2  lg:text-[18rem] font-bold ">Mohie eddin zidane</span>

                <p className="pt-10 hidden-on-phone "><IoCloseSharp name="close" size={180} strokeWidth={50} /></p>
                <p className="pt-2 px-4 lg:hidden md:hidden "><IoCloseSharp name="close" size={50} strokeWidth={70} /></p>

                <span className="text-heading2  lg:text-[18rem] font-bold ">Mohie eddin zidane</span>

                {/* <p className='px-4'>x</p> <span className='text-heading2 lg:text-heading'>Mohie eddin zidane  x  Mohie eddin zidane</span> */}
              </Marquee>
            </div>

            <div className='fixed top-0 left-0 right-0 z-50'>
              <Navbar /></div>


          </div>
          <SecondSection />
        </>
      </motion.div>
    </ReactLenis>
  )
}
