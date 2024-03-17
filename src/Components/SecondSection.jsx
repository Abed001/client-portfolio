import React from 'react'
import Marquee from "react-fast-marquee";
import { useState, useEffect } from 'react'
import { BsInstagram } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import Footer from './Footer';

export default function SecondSection() {

    const comp = useRef(null)
    const [hovered, setHovered] = useState(false);


    useLayoutEffect(() => {
        const element = comp.current;

        if (!element) return; // Handle potential null reference

        const tl = gsap.timeline({ paused: true }); // Create a paused timeline

        // Apply ScrambleText effect to the timeline

        tl.from(["#scramble"], {
            duration: 1,
            scrambleText: "THIS IS NEW TEXT"
        })

        // Handle hover events
        element.addEventListener('mouseenter', () => {
            setHovered(true); // Update state for conditional rendering (optional)
            tl.play();
        });

        element.addEventListener('mouseleave', () => {
            setHovered(false); // Update state for conditional rendering (optional)
            tl.reverse();
        });

        return () => {
            tl.kill(); // Cleanup timeline on unmount
            element.removeEventListener('mouseenter', () => tl.play());
            element.removeEventListener('mouseleave', () => tl.reverse());
        };
    }, [comp]);

    return (
        <div ref={comp} className=' font-openSans font-bold text-white text-heading3 lg:text-heading1'>
            <section className='mt-[-100px] flex flex-col w-[100%] justify-center lg:justify-start'>



                <div className=' font-bold w-[50%] h-20 arrow mt-60 mb-40 lg:mt-60 ml-10 flex justify-start text-heading4 lg:text-heading4 lg:w-[50%] ' >
                    <div>  <AiOutlineMail size={40} /></div>
                    <div className='leading-8'>
                        <span className='uppercase text-left block tracking-tight'>get in </span>
                        <span className=' uppercase text-left block tracking-tight'>touch</span>
                    </div>
                    <div id='mailarrow' className='lg:hidden md:hidden mr-10 mt-8'><GoArrowRight size={40} stroke-width="1" /></div>
                    <div id='mailarrow' className=' hidden-on-phone ml-2 mt-5'>< GoArrowRight size={50} stroke-width="1" /></div>

                </div>

                <div className='ml-auto w-[50%] h-20 arrow  mb-40  flex justify-start text-heading4 lg:text-heading4 lg:w-[50%] ' >
                    <div className='mr-2 '>  <BsInstagram size={30} /></div>
                    <div className='leading-8'>
                        <span className='uppercase  text-left block tracking-tighter'>follow</span>
                        <span className=' uppercase  text-left block tracking-tighter'>mehyo</span>
                    </div>
                    <div id='mailarrow' className='lg:hidden md:hidden mr-10 mt-8'><GoArrowRight size={40} stroke-width="1" /></div>
                    <div id='mailarrow' className=' hidden-on-phone mt-5'>< GoArrowRight size={50} stroke-width="1" /></div>

                </div>


            </section>

            <div className='tracking-tighter uppercase'>
                <Marquee >
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            <Footer />



        </div>
    )
}
