import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div >
      <nav >
        <div className="flex  w-full justify-center p-5  gap-12 bg-black">
       
        
        <input  type="text" className="sm:border border-black rounded bg-white   " ></input>
      
        <div >
        <ul className="flex gap-8 text-white"  >
        <li>Categories</li>
        <li>Website Builders</li>
        <li>Today's Deal</li>
        </ul> 
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
