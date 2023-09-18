import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="bg-slate-600 rounded-sm justify-center items-center max-md:px-10 max-md:py-10 px-40 py-40">
                <div className='flex flex-col gap-24 bg-transparent'>
                    <Link href="/" className="bg-red-400 px-5 py-2 rounded-sm">Sign in with Google</Link>
                    <Link href="/" className="bg-black px-5 py-2 rounded-sm">Sign in with Github</Link>
                    <Link href="/" className="bg-blue-400 px-5 py-2 rounded-sm">Sign in with Facebook</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage