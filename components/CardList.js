import React from "react";
import Card from "./Card";
import Menu from "./Menu";

const CardList = () => {
  return <div className="container mx-auto">
    <h1 className="text-2xl font-bold my-5">Recent Posts</h1>
    <div className="flex">
      <div className="flex-[2_2_0]">
        <Card />
      </div>
      <div className="flex-1">
        <Menu />
      </div>
    </div>
  </div>;
};

export default CardList;
