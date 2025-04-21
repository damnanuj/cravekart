import React from "react";
import HomeBanner from "../components/Home/HomeBanner";
import Header from "../components/Home/Header";
import Category from "../components/Home/Category";
import PopularMenus from "../components/Home/PopularMenus";
import ItemDetails from "../components/Home/ItemDetails";
import CartDetails from "../components/Home/CartDetails";
import { useSelector } from "react-redux";
import { Spin } from "antd";

function Home() {
  const isLoading = useSelector((state) => state?.menu?.loading);
  // console.log(isLoading);
  return (
    <div className="w-full lg:h-[100vh] flex flex-col lg:flex lg:flex-row gap-5  p-5">
      <div className="lg:w-[70%] overflow-y-scroll flex flex-col gap-3  w-full h-full p-5 bg-[var(--bg)] rounded-3xl shadow-md ">
        <div className=" w-full flex flex-col gap-3  h-[50%]">
          <Header />    
          <HomeBanner />
        </div>
        <div className=" w-full h-[50%]">
          {!isLoading ? (
            <>
              <Category />
              <PopularMenus />
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
        <ItemDetails />
        <CartDetails />
      </div>
    </div>
  );
}

export default Home;
