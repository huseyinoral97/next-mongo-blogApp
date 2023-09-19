"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const WritePage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    return (
        <div className='container mx-auto max-md:p-4 h-screen'>
            <div className="py-20">
                <input type="text" placeholder='Title' className='bg-transparent placeholder:text-4xl focus:outline-none h-10 text-4xl' />
                <div className='flex gap-10 mt-10'>
                    <button onClick={() => setOpen(!open)}>
                        <Image src="/plus.png" alt='' fill />
                    </button>
                    {
                        open && (
                            <div className='flex gap-10'>
                                <button>
                                    <Image src="/image.png" alt='' fill />
                                </button>
                                <button>
                                    <Image src="/external.png" alt='' fill />
                                </button>
                                <button>
                                    <Image src="/video.png" alt='' fill />
                                </button>
                            </div>
                        )
                    }

                </div>
                <ReactQuill style={{ height: '300px' }} className='mt-10 textArea placeholder:text-white' value={value} onChange={setValue} placeholder='Tell your story...' />
            </div>
            <button className="bg-green-900 rounded-full py-2 px-5 cursor-pointer">Publish</button>
        </div>
    )
}

export default WritePage