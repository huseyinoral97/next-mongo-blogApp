import Link from "next/link";
import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="border-t-2 border-white">
      <div className="container mx-auto py-20">
        <div className="md:flex">
          <div className="flex-1 max-md:px-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni consectetur dolor soluta! Provident possimus reprehenderit ut, quas placeat eius deleniti esse at aspernatur natus?</p>
            <div className="flex flex-1 items-center gap-3 mt-10">
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
          </div>
          <div className="flex-1 flex md:justify-center gap-16 max-md:mt-10 max-md:px-4">
            <ul>
              <li className="font-bold">Links</li>
              <li className="text-sm">
                <Link href="/">Homepage</Link>
              </li>
              <li className="text-sm">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="text-sm">
                <Link href="/about">About</Link>
              </li>
              <li className="text-sm">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <ul>
              <li className="font-bold">Tags</li>
              <li className="text-sm">
                <Link href="/">Style</Link>
              </li>
              <li className="text-sm">
                <Link href="/">Fashion</Link>
              </li>
              <li className="text-sm">
                <Link href="/">Coding</Link>
              </li>
              <li className="text-sm">
                <Link href="/">Travel</Link>
              </li>
            </ul>
            <ul>
              <li className="font-bold">Social</li>
              <li className="text-sm">
                <Link href="/">Facebook</Link>
              </li>
              <li className="text-sm">
                <Link href="/">Instagram</Link>
              </li>
              <li className="text-sm">
                <Link href="/">Tiktok</Link>
              </li>
              <li className="text-sm">
                <Link href="/">Youtube</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
