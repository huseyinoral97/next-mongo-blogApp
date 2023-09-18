import React from "react";
import Image from "next/image";
import CategoryList from "./CategoryList";

const Menu = () => {
  return <div className="max-md:hidden">
    <div className="mb-10">
      <span className="text-gray-600 text-sm">What is hot</span>
      <h1 className="text-2xl font-bold mb-5">Most Popular</h1>
      <div className="mb-5">
        <p className="bg-blue-500 inline-block px-3 py-1 rounded-full mb-2 text-xs">Style</p>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, facere.</p>
        <div>
          <p className="text-xs font-bold">John Doe - <span className="text-gray font-normal">01.09.2023</span></p>
        </div>
      </div>
      <div className="mb-5">
        <p className="bg-red-500 inline-block px-3 py-1 rounded-full mb-2 text-xs">Fashion</p>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, facere.</p>
        <div>
          <p className="text-xs font-bold">John Doe - <span className="text-gray font-normal">01.09.2023</span></p>
        </div>
      </div>
      <div className="mb-5">
        <p className="bg-green-500 inline-block px-3 py-1 rounded-full mb-2 text-xs">Food</p>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, facere.</p>
        <div>
          <p className="text-xs font-bold">John Doe - <span className="text-gray font-normal">01.09.2023</span></p>
        </div>
      </div>
      <div className="mb-5">
        <p className="bg-purple-500 inline-block px-3 py-1 rounded-full mb-2 text-xs">Travel</p>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, facere.</p>
        <div>
          <p className="text-xs font-bold">John Doe - <span className="text-gray font-normal">01.09.2023</span></p>
        </div>
      </div>
      <div className="mb-5">
        <p className="bg-orange-500 inline-block px-3 py-1 rounded-full mb-2 text-xs">Culture</p>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, facere.</p>
        <div>
          <p className="text-xs font-bold">John Doe - <span className="text-gray font-normal">01.09.2023</span></p>
        </div>
      </div>
      <div className="mb-5">
        <p className="bg-yellow-500 inline-block px-3 py-1 rounded-full mb-2 text-xs">Coding</p>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, facere.</p>
        <div>
          <p className="text-xs font-bold">John Doe - <span className="text-gray font-normal">01.09.2023</span></p>
        </div>
      </div>
    </div>
    <div className="mb-10">
      <span className="text-gray-600 text-sm">Discover by topic</span>
      <h1 className="text-2xl font-bold mb-5">Categories</h1>
      <CategoryList withImage={false} />
    </div>
    <div className="mb-10">
      <span className="text-gray-600 text-sm">Chosen by the editor</span>
      <h1 className="text-2xl font-bold mb-5">Editors Pick</h1>
      <div>
        <div className="flex mb-4">
          <Image src="/p1.jpg" alt="" width={50} height={50} className="rounded-full w-12 h-12 mr-5" />
          <div>
            <p className="bg-blue-500 inline-block px-3 py-1 rounded-full mb-2 text-xs">Style</p>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, facere.</p>
            <div>
              <p className="text-xs font-bold">John Doe - <span className="text-gray font-normal">01.09.2023</span></p>
            </div>
          </div>
        </div>
        <div className="flex mb-4">
          <Image src="/p1.jpg" alt="" width={50} height={50} className="rounded-full w-12 h-12 mr-5" />
          <div>
            <p className="bg-blue-500 inline-block px-3 py-1 rounded-full mb-2 text-xs">Style</p>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, facere.</p>
            <div>
              <p className="text-xs font-bold">John Doe - <span className="text-gray font-normal">01.09.2023</span></p>
            </div>
          </div>
        </div>
        <div className="flex mb-4">
          <Image src="/p1.jpg" alt="" width={50} height={50} className="rounded-full w-12 h-12 mr-5" />
          <div>
            <p className="bg-blue-500 inline-block px-3 py-1 rounded-full mb-2 text-xs">Style</p>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, facere.</p>
            <div>
              <p className="text-xs font-bold">John Doe - <span className="text-gray font-normal">01.09.2023</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Menu;
