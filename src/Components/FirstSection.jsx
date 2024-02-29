import { React, useState } from 'react'
import Navbar from '../Components/Navbar';
import { Link, useNavigate, NavLink } from "react-router-dom";
import Black_colour from '/assets/Black_colour.jpg'


export default function FirstSection() {
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <div>
            { /* <Navbar />*/}

            
            <div className='relative overflow-hidden min-h-[100vh]  flex flex-col font-openSans font-bold text-white text-heading3 lg:text-heading1'>
                {/*this div <div className=' pt-40 pb-40 flex flex-col justify-center items-center text-center bg-black  w-[100%]'>
                    <ul className=' my-list mr-10 uppercase list-none'>

                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/InvestProject"><li
                            className=' hover:bg-investbg hover:bg-cover hover:no-repeat cursor-pointer'><span className="x mr-5">x</span>invest<span className="x ml-5">x</span></li></Link>

                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/KioskProject"><li className=' hover:bg-kioskbg hover:bg-cover hover:no-repeat cursor-pointer'><span className="x  mr-5">x</span>kiosk<span className="x  ml-5">x</span></li></Link>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/ExpoProject"><li className='hover:bg-expobg hover:bg-cover hover:no-repeat cursor-pointer'><span className="x  mr-5">x</span>expo<span className="x  ml-5">x</span></li></Link>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/QndProject"> <li className='hover:bg-qndbg hover:bg-cover hover:no-repeat cursor-pointer'><span className="x  mr-5">x</span>qnd<span className="x  ml-5">x</span></li></Link>

                    </ul>
                </div>*/}

                {/*delete absolute if it didnt work*/}
               
                <div class=" wrapper flex flex-col justify-center items-center">

                    <div class="item"></div>
                    <div class="item">invest</div>
                    <div class="item">kiosk</div>
                    <div class="item">expo </div>
                    <div class="item">qnd </div>
                    <div class="bg">
                        <img src={Black_colour} />
                        <img src="/assets/invest_qatar/200_Camera_2.png" />
                        <img src="/assets/neon_kiosk/first.jpg"/>
                        <img src="/assets/qatar_expo/firstexpo.jpg"/>
                        <img src="/assets/qatar_national_day/amphi-1.jpg"/>

                       
                    </div>
                    <div className='absolute top-0 left-0 right-0'><Navbar/></div>
                  
                </div>

            </div>
        </div>
    )
}
