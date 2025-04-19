import React from "react";
import oops404 from "../assets/oops404.jpg";

const NotFound = () => {
  return (
    <>
      <div className="">
        <div className="">
          <img src={oops404} alt="404 Not Found" />
          <h1>Oopsss! This page got lost in the space🌌</h1>
          <p>We're chasing it down!🚀 We'll be back before you know it!</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
