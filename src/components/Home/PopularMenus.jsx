import React from "react";
import fire from "../../assets/fire.png";

import chickenburger from "../../assets/chickenburgur.png";
import cheeseburger from "../../assets/cheeseburgur.png";
import blackburger from "../../assets/blackBurger.png";
import beefburger from "../../assets/Beefburgur.png";

const menuItems = [
  {
    name: "Chicken Burger",
    image: chickenburger,
    price: "$6.99",
  },
  {
    name: "Cheese Burger",
    image: cheeseburger,
    price: "$7.49",
  },
  {
    name: "Black Burger",
    image: blackburger,
    price: "$8.25",
  },
  {
    name: "Beef Burger",
    image: beefburger,
    price: "$9.99",
  },
];

function PopularMenus() {
  return (
    <div className="w-full h-full border flex-1 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center mb-2">
          <img src={fire} width={20} height={20} alt="fire" />
          <h1 className="text-black text-xl font-medium">Popular Menu</h1>
        </div>
        <p className="text-xs text-gray-600 cursor-pointer">see more</p>
      </div>

      {/* Cards Section */}
      <div className="border w-full flex-1 overflow-y-auto flex gap-4 flex-wrap ">
        {menuItems.map((item, index) => (
          <MenuItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PopularMenus;

const MenuItemCard = ({ item }) => {
  return (
    <div className="bg-white flex-1 border rounded-3xl w-fit p-3 flex flex-col items-center gap-2">
      <img src={item.image} alt={item.name} width={100} />
      <p className="text-sm font-semibold">{item.name}</p>
      <p className="text-xs text-gray-500">{item.price}</p>
    </div>
  );
};
