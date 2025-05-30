import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { setSelectedCategory } from "../../redux/slices/menuSlice";

function Category() {
  const menuCategories = useSelector((state) => state?.menu?.items);

  const activeCategory = useSelector((state) => state?.menu?.selectedCategory);

  const dispatch = useDispatch();
  // console.log(menuCategories);

  return (
    <div className="w-full mb-3">
      <h1 className="text-xl font-medium mb-2">Category</h1>

      <div className="w-full flex items-center gap-3 justify-between overflow-scroll">
        {menuCategories.map((item) => {
          const isActive = activeCategory === item.category;
          return (
            <div
              key={item.category}
              onClick={() => dispatch(setSelectedCategory(item.category))}
              className={`p-2 px-6 flex-1 w-fit flex items-center justify-center gap-2 rounded-xl cursor-pointer
    transition duration-300 ease-in-out
    ${isActive ? "bg-[var(--yellow)] text-white" : "bg-white text-black"}`}
            >
              <img
                src={item.categoryImg}
                alt={item.category}
                width={25}
                height={25}
              />
              <p className="text-sm text-nowrap">{item.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
