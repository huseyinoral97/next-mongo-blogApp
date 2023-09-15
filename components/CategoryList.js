import Image from "next/image";
import React from "react";

const CategoryList = () => {
  return <div className="container mx-auto max-md:p-4">
    <h1 className="text-2xl font-bold my-5">Popular Categories</h1>
    <div className="grid max-md:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
      <div className="flex justify-center items-center p-3 bg-blue-500 rounded-md cursor-pointer">
        <Image src="/style.png" alt="Style Picture" width={50} height={50} className="rounded-full w-7 h-7 mr-3" />
        <p className="text-[#0f172a] font-semibold">Style</p>
      </div>
      <div className="flex justify-center items-center p-3 bg-red-500 rounded-md cursor-pointer">
        <Image src="/fashion.png" alt="Style Picture" width={50} height={50} className="rounded-full w-7 h-7 mr-3" />
        <p className="text-[#0f172a] font-semibold">Fashion</p>
      </div>
      <div className="flex justify-center items-center p-3 bg-green-500 rounded-md cursor-pointer">
        <Image src="/food.png" alt="Style Picture" width={50} height={50} className="rounded-full w-7 h-7 mr-3" />
        <p className="text-[#0f172a] font-semibold">Food</p>
      </div>
      <div className="flex justify-center items-center p-3 bg-purple-500 rounded-md cursor-pointer">
        <Image src="/travel.png" alt="Style Picture" width={50} height={50} className="rounded-full w-7 h-7 mr-3" />
        <p className="text-[#0f172a] font-semibold">Travel</p>
      </div>
      <div className="flex justify-center items-center p-3 bg-orange-500 rounded-md cursor-pointer">
        <Image src="/culture.png" alt="Style Picture" width={50} height={50} className="rounded-full w-7 h-7 mr-3" />
        <p className="text-[#0f172a] font-semibold">Culture</p>
      </div>
      <div className="flex justify-center items-center p-3 bg-yellow-500 rounded-md cursor-pointer">
        <Image src="/coding.png" alt="Style Picture" width={50} height={50} className="rounded-full w-7 h-7 mr-3" />
        <p className="text-[#0f172a] font-semibold">Coding</p>
      </div>


    </div>
  </div>;
};

export default CategoryList;
