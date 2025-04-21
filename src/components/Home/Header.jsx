import React from "react";
import profile from "../../assets/profile.png";
function Header() {
  return (
    <>
      <p className="text-xl font-bold text-center">The Digital Diner</p>
      <div className="w-full  flex items-center justify-between">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-gray-500 font-semibold">Welcome, Anuj</h1>
          <h1 className="text-black text-xl font-medium">
            Let's order your food
          </h1>
        </div>

        <div>
          <img src={profile} alt="profile" className="w-11 h-w-11" />
        </div>
      </div>
    </>
  );
}

export default Header;
