import React from "react";
import HomeBanner from "../components/Home/HomeBanner";
import Header from "../components/Home/Header";
import Category from "../components/Home/Category";
import PopularMenus from "../components/Home/PopularMenus";

function Home() {
  return (
    <div className="w-full h-[100vh] flex flex-col lg:flex lg:flex-row gap-5  p-5">
      <div className="lg:w-[70%] flex flex-col  w-full h-[full] p-5 bg-[var(--bg)] rounded-3xl shadow-md shadow-gray-500">
        <Header/>
        <HomeBanner />
        <Category/>
        <PopularMenus/>
      </div>
      <div className="lg:w-[30%] w-full h-full bg-[var(--bg)] rounded-3xl shadow-md shadow-gray-500"></div>
    </div>
  );
}

export default Home;
