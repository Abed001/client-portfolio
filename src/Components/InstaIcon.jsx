import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";



export default function InstaIcon({ username }) {
    const handleInstaClick = () => {
        // Validate username to prevent errors (optional)
        if (!username) {
            console.error('Missing username for Instagram profile link.');
            return;
        }

        window.open(`https://www.instagram.com/${username}`, '_blank');
    };
    return (
        <div  onClick={handleInstaClick}  className='mr-10 cursor-pointer z-20 ml-auto w-[50%] h-20 arrow  mb-40  flex justify-start text-heading5 lg:text-heading4 lg:w-[50%] lg:mb-0 lg:mr-0' >
            <div className='mr-2 '>  <BsInstagram size={30} username={username} /></div>
            <div className='leading-8'>
                <span className='uppercase  text-left block tracking-tighter'>follow</span>
                <span className=' uppercase  text-left block tracking-tighter'>mehyo</span>
            </div>
            <div id='mailarrow' className='lg:hidden md:hidden ml-[-6px] mt-8'><GoArrowRight size={30} stroke-width="1" /></div>
            <div id='mailarrow' className=' hidden-on-phone mt-5'>< GoArrowRight size={50} stroke-width="1" /></div>
        </div>

    )
}
{    /*    <div onClick={handleInstaClick} className='mr-2 '> <BsInstagram size={30} username={username} /></div>
    */}  