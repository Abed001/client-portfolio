import React from 'react'
import Navbar from '../Components/Navbar'
import Original_Camera from '/assets/invest_qatar/Original_Camera.webp'
import SecondSection from '../Components/SecondSection';
import PortfolioItem from '../Components/PortfolioItem';
import Marquee from "react-fast-marquee";
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



export default function InvestProject() {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Calculate offset for image and text based on scroll progress
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]); // Adjust "-50%" for desired image movement
  const textY = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]); // Adjust "50%" for desired text movement


  gsap.registerPlugin(ScrollTrigger);
  const comp = useRef(null)

  const investPageImages = [
    "/assets/invest_qatar/Camera_2.webp",
    "/assets/invest_qatar/Camera_11.webp",
    "/assets/invest_qatar/Camera_6.webp",
    "/assets/invest_qatar/Camera_8.webp",
    "/assets/invest_qatar/Camera_10.webp",

  ];


  const project1Data = {
    imageSrc: '/assets/invest_qatar/Camera_2.webp',
    title: 'Exquisite lines define this space, its edges so sharp they take your breath away.Untamed energy radiates from within.',
    description: 'This space is a theatrical echo of a bygone era, a place where the flamboyant.',
  };

  const project2Data = {
    imageSrc: '/assets/invest_qatar/Camera_8.webp',
    title: 'Exquisite lines define this space, its edges so sharp they take your breath away',
    description: 'This space is a theatrical echo of a bygone era, a place where the flamboyant.',
  };


  const project3Data = {
    imageSrc: '/assets/invest_qatar/Camera_12.webp',
  };


  const project4Data = {
    imageSrc: '/assets/invest_qatar/Camera_11.webp',
    title: 'Exquisite lines define this space, its edges so sharp they take your breath away',
    description: 'This space is a theatrical echo of a bygone era, a place where the flamboyant.',
  };


  const project5Data = {
    imageSrc: '/assets/invest_qatar/Camera_10.webp',
    title: 'Exquisite lines define this space, its edges so sharp they take your breath away',
    description: 'This space is a theatrical echo of a bygone era, a place where the flamboyant.',
  };

  const project6Data = {
    imageSrc: '/assets/invest_qatar/Camera_9.webp',

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
            <motion.p style={imageY} id='text' className='hidden-on-phone absolute text-white text-heading font-bold lg:top-[70px] uppercase'>invest</motion.p>

            <img className=' w-[100%] min-h-[100vh] object-cover object-center lg:mt-[400px]' src={Original_Camera} alt="invest project" />

            <div className='w-[100%] absolute top-[500px] right-0  lg:hidden md:hidden flex justify-center items-center tracking-tighter uppercase'>

              <Marquee speed={70}>
                <div className=' flex justify-center items-center'>
                  <span className="text-heading2 ">mehyo</span>
                  <span className="mt-2 "><IoCloseSharp name="close" size={70} /></span>
                  <span className="text-heading2 ">mehyo</span>
                  <span className="mt-2 "><IoCloseSharp name="close" size={70} /></span>
                  <span className="text-heading2 ">mehyo</span>
                  <span className="mt-2"><IoCloseSharp name="close" size={70} /></span>

                </div>
              </Marquee>

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
