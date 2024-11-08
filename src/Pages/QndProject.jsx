import React from 'react'
import Navbar from '../Components/Navbar'
import SecondSection from '../Components/SecondSection';
import PortfolioItem from '../Components/PortfolioItem';
import Marquees from '../Components/Marquees';
import { IoCloseSharp } from "react-icons/io5";
import PortfolioItemLeft from '../Components/PortfolioItemLeft';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MySlider from '../Components/MySlider';
import { Link, useLocation } from "react-router-dom";
import Scramble from 'react-scramble'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { GoArrowRight } from "react-icons/go";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from "react"
import { motion, useTransform, useScroll } from "framer-motion";
import Layout from '../Components/Layout';



export default function QndProject() {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Calculate offset for image and text based on scroll progress
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]); // Adjust "-50%" for desired image movement
  const textY = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]); // Adjust "50%" for desired text movement


  gsap.registerPlugin(ScrollTrigger);
  const comp = useRef(null)

  const investPageImages = [
    "/assets/qatar_national_day/nation9.webp",
    "/assets/qatar_national_day/nation10.webp",
    "/assets/qatar_national_day/nation11.webp",
    "/assets/qatar_national_day/nation12.webp",
    "/assets/qatar_national_day/nation13.webp",
    "/assets/qatar_national_day/nation14.webp",
    "/assets/qatar_national_day/nation15.webp",
    "/assets/qatar_national_day/nation16.webp",
    "/assets/qatar_national_day/nation17.webp",
    "/assets/qatar_national_day/nation18.webp",
    "/assets/qatar_national_day/nation19.webp",
    "/assets/qatar_national_day/nation20.webp",
    "/assets/qatar_national_day/nation21.webp",
    "/assets/qatar_national_day/nation22.webp",
    "/assets/qatar_national_day/nation23.webp",
    "/assets/qatar_national_day/nation24.webp",
    "/assets/qatar_national_day/nation25.webp",
    "/assets/qatar_national_day/nation26.webp",
    "/assets/qatar_national_day/nation27.webp",
    "/assets/qatar_national_day/nation28.webp",
    "/assets/qatar_national_day/nation29.webp",
    "/assets/qatar_national_day/nation30.webp",
    "/assets/qatar_national_day/nation31.webp",
    "/assets/qatar_national_day/nation32.webp",
    "/assets/qatar_national_day/nation33.webp",
    "/assets/qatar_national_day/nation34.webp",
    "/assets/qatar_national_day/nation35.webp",
    "/assets/qatar_national_day/nation36.webp",
    "/assets/qatar_national_day/nation37.webp",
    "/assets/qatar_national_day/nation38.webp",
    "/assets/qatar_national_day/nation39.webp",
    "/assets/qatar_national_day/nation40.webp",
    "/assets/qatar_national_day/nation41.webp",
    "/assets/qatar_national_day/nation42.webp",
    "/assets/qatar_national_day/nation43.webp",
    "/assets/qatar_national_day/nation44.webp",



  ];


  const project1Data = {
    imageSrc: "/assets/qatar_national_day/nation2.webp",
    title: 'Exquisite lines define this space, its edges so sharp they take your breath away.Untamed energy radiates from within.',
    description: 'This space is a theatrical echo of a bygone era, a place where the flamboyant.',
  };

  const project2Data = {
    imageSrc: "/assets/qatar_national_day/nation3.webp",
    title: 'Exquisite lines define this space, its edges so sharp they take your breath away',
    description: 'This space is a theatrical echo of a bygone era, a place where the flamboyant.',
  };


  const project3Data = {
    imageSrc: "/assets/qatar_national_day/nation4.webp",
  };


  const project4Data = {
    imageSrc: "/assets/qatar_national_day/nation5.webp",
    title: 'Exquisite lines define this space, its edges so sharp they take your breath away',
    description: 'This space is a theatrical echo of a bygone era, a place where the flamboyant.',
  };


  const project5Data = {
    imageSrc: "/assets/qatar_national_day/nation6.webp",
    title: 'Exquisite lines define this space, its edges so sharp they take your breath away',
    description: 'This space is a theatrical echo of a bygone era, a place where the flamboyant.',
  };

  const project6Data = {
    imageSrc: "/assets/qatar_national_day/nation7.webp",

  };


  useLayoutEffect(() => {

    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#text",
          pin: true, // pin the trigger element while active
          start: "-100% top", // Start animation when the top of the trigger reaches the top of the viewport
          end: "bottom 70%", // end after scrolling 500px beyond the start
          scrub: 6,
          onEnter: () => tl.play(),
          onLeave: () => tl.pause(),
        }

      })
      t1.from("#text", {
        ease: "expoScale(0.5,7,none)",
        y: "-10px",
        duration: 0.10,

      })

        .to("#text", {
          ease: "expoScale(0.5,7,none)",
          y: "10px",
          duration: 0.10,

        })

    }, comp)
    return () => ctx.revert()
  }, [])

  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (

    <ReactLenis root>
      <Layout>
        {/*<motion.div
       initial={{ opacity: 1, x: "20%" }} // Initially off-screen to the right
       animate={{ opacity: 1, x: 0 }} // Slide to the left (0 position) to reveal
       exit={{ opacity: 0, x: "20%" }} // Exit animation (unchanged)
       transition={{ duration: 1 ,  ease: [0.83, 0, 0.17, 1]}}
  >*/}
        {/* Your page content */}

        <div  /*ref={targetRef}*/ ref={comp} className=' relative overflow-hidden'>
          <div className='fixed top-0 left-0 right-0 z-50'>
            <Navbar /></div>
          <div className=' min-h-[100vh] flex flex-col items-center justify-center font-openSans font-bold text-white text-heading3 lg:text-heading1'>

            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/"> <p className='absolute top-[410px] ml-[-35px] text-white text-[0.85rem] font-bold lg:top-[110px] lg:ml-0'> <Scramble
              autoStart={false}
              mouseEnterTrigger="restart"
              text="[BACK]"
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
            /></p></Link>
            <motion.p style={imageY} id='text' className='hidden-on-phone absolute text-white text-[10rem] font-bold lg:top-[70px] uppercase'>national day</motion.p>

            <img className=' w-[100%] min-h-[100vh] object-cover object-center lg:mt-[400px]' src="/assets/qatar_national_day/nation1.webp" alt="Qatar National Day project" loading='eager' />

            <div className='w-[100%] absolute top-[500px] right-0  lg:hidden md:hidden flex justify-center items-center tracking-tighter uppercase'>
              <Marquees />
            </div>

            <div className="mb-60 p-5 lg:w-1/2 lg:mb-[500px] ">
              <PortfolioItem key={project1Data.title} {...project1Data} />

            </div>

            <div className="mr-auto mb-60 p-5 lg:w-1/2">
              <PortfolioItemLeft key={project2Data.title} {...project2Data} />

            </div>

            <div className=" mb-60 portfolio lg:mt-20 lg:mb-0 lg:w-1/2">
              <PortfolioItem key={project3Data.title} {...project3Data} />

            </div>

            <div className="mr-auto mb-60 p-5 lg:mb-[300px] lg:w-1/2">
              <PortfolioItemLeft key={project4Data.title} {...project4Data} />

            </div>

            <div className="mb-60 p-5 lg:w-1/2 ">
              <PortfolioItem key={project5Data.title} {...project5Data} />

            </div>

            <div className="mr-auto mb-60 portfolio lg:mb-80 lg:w-1/2">
              <PortfolioItemLeft key={project6Data.title} {...project6Data} />

            </div>

            <MySlider images={investPageImages} />

            {/* back to home link*/}
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/" onClick={handleClick}>
              <div className='font-bold leading-8 absolute bottom-[1100px] right-10 arrow flex text-heading5 lg:text-heading4 lg:w-[70%] lg:mb-20 lg:bottom-[600px] lg:left-[610px] ' >
                <div id='mailarrow' className='arrow lg:hidden md:hidden'><GoArrowRight size={40} stroke-width="1" /></div>
                <div id='mailarrow' className=' hidden-on-phone'>< GoArrowRight size={50} stroke-width="1" /></div>
                <div>
                  <span className='uppercase  text-left block tracking-tight'>back to all</span>
                  <span className=' uppercase  text-left block tracking-tight'>projects</span>
                </div>

              </div>
            </Link>


          </div>

          <SecondSection />

        </div>
      </Layout>
    </ReactLenis>
  )
}
