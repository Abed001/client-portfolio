import React from 'react'
import Marquee from "react-fast-marquee";

function Marquees() {
    return (
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
    )
}

export default Marquee
