import React, { useEffect, useState } from "react";
import HomeBanner from "../components/Home/HomeBanner";
import Header from "../components/Home/Header";
import Category from "../components/Home/Category";
import PopularMenus from "../components/Home/PopularMenus";
import ItemDetails from "../components/Home/ItemDetails";
import CartDetails from "../components/Home/CartDetails";
import { useSelector } from "react-redux";

function Home() {
  const menu = useSelector((state) => state?.menu?.items);
  const [activeCategory, setActiveCategory] = useState("Burger");
  const [activeItem, setActiveItem] = useState(null);

  // Filter menu items based on activeCategory
  const filteredMenu = menu?.filter((item) => item.category === activeCategory);

  // console.log(filteredMenu[0].items[0]);

  useEffect(() => {
    setActiveItem(filteredMenu[0].items[0]);
  }, []);

  return (
    <div className="w-full h-[100vh] flex flex-col lg:flex lg:flex-row gap-5  p-5">
      <div className="lg:w-[80%] flex flex-col  w-full h-[full] p-5 bg-[var(--bg)] rounded-3xl shadow-md ">
        <Header />
        <HomeBanner />
        <Category
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <PopularMenus
          activeItem={activeItem}
          filteredMenu={filteredMenu[0]?.items}
          onItemClick={setActiveItem}
        />
      </div>
      <div className="lg:w-[20%] flex flex-col gap-5  w-full h-full  ">
        <ItemDetails item={activeItem} />
        <CartDetails />
      </div>
    </div>
  );
}

export default Home;
