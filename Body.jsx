import React from "react";
import Headers from "./Headers";
import TopCard from "./TopCard";
import { carditem } from "./TopCardItem";
import BottomCard from "./BottomCard";
import { bottomitem } from "./BottomCardItem";

function Body() {
  return (
    <div className="bg-Whitish p-10">
      <div className="max-w-screen-2xl container ">
        <div className=" flex justify-center">
          <Headers />
        </div>
        <div className=" justify-center mt-8">
          {carditem.map((item) => (
            <TopCard item={item} />
          ))}
        </div>
      </div>
      <div >
        <div className="mt-6 flex justify-center text-4xl item-center mb-5">
          <h1>Related deals you might like for</h1>
        </div>
      <div className="flex flex-directon-row justify-center gap-5">
        {bottomitem.map((item) => (
          <BottomCard item={item} />
        ))}
      </div>
      </div>
      <div className="flex justify-around mt-10">
        <div>
          <p className="text-4xl"> Sign up and get exclusive special deals</p>
        </div>
        <div>
          <input></input>
          <span className="bg-blue-500 p-3 rounded-3">sign up</span>
        </div>
      </div>
    </div>
  );
}

export default Body;
