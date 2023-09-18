import React from "react";

const Pagination = () => {
  return <div className="flex justify-between md:pr-10 md:absolute bottom-0 w-full max-md:px-4">
    <button className="bg-red-500 text-white py-2 px-5 rounded-md">Previous</button>
    <button className="bg-red-500 text-white py-2 px-5 rounded-md">Next</button>
  </div>;
};

export default Pagination;
