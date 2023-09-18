import React from "react";
import Card from "./Card";
import Menu from "./Menu";
import Pagination from "./Pagination";

const CardList = () => {
  return <div>
    <h1 className="text-2xl font-bold my-5 max-md:px-4">Recent Posts</h1>
    <div className="flex">
      <div className="flex-[2_2_0] relative">
        <Card />
        <Card />
        <Card />
        <Pagination />
      </div>
      <div className="md:flex-1">
        <Menu />
      </div>
    </div>
  </div>;
};

export default CardList;
