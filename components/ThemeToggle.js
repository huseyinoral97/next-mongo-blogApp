"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { MdNightlight } from "react-icons/md";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className="flex items-center justify-between bg-[#1f273a] rounded-full relative h-7 w-14"
      onClick={toggle}
    >
      <MdNightlight
        className={`text-[20px] ml-1 ${theme == "light" ? "text-amber-200" : "text-black"
          }`}
      />
      <div
        className={`bg-white rounded-full w-7 h-7 absolute duration-300 transition-transform ${theme == "dark" ? "left-0" : "right-0"
          }`}
      />
      <BsFillSunFill className="text-amber-200 text-[20px] mr-1" />
    </div>
  );
};

export default ThemeToggle;
