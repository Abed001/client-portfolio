
import React, { useState, useEffect } from 'react';
import { useLayoutEffect, useRef } from "react"
import SecondSection from '../Components/SecondSection';
import mehyo2 from '/assets/mehyo/mehyo2.webp'
import mehyo from '/assets/mehyo/mehyo.webp'
import Marquee from "react-fast-marquee";
import { IoCloseSharp } from "react-icons/io5";
import Navbar from '../Components/Navbar';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { motion, useTransform, useScroll } from "framer-motion";
import CustomCursor from 'custom-cursor-react';
import Emailbutton from '../Components/Emailbutton';
import { Link, useLocation } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import EmailTeamButton from '../Components/EmailTeamButton';

export default function Contact() {
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };


  return (
    <ReactLenis root>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} >
        {/* Your page content */}
        <main className='relative pl-5 overflow-hidden  text-white flex flex-col z-20 textleft leading-8  uppercase text-heading4 tracking-[-4px] lg:tracking-[-10px] lg:text-heading1 lg:leading-[0.5] lg:w-full mt-40 lg:pl-0'>
          <h1 className=' lg:mt-20  lg:text-[10rem]'> <span className='lg:ml-[370px]'>DIVULGE</span>
            <div className='p-0 m-0 flex justify-left items-center'><span>IN DESIGN </span> <span className='ml-[-20px] hidden-on-phone'><IoCloseSharp name="close" size={180} /></span>
              <span className='ml-[-10px] lg:hidden md:hidden'><IoCloseSharp name="close" size={100} /></span></div>
            DECADENCE</h1>

          <p className='max-w-[190px] pl-1 font-bold mt-[-15px] justify-end text-left leading-4 uppercase text-smallpara tracking-tight min-w-[200px] lg:mt-[-50px] lg:text-[0.8rem] lg:max-w-[190px] lg:pl-3'>
            DARE TO EXTRAPOLATE THE LINE THAT CONNECTS THE REAL AND THE DIVINE, AND EMBRACE THE BEAUTY OF OUR OWN ABSURDITY.

          </p>
          <div className='mb-40 mt-20 lg:mt-20 w-[100%] flex justify-center items-center'>
            <img src={mehyo} className='w-[50%] max-h-[300px] lg:max-h-[700px] object-cover object-top-top lg:w-[40%]' />
            <div className='mt-[100px] lg:mt-0'>
              <div className='mt-[-200px] lg:mt-[-300px] w-[50%] lg:w-[30%] lg:ml-40'>
                <Emailbutton emailAddress="abousy-hero@hotmail.com" subject="Specific Inquiry" />
                <EmailTeamButton emailAddress="abousy-hero@hotmail.com" subject="Specific Inquiry"/>
              </div>
            </div>

          </div>




        </main>
      </motion.div>

    </ReactLenis>
  )
}
