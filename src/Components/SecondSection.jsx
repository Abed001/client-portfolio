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
import GitInTouchButton from './GitInTouchButton';
import { IoCloseSharp } from "react-icons/io5";
import InstaIcon from './InstaIcon';

export default function SecondSection() {
    const username = 'moheyzaidan';
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
        <div ref={comp} className='font-openSans font-bold text-white text-heading3 lg:text-heading1'>
            <section className='mt-[-100px] flex flex-col w-[100%] justify-center lg:justify-start'>

                <GitInTouchButton emailAddress="abousy-hero@hotmail.com" subject="Specific Inquiry" />
                <InstaIcon username={username} />


            </section>

            <div className='tracking-tighter uppercase'>
                <Marquee>
                    <p className="pt-5 px-4 hidden-on-phone "><IoCloseSharp name="close" size={80} strokeWidth={70} /></p>
                    <p className="pt-2 px-4 lg:hidden md:hidden "><IoCloseSharp name="close" size={50} strokeWidth={70} /></p>

                    <span className="text-heading2  lg:text-[8rem] font-bold ">Mohie eddin zidane</span>

                    <p className="pt-5 px-4 hidden-on-phone "><IoCloseSharp name="close" size={80} strokeWidth={70} /></p>                    <p className="pt-2 px-4 lg:hidden md:hidden "><IoCloseSharp name="close" size={50} strokeWidth={70} /></p>

                    <span className="text-heading2  lg:text-[8rem] font-bold ">Mohie eddin zidane</span>

                </Marquee>


            </div>


            <Footer />


        </div>
    )
}
