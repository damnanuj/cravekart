import React from "react";
import fire from "../../assets/fire.png";

function PopularMenus({ filteredMenu, onItemClick, activeItem }) {
  // console.log(filteredMenu);
  return (
    <div className="w-full h-full  flex-1 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center mb-2">
          <img src={fire} width={20} height={20} alt="fire" />
          <h1 className="text-black text-xl font-medium">Popular Menu</h1>
        </div>
        <p className="text-xs text-gray-600 cursor-pointer">see more</p>
      </div>

      {/* Cards Section */}
      <div className=" w-full flex-1 overflow-y-auto flex gap-4 flex-wrap ">
        {filteredMenu?.map((item) => (
          <MenuItemCard
            key={item._id}
            isActive={activeItem?._id === item._id}
            item={item}
            onItemClick={onItemClick}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularMenus;

const MenuItemCard = ({ item, onItemClick, isActive }) => {
  return (
    <div
      className={`shadow-md flex-1 cursor-pointer rounded-3xl w-fit p-3 flex flex-col items-center gap-2 ${
        isActive ? "bg-[var(--yellow)] text-white" : "bg-white"
      }`}
      onClick={() => onItemClick(item)}
    >
      <img
        src={item.itemImages[0]}
        alt={item.item_name}
        className="w-24 h-24 object-contain rounded-lg" // You can adjust the width and height here as needed
      />
      <p className="text-sm font-semibold">{item.item_name}</p>

      {/* ======================KCL TIME RATING DIV============ */}
      <div
        className={`text-[10px] w-full flex items-center justify-between ${
          isActive ? "text-black" : "text-gray-500"
        }`}
      >
        <div className="flex items-center gap-1 ">
          <img src={fire} alt="fire" width={15} />
          <p>4.5K</p>
        </div>
        <div className="flex items-center gap-1">
          <img src={fire} alt="fire" width={15} />
          <p>20Min</p>
        </div>
        <div className="flex items-center gap-1">
          <img src={fire} alt="fire" width={15} />
          <p>30Kcl</p>
        </div>
      </div>

      <p className="text-lg">₹{item.price}</p>
    </div>
  );
};
