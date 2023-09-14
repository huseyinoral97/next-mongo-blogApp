import Image from "next/image";
import React from "react";

const Featured = () => {
  return <div className="container mx-auto">
    <h1 className="text-3xl my-10">
      <b>Hey, Somebody here!</b>
      Discover my stories and creative ideas.
    </h1>
    <div className="flex relative">

      <div className="flex-1">
        <Image src="/p1.jpg" alt="" fill />
      </div>
      <div className="flex-1 p-10 flex items-start flex-col justify-center gap-5">
        <h2 className="text-2xl font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti ipsa tempora. Eum alias saepe nam natus aliquam vel doloremque asperiores atque necessitatibus laboriosam, molestias earum nihil vitae? Ullam, facilis! Vitae explicabo autem cumque magnam veniam facere aliquid ratione voluptatem!</p>
        <button className="bg-white text-[#0f172a] py-2 px-4 rounded-md hover:bg-transparent hover:text-white duration-300 transition-all hover:border-white hover:border-[1px] border-[1px] border-[#0f172a]">
          Read More
        </button>
      </div>
    </div>
  </div>;
};

export default Featured;
