import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

export default function GitInTouchButton({ emailAddress = 'abousy-hero@hotmail.com', subject = 'Git in Touch' })    {
    const handleClick = () => {
        const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
        window.location.href = mailtoUrl;
    };

    return (
        <div onClick={handleClick} className='z-20 font-bold w-[50%] h-20 arrow mt-60 mb-40 ml-10 flex justify-start text-heading5 lg:text-heading4 lg:mt-60 lg:w-[50%] ' >
            <div className='cursor-pointer'>  <AiOutlineMail size={30} /></div>
            <div className='leading-8 cursor-pointer'>
                <span className='uppercase text-left block tracking-tight'>get <span>in</span> </span>
                <span className=' uppercase text-left block tracking-tight'>touch</span>
            </div>
            <div id='mailarrow' className=' cursor-pointer lg:hidden md:hidden ml-3 mt-8'><GoArrowRight size={30} stroke-width="1" /></div>
            <div id='mailarrow' className=' cursor-pointer  hidden-on-phone ml-2 mt-5'>< GoArrowRight size={50} stroke-width="1" /></div>

        </div>

    )
}
