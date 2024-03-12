import React from 'react'

export default function PortfolioItemLeft({ imageSrc, title, description }){
    return (
        <div className='relative'>
            <div>
                <img className=' w-[100%] min-h-[100vh] object-cover object-center' src={imageSrc} alt={title} />
                <h3 className='absolute bottom-[-100px] text-left leading-7 uppercase text-heading5 tracking-tighter max-w-[400px] lg:text-heading2 lg:right-[-380px] lg:top-[450px] lg:leading-[0.85] lg:max-w-[700px]  '>{title}</h3>
                <p className='absolute bottom-[-200px] text-left leading-none uppercase text-para tracking-tighter max-w-[200px] lg:left-[353px] lg:top-[800px] '>{description}</p>
            </div>
        </div>
    )
}
