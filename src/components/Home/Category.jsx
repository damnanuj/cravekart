import React, { useState } from "react";
import burger from "../../assets/cheeseburger.png";
import pizza from "../../assets/pizza.png";
import icecream from "../../assets/ice-cream-cone.png";
import popcorn from "../../assets/popcorn.png";
import water from "../../assets/water.png";

const categories = [
  {
    title: "Burger",
    icon: burger,
  },
  {
    title: "Pizza",
    icon: pizza,
  },
  {
    title: "Ice Cream",
    icon: icecream,
  },
  {
    title: "Popcorn",
    icon: popcorn,
  },
  {
    title: "Water",
    icon: water,
  },
];

function Category() {
  const [activeCategory, setActiveCategory] = useState("Burger");

  return (
    <div className="w-full mb-3">
      <h1 className="text-xl font-medium mb-2">Category</h1>

      <div className="w-full flex items-center gap-3 justify-between">
        {categories.map((item) => {
          const isActive = activeCategory === item.title;
          return (
            <div
              key={item.title}
              onClick={() => setActiveCategory(item.title)}
              className={`p-2 px-4 flex-1 w-fit flex items-center justify-center gap-2 rounded-xl cursor-pointer
    transition duration-300 ease-in-out
    ${isActive ? "bg-[var(--yellow)] text-white" : "bg-white text-black"}`}
            >
              <img src={item.icon} alt={item.title} width={25} height={25} />
              <p className="text-sm">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
