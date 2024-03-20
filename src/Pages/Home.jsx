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
import { motion } from 'framer-motion';


export default function Home() {
    return (
        <ReactLenis root>
            <motion.div
                initial={{ opacity: 0 }} // Fade in from invisible
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }} // Fade duration (1 second)
            >
                <div className='overflow-x-hidden overflow-hidden '>
                    <FirstSection />
                    <SecondSection />
                </div>
            </motion.div>
        </ReactLenis>

    );

}




