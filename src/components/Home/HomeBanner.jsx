import React from "react";
import couple from "../../assets/couple.png";

function HomeBanner() {
  return (
    <div className=" my-3 bg-[var(--primary)] w-full h-[150px] rounded-2xl flex justify-between items-center lg:px-16 px-4">
      <div className=" lg:w-1/3 w-full flex flex-col gap-3">
        <h1  className="font-medium  text-white text-lg lg:text-xl">
          Order Food and Get Discount Up To
        </h1>
        <h1 className="font-bold text-white lg:text-3xl text-lg">50%</h1>
      </div>

      <img src={couple} alt="couple" className="lg:w-56 w-40" />
    </div>
  );
}

export default HomeBanner;
