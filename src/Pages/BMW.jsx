
import Navbar from '../Components/Navbar'
import SecondSection from '../Components/SecondSection';
import PortfolioItem from '../Components/PortfolioItem';
import Marquees from '../Components/Marquees';
import PortfolioItemLeft from '../Components/PortfolioItemLeft';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MySlider from '../Components/MySlider';
import { Link, useLocation } from "react-router-dom";
import Scramble from 'react-scramble'
import { ReactLenis } from '@studio-freight/react-lenis'
import { GoArrowRight } from "react-icons/go";
import { useRef } from "react"
import { motion } from "framer-motion";
import Layout from '../Components/Layout';
export default function BMW() {
    const comp = useRef(null);

    const bmwPageImages = [
        '/assets/bmw/BMWStand1.webp',
        '/assets/bmw/BMWStand2.webp',
        '/assets/bmw/BMWStand3.webp',
        '/assets/bmw/BMWStand4.webp',
        '/assets/bmw/BMWStand5.webp',
        '/assets/bmw/BMWStand6.webp',
    ];

    const project1Data = { imageSrc: bmwPageImages[0] };
    const project2Data = { imageSrc: bmwPageImages[1] };
    const project3Data = { imageSrc: bmwPageImages[2] };
    const project4Data = { imageSrc: bmwPageImages[3] };
    const project5Data = { imageSrc: bmwPageImages[4] };
    const project6Data = { imageSrc: bmwPageImages[5] };

    const location = useLocation();

    const handleClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <ReactLenis root>
            <Layout>
                <div ref={comp} className='relative overflow-hidden'>
                    <div className='fixed top-0 left-0 right-0 z-50'>
                        <Navbar />
                    </div>
                    <div className='min-h-[100vh] flex flex-col items-center justify-center font-openSans font-bold text-white text-heading3 lg:text-heading1'>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
                            <p className='absolute top-[410px] ml-[-35px] text-white text-[0.85rem] font-bold lg:top-[110px] lg:ml-0'>
                                <Scramble
                                    autoStart={false}
                                    mouseEnterTrigger="restart"
                                    text="[BACK]"
                                    steps={[
                                        { roll: 2, action: '+', type: 'forward' },
                                        { action: '-', type: 'forward' },
                                    ]}
                                />
                            </p>
                        </Link>
                        <motion.p id='text' className='hidden-on-phone absolute text-white text-heading font-bold lg:top-[70px] uppercase'>BMW</motion.p>
                        <img className='w-[100%] min-h-[100vh] object-cover object-center lg:mt-[400px]' src='/assets/bmw/BMWStand3.webp' alt="BMW project" loading='eager' />
                        <div className='w-[100%] absolute top-[500px] right-0 lg:hidden md:hidden flex justify-center items-center tracking-tighter uppercase'>
                            <Marquees />
                        </div>
                        <div className="mb-60 p-5 lg:w-1/2 lg:mb-[500px] ">
                            <PortfolioItem {...project1Data} />
                        </div>
                        <div className="mr-auto mb-60 p-5 lg:w-1/2">
                            <PortfolioItemLeft {...project2Data} />
                        </div>
                        <div className="mb-60 portfolio lg:mt-20 lg:mb-0 lg:w-1/2">
                            <PortfolioItem {...project3Data} />
                        </div>
                        <div className="mr-auto mb-60 p-5 lg:mb-[300px] lg:w-1/2">
                            <PortfolioItemLeft {...project4Data} />
                        </div>
                        <div className="mb-60 p-5 lg:w-1/2">
                            <PortfolioItem {...project5Data} />
                        </div>
                        <div className="mr-auto mb-60 portfolio lg:mb-80 lg:w-1/2">
                            <PortfolioItemLeft {...project6Data} />
                        </div>
                        <MySlider images={bmwPageImages} />
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/" onClick={handleClick}>
                            <div className='font-bold leading-8 absolute bottom-[1100px] right-10 arrow flex text-heading5 lg:text-heading4 lg:w-[70%] lg:mb-20 lg:bottom-[600px] lg:left-[610px] ' >
                                <div id='mailarrow' className='arrow lg:hidden md:hidden'><GoArrowRight size={40} strokeWidth="1" /></div>
                                <div id='mailarrow' className='hidden-on-phone'><GoArrowRight size={50} strokeWidth="1" /></div>
                                <div>
                                    <span className='uppercase text-left block tracking-tight'>back to all</span>
                                    <span className='uppercase text-left block tracking-tight'>projects</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <SecondSection />
                </div>
            </Layout>
        </ReactLenis>
    );
}
