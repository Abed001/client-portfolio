import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import Scramble from 'react-scramble'



export default function Navbar() {
    const comp = useRef(null)
    const [hovered, setHovered] = useState(false);

    const [isPlaying, setIsPlaying] = useState(false);

    const [clickedItemIndex, setClickedItemIndex] = useState(null);

    const [open, setOpen] = useState(false)

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


    useLayoutEffect(() => {
        const element = comp.current;

        if (!element) return; // Handle potential null reference

        const tl = gsap.timeline({ paused: true }); // Create a paused timeline

        // Define animation for elements with ID "name" (assuming your structure)
        tl.from(["#name"], {
            opacity: 0,
            xPercent: 100, // Off-screen to the right
            duration: 1.3,
            stagger: 0.1,
            ease: "power3.out",
        })
            .to(["#name"], {
                opacity: 1, // Fully visible
                duration: 1.3,
                stagger: 0.1,
                ease: "power3.out",
            });

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


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()
            t1.from(["#menu"], {
                opacity: 0,

                xPercent: -20,
                duration: 1,
                delay: 0.1,
                stagger: 0.1,
                ease: "power1.out",
            })

                .to(["#menu"], {
                    opacity: 1,

                    xPercent: -20,
                    duration: 1,
                    delay: 0.1,
                    stagger: 0.1,
                    ease: "power1.out",
                })

        }, comp)
        return () => ctx.revert()
    }, [open])


    const location = useLocation();

    const handleClick = () => {
        if (location.pathname === to) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };




    {/*adding transaprent gb*/ }
    return (

        <div ref={comp} className='w-[100%] lg:w-[95%] bg-transparent tracking-tighter relative font-openSans font-bold text-white text-heading6 flex bg-purple justify-between py-5 px-5 lg:py-5 lg:px-10'>
            { /*  <span id='name' className=' z-30 uppercase'>Mohieddin Zidane</span>*/}
            <div className='h-[60px] name flex flex-col z-50 uppercase tracking-tighter' >
                <div className=' flex items-center justify-left'><p>M</p><span id='name'>ohie </span></div>
                <div className=' flex items-center justify-left'><p>E</p><span id='name'>ddin </span></div>
                <div className=' flex items-center justify-left'><p>Z</p><span id='name'>idane </span></div>
            </div>


            {open && (


                <div className=' flex flex-col justify-center items-center w-[100%] min-h-[100vh] z-40'>

                    <div className='my-list flex flex-col justify-center items-center text-heading1 lg:text-heading2 w-[100%] h-[100vh] absolute right-0 left-0 top-0'>
                        <ul className=' pt-[450px] pb-60 tracking-tighter mr-20 list-none uppercase text-center text-heading3 lg:text-heading1 bg-black w-[100%] h-[100vh] lg:mr-5 '>

                            <Link onClick={handleClick} style={{ textDecoration: 'none', color: 'inherit' }} to="/">

                                <li> <Scramble
                                    autoStart={false}
                                    mouseEnterTrigger="restart"
                                    text="portfolio"
                                    steps={[
                                        {
                                            roll: 2,
                                            action: '+',
                                            type: 'forward',
                                        },
                                        {
                                            action: '-',
                                            type: 'forward',
                                        },
                                    ]}
                                /></li></Link>

                            <li> <Scramble
                                autoStart={false}
                                mouseEnterTrigger="restart"
                                text="acclaim"
                                steps={[
                                    {
                                        roll: 2,
                                        action: '+',
                                        type: 'forward',
                                    },
                                    {
                                        action: '-',
                                        type: 'forward',
                                    },
                                ]}
                            /></li>

                            <Link onClick={handleClick} style={{ textDecoration: 'none', color: 'inherit' }} to="/Contact">
                                <li> <Scramble
                                    autoStart={false}
                                    mouseEnterTrigger="restart"
                                    text="contact"
                                    steps={[
                                        {
                                            roll: 2,
                                            action: '+',
                                            type: 'forward',
                                        },
                                        {
                                            action: '-',
                                            type: 'forward',
                                        },
                                    ]}
                                /></li></Link>

                            <Link onClick={handleClick} style={{ textDecoration: 'none', color: 'inherit' }} to="/About">
                                <li className='mb-40'> <Scramble
                                    autoStart={false}
                                    mouseEnterTrigger="restart"
                                    text="about"
                                    steps={[
                                        {
                                            roll: 2,
                                            action: '+',
                                            type: 'forward',
                                        },
                                        {
                                            action: '-',
                                            type: 'forward',
                                        },
                                    ]}
                                /></li></Link>





                        </ul>

                    </div>

                </div>
            )}


            <span id='menu' className='h-[20px] z-50 cursor-pointer text-white mr-5 ' onClick={handleMenuToggle}>
                {text}
            </span>




        </div>
    )
}
