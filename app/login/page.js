"use client"
import { signIn, useSession } from 'next-auth/react'
import React from 'react'

const LoginPage = () => {

    const { data, status } = useSession();
    console.log(data, status)

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="bg-slate-600 rounded-sm justify-center items-center max-md:px-10 max-md:py-10 px-40 py-40">
                <div className='flex flex-col gap-24 bg-transparent'>
                    <div onClick={() => signIn("google")} className="bg-red-400 px-5 py-2 rounded-sm cursor-pointer">Sign in with Google</div>
                    <div className="bg-black px-5 py-2 rounded-sm cursor-pointer">Sign in with Github</div>
                    <div className="bg-blue-400 px-5 py-2 rounded-sm cursor-pointer">Sign in with Facebook</div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage