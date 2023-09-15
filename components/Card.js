import Image from 'next/image'
import React from 'react'

const Card = () => {
    return (
        <div className='flex'>
            <div className='flex-1'>
                <Image src="/p1.jpg" alt='' width={10} height={10} className='w-full h-auto' />
            </div>
            <div className='flex-1 px-10 flex flex-col justify-between items-start'>
                <p>11/02/2023 - <span className="text-red-500 font-semibold">CULTURE</span></p>
                <h3 className='font-bold text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, corrupti.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tenetur quasi voluptates dignissimos, consectetur adipisicing elit. Est tenetur quasi voluptates dignissimos,</p>
                <p className="border-b-2 border-b-orange-500 inline-block cursor-pointer">Read More</p>
            </div>
        </div>
    )
}

export default Card