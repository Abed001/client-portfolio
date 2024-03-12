import React from 'react'
import Navbar from '../Components/Navbar'
import Original_Camera from '/assets/invest_qatar/Original_Camera.webp'
import Footer from '../Components/Footer';
import SecondSection from '../Components/SecondSection';
import PortfolioItem from '../Components/PortfolioItem'; // Import the component
import Marquee from "react-fast-marquee";
import { IoCloseSharp } from "react-icons/io5";
import PortfolioItemLeft from '../Components/PortfolioItemLeft';

export default function InvestProject() {
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






  return (
    <div className=' relative overflow-hidden'>
      <div className='fixed top-0 left-0 right-0 z-50'>
        <Navbar /></div>
      <div className=' min-h-[100vh] flex flex-col items-center justify-center font-openSans font-bold text-white text-heading3 lg:text-heading1'>
        <p className='absolute top-[410px] text-white text-para font-bold lg:top-[110px]'>[Back]</p>

        <p className='hidden-on-phone absolute text-white text-heading font-bold lg:top-[70px] uppercase'>invest</p>

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


        {/* draggable slider*/}

        {/* back to home link*/}


      </div>
      
      <SecondSection/>

    </div>
  )
}
