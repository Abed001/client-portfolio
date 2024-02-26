import React from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { Link, useNavigate, NavLink } from "react-router-dom";

export default function Navbar() {

    const [clickedItemIndex, setClickedItemIndex] = useState(null);

    const [open, setOpen] = useState(false)

    const [iconState, setIconState] = useState("hamburger")

    const [text, setText] = useState("MENU")

    const handleItemClick = (index) => {
        setClickedItemIndex(index);
        setOpen(!open);
    };


    const handleMenuToggle = () => {
        setOpen(!open);
        setText(!open ? 'CLOSE' : 'MENU');
    };
    return (
        <div className='tracking-tighter overflow-hidden relative font-openSans font-bold text-white text-heading6 flex bg-purple justify-between py-5 px-5 lg:py-5 lg:px-10'>
            <span className=' z-30 uppercase'>metafy</span>


            {open && (
                <div className=' flex flex-col justify-center items-center w-[100%] h-[100vh] z-10'>

                    <div className='border-8 border-indigo-600 flex flex-col justify-center items-center text-heading1 lg:text-heading2 w-[100%] h-[100vh] absolute right-0 top-0'>
                        <ul className='ml-10 pt-80 pb-60 tracking-tighter mr-20 list-none uppercase text-center text-heading3 lg:text-heading1 bg-black h-[100vh] '>
                            <li>portfolio</li>
                            <li>acclaim</li>
                            <li>contact</li>
                            <li>about</li>
                          
                            </ul>

                    </div>

                </div>)}

            <span className='z-30 cursor-pointer text-white ' onClick={handleMenuToggle}>{text}</span>


        </div>
    )
}
