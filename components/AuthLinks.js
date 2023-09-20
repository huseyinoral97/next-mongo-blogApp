"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  return (
    <div className="flex items-center gap-5">
      {status === "unauthenticated" ? (
        <Link href="/login" className="font-semibold max-md:hidden cursor-pointer" >Login</Link>
      ) : (
        <>
          <Link href="/write" className="max-md:hidde cursor-pointern">Write</Link>
          <span className="ml-5 font-semibold max-md:hidden cursor-pointer" onClick={signOut}>Logout</span>
        </>
      )}
      <div>
        {open ? <IoMdClose className="text-2xl md:hidden cursor-pointer" onClick={() => setOpen(!open)} />
          :
          <GiHamburgerMenu className="text-lg md:hidden cursor-pointer" onClick={() => setOpen(!open)} />
        }
      </div>
      {open && (
        <div className="absolute left-0 bottom-0 h-[calc(100%-6rem)] w-full flex items-center justify-center flex-col gap-5 z-20">
          <Link href="/" className="font-semibold text-2xl" onClick={() => setOpen(false)} >Homepage</Link>
          <Link href="/about" className="font-semibold text-2xl" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" className="font-semibold text-2xl" onClick={() => setOpen(false)}>Contact</Link>
          {status === "unauthenticated" ? (
            <Link href="/login" className="font-semibold text-2xl" onClick={() => setOpen(false)} >Login</Link>
          ) : (
            <>
              <Link href="/write" className="font-semibold text-2xl" onClick={() => setOpen(false)} >Write</Link>
              <span className="font-semibold text-2xl" onClick={() => setOpen(false)} >Logout</span>
            </>
          )}
        </div>
      )
      }
    </div >
  );
};

export default AuthLinks;
