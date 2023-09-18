import Image from 'next/image'
import React from 'react'

const Card = () => {
    return (
        <div className='flex mb-10'>
            <div className='flex-1'>
                <Image src="/p1.jpg" alt='' fill className='w-full h-auto max-md:hidden' />
            </div>
            <div className='md:flex-1 px-4 flex flex-col justify-between items-start'>
                <p>11/02/2023 - <span className="text-red-500 font-semibold">CULTURE</span></p>
                <h3 className='font-bold text-2xl max-md:mt-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, corrupti.</h3>
                <p className='max-md:mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tenetur quasi voluptates dignissimos, consectetur adipisicing elit. Est tenetur quasi voluptates dignissimos,</p>
                <p className="border-b-2 border-b-orange-500 inline-block cursor-pointer max-md:mt-5">Read More</p>
            </div>
        </div>
    )
}

export default Card