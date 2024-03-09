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
            <section className='flex flex-row w-[100%] justify-center lg:justify-start'>

                <div className='h-20 arrow mt-20 lg:mt-40 ml-10 flex text-heading5 lg:text-heading4  lg:w-[50%] ' >
                    <div>  <AiOutlineMail size={40} /></div>
                    <div>
                        <span className='uppercase  text-center block tracking-tighter'>get in </span>
                        <span className=' uppercase  text-center block tracking-tighter'>touch</span>
                    </div>
                    <div className='lg:hidden md:hidden mr-10 mt-8'><GoArrowRight style={{ transform: 'rotate(-45deg)' }} size={40} stroke-width="1" /></div>
                    <div id='mailarrow' className=' hidden-on-phone mr-10 mt-10'>< GoArrowRight size={50} stroke-width="1" /></div>

                </div>



                <div className='mx-auto arrow mt-60 mb-40 flex text-heading5 lg:text-heading4 lg:w-[50%] lg:justify-end lg:mr-60 ' >
                    <div className=' mr-2'>  <BsInstagram size={30} /></div>
                    <div>
                        <span className=' uppercase  text-center block tracking-tighter'>follow </span>
                        <span className='uppercase  text-center block tracking-tighter'>mehyo</span>
                    </div>
                    <div className='lg:hidden md:hidden mr-10 mt-8'><GoArrowRight style={{ transform: 'rotate(-45deg)' }} size={40} stroke-width="1" /></div>
                    <div id='instarrow' className='hidden-on-phone mr-10 mt-10'><GoArrowRight size={50} stroke-width="1" /></div>


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
