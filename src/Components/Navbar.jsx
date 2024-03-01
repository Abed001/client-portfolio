import React from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { useState, useEffect } from 'react'
import { Link, useNavigate, NavLink } from "react-router-dom";
import FirstSection from './FirstSection';
import Black_colour from '/assets/Black_colour.jpg'


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

    //prevent scrolling on menu open

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }

        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [open]);


    {/*adding transaprent gb*/ }
    return (

        <div className=' w-[95%] bg-transparent tracking-tighter relative font-openSans font-bold text-white text-heading6 flex bg-purple justify-between py-5 px-5 lg:py-5 lg:px-10'>
            <span className=' z-30 uppercase'>metafy</span>


            {open && (
                <div className='overflow-hidden flex flex-col justify-center items-center w-[100%] min-h-[100vh] z-10'>

                    <div className='flex flex-col justify-center items-center text-heading1 lg:text-heading2 w-[100%] h-[100vh] absolute right-10 top-0'>
                        <ul className='ml-20 pt-80 pb-60 tracking-tighter mr-20 list-none uppercase text-center text-heading3 lg:text-heading1 bg-blue-500 w-[100%] h-[100vh] '>
                            <li>portfolio</li>
                            <li>acclaim</li>
                            <li>contact</li>
                            <li className='mb-40'>about</li>

                        </ul>

                    </div>

                </div>)}

            <span className='z-30 cursor-pointer text-white mr-5 ' onClick={handleMenuToggle}>{text}</span>




        </div>
    )
}
