import React from 'react'

export default function PortfolioItemRight({ imageSrc, title, description }) {
    return (
        <div className='relative'>
            <div>
                <img className='w-[100%] min-h-[100vh] object-cover object-center' src={imageSrc} alt={title} />
                <h3 className='absolute bottom-[-100px] text-left leading-7 uppercase text-heading5 tracking-tighter max-w-[400px] lg:text-heading3 lg:right-[-250px] lg:top-[450px] lg:leading-none lg:max-w-[600px]  '>{title}</h3>
                <p className='absolute bottom-[-200px] text-left leading-none uppercase text-para tracking-tighter max-w-[200px] lg:left-[-150px] lg:top-[550px] '>{description}</p>
            </div>
        </div>
    )
}
