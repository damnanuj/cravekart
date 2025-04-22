import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useDispatch } from "react-redux";
import { fetchMenuItems } from "./redux/slices/menuSlice";
import Header from "./components/Header";
import MobileMenuDrawer from "./components/MobileMenuDrawer";
import { Spin } from "antd";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const PastOrders = lazy(() => import("./pages/Orders"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));

const FallbackLoader = () => (
  <div className="h-[100vh] w-full flex justify-center items-center">
    <Spin />
  </div>
);

function App() {
  const [showMobileDrawer, setShowMobileDrawer] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenuItems());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header
        showMobileDrawer={showMobileDrawer}
        setShowMobileDrawer={setShowMobileDrawer}
      />
      <div className="w-full  flex overflow-hidden">
        <div className="lg:block hidden">
          <Sidebar />
        </div>

        <div className="flex-1 overflow-y-auto">
          <Suspense fallback={<FallbackLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<PastOrders />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </div>
      <MobileMenuDrawer
        setShowMobileDrawer={setShowMobileDrawer}
        showMobileDrawer={showMobileDrawer}
      />
    </BrowserRouter>
  );
}

export default App;
