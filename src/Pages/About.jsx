import React, { useState, useEffect } from 'react';
import SecondSection from '../Components/SecondSection';
import mehyo from '/assets/mehyo/mehyo.webp'
import Marquee from "react-fast-marquee";
import { IoCloseSharp } from "react-icons/io5";
import Navbar from '../Components/Navbar';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { motion, useTransform, useScroll } from "framer-motion";
import { useLayoutEffect, useRef } from "react"
import CustomCursor from 'custom-cursor-react';
import Layout from "../Components/Layout"



export default function About() {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Calculate offset for image and text based on scroll progress
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]); // Adjust "-50%" for desired image movement
  const textY = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]); // Adjust "50%" for desired text movement

  return (
    <ReactLenis root>
      <Layout>

        <div ref={targetRef} className='relative overflow-x-hidden overflow-y-hidden flex flex-col justify-center items-center px-5 text-white'>
          <CustomCursor
            targets={['img', 'marquee']}
            customClass='custom-cursor'
            fill='#912BBC'
            smoothness={{
              movement: 0.2,
              scale: 0.1,
              opacity: 0.2,
            }}
            targetOpacity={0.5}
          />
          <motion.h3 style={textY} className='z-20 textleft leading-8 uppercase text-heading4 tracking-tighter lg:text-heading1 lg:leading-[0.85] lg:w-full mt-40 '>
            <span className='lg:ml-80 lg:block'>FROM A FERVENT</span> <span className='lg:block'>FIRE—FUELED BY FASHION, MUSIC, AND DESIGN—MOHIE
              <span className='lg:block'>EDDIN</span> <span className='lg:ml-40'>ZIDANE</span>  <span className='lg:ml-80'>RISES</span></span>
          </motion.h3>

          <div className='w-[100%] flex flex-col justify-center  lg:flex-row lg:justify-between'>
            <div className='w-[100%] flex justify-start'>
              <p id='text2' className='font-bold mt-[-38px] justify-end text-left leading-none uppercase text-smallpara tracking-tighter max-w-[130px] lg:mt-20 lg:text-para lg:max-w-[190px]'>
                THE MIND THAT SEEKS
                TO BREAK THE MOLD</p>
            </div>

            <motion.div style={{ y: imageY }} className='w-[100%] justify-start'>

              <img className='z-10 w-full object-cover object-center lg:w-[1000px] lg:h-[1500px] ' src={mehyo} alt="" />

            </motion.div>

          </div>

          <div className='w-[100%] absolute top-[900px] lg:top-[1430px] tracking-tighter uppercase'>

            <Marquee>
              <p className="pt-10 hidden-on-phone "><IoCloseSharp name="close" size={180} strokeWidth={50} /></p>
              <p className="pt-2 px-4 lg:hidden md:hidden "><IoCloseSharp name="close" size={50} strokeWidth={70} /></p>

              <span className="text-heading2  lg:text-[18rem] font-bold ">Mohie eddin zidane</span>

              <p className="pt-10 hidden-on-phone "><IoCloseSharp name="close" size={180} strokeWidth={50} /></p>
              <p className="pt-2 px-4 lg:hidden md:hidden "><IoCloseSharp name="close" size={50} strokeWidth={70} /></p>

              <span className="text-heading2  lg:text-[18rem] font-bold ">Mohie eddin zidane</span>

            </Marquee>

          </div>

          <div className='fixed top-0 left-0 right-0 z-50'>
            <Navbar />
          </div>
        </div>
        <div className='mt-[-300px] lg:mt-[-600px]'> <SecondSection /></div>

      </Layout>
    </ReactLenis>


  )
}
