import { Spin } from "antd";
import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useDispatch } from "react-redux";
import { fetchMenuItems } from "../redux/slices/menuSlice";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const PastOrders = lazy(() => import("./pages/Orders"));
const Checkout = lazy(() => import("./pages/Checkout"));

const FallbackLoader = () => (
  <div className="h-[100vh] w-full flex justify-center items-center">
    <Spin />
  </div>
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenuItems());
  }, [dispatch]);
  

  return (
    <Router>
      {" "}
      {/* 👈 Wrap everything inside <Router> */}
      <div className="w-full h-[100vh] flex overflow-hidden">
        <Sidebar />

        <div className="flex-1 overflow-y-auto">
          <Suspense fallback={<FallbackLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<PastOrders />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
