import { React, useState } from 'react'
import { Link } from "react-router-dom";
import Black_colour from '/assets/Black_colour.jpg'
import { IoCloseSharp } from "react-icons/io5";
import Navbar from './Navbar';


export default function FirstSection() {

    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <div>
            { /* <Navbar />*/}

            <div className='relative overflow-hidden min-h-[100vh]  flex flex-col font-openSans font-bold text-white text-heading3 lg:text-heading1'>

                <div className="uppercase list-none my-list wrapper flex flex-col justify-center items-center z-20 text-heading2 lg:text-heading1">

                    <div className="item"></div>

                    <div className="item cursor-pointer"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/InvestProject"> <span className="x mr-5">< IoCloseSharp
                        style={{
                            strokeWidth: '50px',
                        }} /></span>invest<span className="x ml-5">< IoCloseSharp
                            style={{
                                strokeWidth: '50px',
                            }} /></span></Link></div>


                    <div className="item cursor-pointer"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/KioskProject"> <span className="x mr-5">< IoCloseSharp
                        style={{
                            strokeWidth: '50px',
                        }} /></span>kiosk<span className="x ml-5">< IoCloseSharp
                            style={{
                                strokeWidth: '50px',
                            }} /></span></Link></div>


                    <div className="item cursor-pointer"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/ExpoProject"> <span className="x mr-5">< IoCloseSharp
                        style={{
                            strokeWidth: '50px',
                        }} /></span>expo<span className="x ml-5">< IoCloseSharp
                            style={{
                                strokeWidth: '50px',
                            }} /></span> </Link></div>


                    <div className="item cursor-pointer"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/QndProject"><span className="x mr-5">< IoCloseSharp
                        style={{
                            strokeWidth: '50px',
                        }} /></span>qnd<span className="x ml-5">< IoCloseSharp
                            style={{
                                strokeWidth: '50px',
                            }} /></span></Link></div>


                    <div className="bg">
                        {/*<img src={Black_colour} />*/}
                        <video autoPlay muted loop src="/assets/backvid.mp4"
                            className='absolute top-0 left-0 right-0 w-[100%] h-[100vh] object-cover -z-10'>
                        </video>
                        <img src="/assets/invest_qatar/Camera_2.webp" />
                        <img src={"/assets/neon_kiosk/kiosk1.webp"} />
                        <img src="/assets/qatar_expo/expo1.webp" />
                        <img src="/assets/qatar_national_day/nation1.webp" />
                    </div>



                </div>
                <div className='fixed top-0 left-0 right-0 z-50'>
                    <Navbar /></div>
            </div>

        </div>
    )
}
