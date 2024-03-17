import React from 'react'
import { Link } from "react-router-dom";
import Scramble from 'react-scramble'
export default function Footer() {
    return (
        <div className='font-openSans font-bold text-white text-heading3 lg:text-heading1'>
            <div className=' uppercase hidden-on-phone text-left text-para flex lg:flex-row justify-between items-center w-[100%]'>
                <p className='font-openSans ml-10'>Mehyo @ 2023</p>
                <ul className='font-openSans p-0 m-0 list-none lg:flex'>

                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/"><li className='mr-5 font-openSans'> <Scramble
                        autoStart={false}
                        mouseEnterTrigger="restart"
                        text="home"
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

                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Portfolio"><li className='mr-5 font-openSans'> <Scramble
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


                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Contact"><li className='mr-5 font-openSans'> <Scramble
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


                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/About"><li className='mr-5 font-openSans'> <Scramble
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
                <p className='mr-10 font-openSans' >site by Abed</p>
            </div>


            <div className='mt-5 font-openSans lg:hidden md:hidden text-left text-para flex flex-col lg:flex-row items-center  w-[100%]'>
                <ul className='w-[100%] justify-start p-0 ml-40 uppercase list-none lg:flex'>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/"><li className='mr-5 mb-5 '>Home</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Portfolio"><li className='mr-5 mb-5'>portfolio</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Contact"><li className='mr-5 mb-5'>contact</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/About"><li className='mr-5 mb-5'>about</li></Link>
                    <li className='mb-20'>site by Abed</li>
                </ul>

            </div>

        </div>
    )
}
