"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const status = "notauthenticated";
  return (
    <div className="flex items-center gap-5">
      {status === "notauthenticated" ? (
        <Link href="/login" className="font-semibold max-md:hidden">Login</Link>
      ) : (
        <>
          <Link href="/write" className="max-md:hidden">Write</Link>
          <span className="ml-5 font-semibold max-md:hidden">Logout</span>
        </>
      )}
      <div>
        {open ? <IoMdClose className="text-2xl md:hidden cursor-pointer" onClick={() => setOpen(!open)} />
          :
          <GiHamburgerMenu className="text-lg md:hidden cursor-pointer" onClick={() => setOpen(!open)} />
        }
      </div>
      {open && (
        <div className="absolute left-0 bottom-0 h-[calc(100%-6rem)] w-full flex items-center justify-center flex-col gap-5">
          <Link href="/" className="font-semibold text-2xl" onClick={() => setOpen(false)} >Homepage</Link>
          <Link href="/about" className="font-semibold text-2xl" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" className="font-semibold text-2xl" onClick={() => setOpen(false)}>Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login" className="font-semibold text-2xl">Login</Link>
          ) : (
            <>
              <Link href="/write" className="font-semibold text-2xl">Write</Link>
              <span className="font-semibold text-2xl">Logout</span>
            </>
          )}
        </div>
      )
      }
    </div >
  );
};

export default AuthLinks;
