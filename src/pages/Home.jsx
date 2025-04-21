import React, { useEffect, useState } from "react";
import HomeBanner from "../components/Home/HomeBanner";
import Header from "../components/Home/Header";
import Category from "../components/Home/Category";
import PopularMenus from "../components/Home/PopularMenus";
import ItemDetails from "../components/Home/ItemDetails";
import CartDetails from "../components/Home/CartDetails";
import { useSelector } from "react-redux";
import { Spin } from "antd";

function Home() {
  const menu = useSelector((state) => state?.menu?.items);
  const [activeCategory, setActiveCategory] = useState("Burger");
  const [activeItem, setActiveItem] = useState(null);

  // Filter menu items based on activeCategory
  const filteredMenu = menu?.filter((item) => item.category === activeCategory);

  // console.log(filteredMenu[0]?.items[0]);

  useEffect(() => {
    if (
      filteredMenu?.length > 0 &&
      filteredMenu[0].items?.length > 0 &&
      !activeItem
    ) {
      setActiveItem(filteredMenu[0].items[0]);
    }
  }, [filteredMenu, activeItem]);

  return (
    <div className="w-full h-[100vh] flex flex-col lg:flex lg:flex-row gap-5  p-5">
      <div className="lg:w-[70%] overflow-y-scroll flex flex-col gap-3  w-full h-full p-5 bg-[var(--bg)] rounded-3xl shadow-md ">
        <div className=" w-full flex flex-col gap-3  h-[50%]">
          <Header />
          <HomeBanner />
        </div>
        <div className=" w-full h-[50%]">
          {menu.length > 0 ? (
            <>
              <Category
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
              <PopularMenus
                activeItem={activeItem}
                filteredMenu={filteredMenu[0]?.items}
                onItemClick={setActiveItem}
              />
            </>
          ) : (
            <div className="flex w-full justify-center items-center h-full ">
              <Spin />
            </div>
          )}
        </div>
      </div>
      {/* ====right side ==== */}
      <div className="lg:w-[30%] flex flex-col gap-5  w-full h-full  ">
        <ItemDetails item={activeItem} />
        <CartDetails />
      </div>
    </div>
  );
}

export default Home;
