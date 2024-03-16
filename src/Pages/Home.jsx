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
        <ReactLenis root>
            <div className='overflow-x-hidden overflow-hidden '>
                <FirstSection />
                <SecondSection />
            </div>
        </ReactLenis>

    );

}




