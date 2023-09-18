import Comments from '@/components/Comments'
import Menu from '@/components/Menu'
import Image from 'next/image'
import React from 'react'

const SinglePage = () => {
    return (
        <div className='container mx-auto max-md:p-4'>
            <div className='flex'>
                <div className='flex flex-col justify-between'>
                    <h1 className='text-4xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <div className='flex gap-5 max-md:mt-5'>
                        <Image src="/p1.jpg" alt='' width={50} height={50} className='rounded-full w-12 h-12' />
                        <div className='flex flex-col justify-center'>
                            <p className='text-sm text-gray-500'>William Randolph</p>
                            <p className='text-sm text-gray-500'>25 April 2023</p>
                        </div>
                    </div>
                </div>
                <div className='max-md:hidden'>
                    <Image src="/p1.jpg" alt='' fill className='w-full h-[400px]' />
                </div>
            </div>
            <div className='flex mt-10 gap-10'>
                <div className='flex-[2_2_0]'>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odit voluptas quod exercitationem dolores inventore natus voluptatibus, consectetur autem assumenda a aliquam pariatur itaque dolorem atque nostrum aperiam ratione impedit?</p>
                        <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sed soluta dignissimos voluptate voluptatibus ea veniam ad! Voluptatibus, sapiente minus molestiae maiores iure asperiores dolores iste aliquam cupiditate, esse consequatur adipisci. Praesentium maxime libero, nemo nisi, impedit ipsa possimus reprehenderit aliquam ratione adipisci sapiente? Minima dolore cupiditate ad laudantium in!</p>
                        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia similique suscipit aliquam nobis earum, voluptas ad consequatur dolorum cum? Tempore!</p>
                    </div>
                    <Comments />
                </div>
                <div className='flex-1'>
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default SinglePage