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
                <input type="text" placeholder='Title' className='bg-transparent placeholder:text-4xl focus:outline-none h-10' />
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
                <ReactQuill className='mt-10 textArea' value={value} onChange={setValue} placeholder='Tell your story...' />

            </div>
        </div>
    )
}

export default WritePage