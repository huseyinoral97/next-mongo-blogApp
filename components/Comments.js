import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Comments = () => {
    const status = "authenticated"
    return (
        <div className='mt-14'>
            <p className='font-bold text-2xl'>Comments</p>
            {
                status === "authenticated" ? (
                    <div className='flex mt-5 gap-5'>
                        <input type="text" placeholder='write a comment...' className='flex-[9_9_0] bg-white h-10 px-2' />
                        <button className="bg-green-600 text-white flex-1 px-3 py-1">Send</button>
                    </div>
                ) : (
                    <Link href="/login">Login to write a comment</Link>
                )
            }
            <div className='py-8'>
                <div className="mb-8">
                    <div className='flex gap-5'>
                        <Image src="/p1.jpg" alt='' width={50} height={50} className='rounded-full w-12 h-12' />
                        <div className='flex flex-col justify-center'>
                            <p className='text-sm text-gray-500'>William Randolph</p>
                            <p className='text-sm text-gray-500'>25 April 2023</p>
                        </div>
                    </div>
                    <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, distinctio.</p>
                </div>
                <div className="mb-8">
                    <div className='flex gap-5'>
                        <Image src="/p1.jpg" alt='' width={50} height={50} className='rounded-full w-12 h-12' />
                        <div className='flex flex-col justify-center'>
                            <p className='text-sm text-gray-500'>William Randolph</p>
                            <p className='text-sm text-gray-500'>25 April 2023</p>
                        </div>
                    </div>
                    <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, distinctio.</p>
                </div>
                <div className="mb-8">
                    <div className='flex gap-5'>
                        <Image src="/p1.jpg" alt='' width={50} height={50} className='rounded-full w-12 h-12' />
                        <div className='flex flex-col justify-center'>
                            <p className='text-sm text-gray-500'>William Randolph</p>
                            <p className='text-sm text-gray-500'>25 April 2023</p>
                        </div>
                    </div>
                    <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, distinctio.</p>
                </div>
            </div>
        </div>
    )
}

export default Comments