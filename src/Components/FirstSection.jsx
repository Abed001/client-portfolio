import React from 'react'
import Navbar from '../Components/Navbar';
import UnorderedList from './UnorderedList';
export default function FirstSection() {
    return (
        <div>
            <Navbar />


            <div className=' overflow-hidden min-h-[100vh] flex flex-col font-openSans font-bold text-white text-heading3 lg:text-heading1'>
                <div className='pt-40 pb-40 flex flex-col justify-center items-center text-center bg-black  w-[100%]'>
                    <ul className=' my-list mr-10 uppercase list-none'>
                        <li className=' cursor-pointer'><span class="x  mr-5">x</span>invest<span class="x  ml-5">x</span></li>
                        <li className=' cursor-pointer'><span class="x  mr-5">x</span>kiosk<span class="x  ml-5">x</span></li>
                        <li className=' cursor-pointer'><span class="x  mr-5">x</span>expo<span class="x  ml-5">x</span></li>
                        <li className=' cursor-pointer'><span class="x  mr-5">x</span>qnd<span class="x  ml-5">x</span></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
