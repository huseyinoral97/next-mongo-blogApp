import React from "react";
import { BsInstagram, BsFacebook, BsTiktok, BsYoutube } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import Link from "next/link";
import AuthLinks from "./AuthLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="h-24 flex justify-between items-center">
        <div className="flex flex-1 items-center gap-3 max-md:hidden">
          <div className="rounded-full bg-[#4267B2] p-1">
            <BiLogoFacebook className="text-white" />
          </div>
          <div className="rounded-full bg-[#d62976] p-1">
            <BsInstagram className="text-white" />
          </div>
          <div className="rounded-full bg-black p-1">
            <BsTiktok className="text-white" />
          </div>
          <div className="rounded-full bg-[#c4302b] p-1">
            <BsYoutube className="text-white" />
          </div>
        </div>
        <div className="flex-1 flex justify-center text-4xl max-md:text-2xl font-bold">
          Logo
        </div>
        <div className="flex-1 flex md:justify-end">
          <ul className="flex items-center gap-5">
            <li>
              <ThemeToggle />
            </li>
            <li>
              <Link href="/" className="max-md:hidden">Homepage</Link>
            </li>
            <li>
              <Link href="/contact" className="max-md:hidden">Contact</Link>
            </li>
            <li>
              <Link href="/about" className="max-md:hidden">About</Link>
            </li>
            <li>
              <AuthLinks />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
