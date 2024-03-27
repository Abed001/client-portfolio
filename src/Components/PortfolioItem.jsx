import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from "react"


export default function PortfolioItem({ imageSrc, title, description }) {

    gsap.registerPlugin(ScrollTrigger);
    const comp = useRef(null)


    useLayoutEffect(() => {

        let ctx = gsap.context(() => {
            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#text2",
                    pin: true, // pin the trigger element while active
                    start: "top 50%", // Animation starts when the top of #text reaches 50% of the viewport
                    end: "bottom 90%",   // Start animation when the top of the trigger reaches the top of the viewport
                    // end after scrolling 500px beyond the start
                    scrub: 6,
                    onEnter: () => tl.play(),
                    onLeave: () => tl.pause(),
                }

            })
            t1.from("#text2", {
                ease: "expoScale(0.5,7,none)",
                y: "-5px",
                duration: 0.10,

            })

                .to("#text2", {
                    ease: "expoScale(0.5,7,none)",
                    y: "5px",
                    duration: 0.10,

                })

        }, comp)
        return () => ctx.revert()
    }, [])




    return (
        <div ref={comp} className='relative'>
            <div>
                <img className='w-[100%] min-h-[100vh] object-cover object-center' src={imageSrc} alt={title} />

                <h3  id='text2' className=' absolute bottom-[-100px] text-left leading-7 uppercase text-heading5 tracking-tighter max-w-[400px] lg:text-heading2 lg:right-[-250px] lg:top-[450px] lg:leading-[0.85] lg:max-w-[700px]'>{title}</h3>

                <p id='text2' className='absolute bottom-[-200px] text-left leading-none uppercase text-para tracking-tighter max-w-[200px] lg:left-[-150px] lg:top-[550px] '>{description}</p>

            </div>
        </div >
    )
}



