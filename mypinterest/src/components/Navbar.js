import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsBellFill, BsChatDotsFill } from "react-icons/bs";

function Navbar() {
  return (
    <div className="">
      <div className="grid grid-cols-12 p-5   ">
        <div className="flex col-span-2 space-x-3">
          <div className="flex h-full items-center">
            <img
              src="https://i.pinimg.com/originals/d3/d1/75/d3d175e560ae133f1ed5cd4ec173751a.png"
              alt=""
              className="w-10 cursor-pointer "
            />
          </div>
          <div className=" w-28 flex items-center justify-center bg-black text-white rounded-full">
            <button className="bg-dark rounded-full font-bold ">Beranda</button>
          </div>
          <div className="w-28 flex justify-center items-center">
            <button className="font-bold ">Hari ini</button>
          </div>
        </div>
        <div className="col-span-9">
          <div className="w-full h-14 p-2 pl-4 items-center flex  rounded-full bg-gray-200">
            <FiSearch className="mr-3 text-bold " />
            <input
              placeholder="Cari"
              type="text"
              className=" flex-1 border-none bg-transparent outline-none h-full  "
            />
          </div>
        </div>
        <div className="col-span-1  ml-3 flex space-x-5 items-center ">
          <div className="">
            <BsBellFill className="text-2xl cursor-pointer" />
          </div>
          <div className="">
            <BsChatDotsFill className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
