import React from 'react'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from "react"
import SecondSection from '../Components/SecondSection';
import mehyo from '/assets/mehyo/mehyo.webp'

export default function About() {
  return (
    <div className='overflow-x-hidden flex flex-col justify-center items-center px-5 text-white'>
      <h3 className='textleft leading-8 uppercase text-heading4 tracking-tighter lg:text-heading1 lg:leading-[0.85] lg:w-full mt-40 '>
        <span className='lg:ml-80 lg:block'>FROM A FERVENT</span> <span className='lg:block'>FIRE—FUELED BY FASHION, MUSIC, AND DESIGN—DAVID
          <span className='lg:block'>ANTHONY</span> <span className='lg:ml-40'>CHENAULT</span>  <span className='lg:ml-80'>RISES</span></span> </h3>

      <div className='w-[100%] flex flex-col justify-center  lg:flex-row lg:justify-between'>
        <div className='w-[100%] flex justify-start'>
          <p id='text2' className='font-bold mt-[-38px] justify-end text-left leading-none uppercase text-smallpara tracking-tighter max-w-[130px] lg:mt-20 lg:text-para lg:max-w-[190px]'>
            THE MIND THAT SEEKS
            TO BREAK THE MOLD</p></div>

        <div className='w-[100%] justify-start'>
          <img className='w-full object-cover object-center lg:w-[1000px] lg:h-[1500px] ' src={mehyo} alt="" />
        </div>
      </div>

      <SecondSection />
    </div>
  )
}
