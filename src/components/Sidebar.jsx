import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCartShopping,
  faClockRotateLeft,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkStyle =
    "flex items-center gap-2 px-4 py-2 hover:bg-[#40799e] text-white rounded text-lg font-medium";
  const activeStyle = "bg-[#40799e]";

  return (
    <div className="w-[150px] hidden lg:flex h-[100vh] bg-[#024c79] items-center p-4  flex-col gap-10">
      <div>
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/office/40/kawaii-french-fries.png"
          alt="kawaii-french-fries"
        />
      </div>

      <div className="flex flex-col gap-3 w-full">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""} text-sm `
          }
        >
          <FontAwesomeIcon icon={faHouse} />
          Home
        </NavLink>
        {/* <NavLink
          to="/cart"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""} text-sm`
          }
        >
          <FontAwesomeIcon icon={faCartShopping} />
          Cart
        </NavLink> */}
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""} text-sm`
          }
        >
          <FontAwesomeIcon icon={faClockRotateLeft} />
          Orders
        </NavLink>
        {/* <NavLink
          to="/checkout"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""} text-sm`
          }
        >
          <FontAwesomeIcon icon={faMoneyBill} />
          Checkout
        </NavLink> */}
      </div>
    </div>
  );
};

export default Sidebar;
