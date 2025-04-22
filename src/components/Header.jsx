import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MobileMenuDrawer from "./MobileMenuDrawer";
import { useNavigate } from "react-router-dom";
function Header({ showMobileDrawer, setShowMobileDrawer }) {
  const navigate = useNavigate();
  return (
    <div
      className={`flex bg-[var(--primary)] h-16  items-center 
        justify-between px-8
      `}
    >
      <p
        onClick={() => navigate("/")}
        className="text-xl cursor-pointer font-bold text-center text-white"
      >
        The Digital Diner
      </p>
      <div
        onClick={() => setShowMobileDrawer(!showMobileDrawer)}
        className="cursor-pointer text-white lg:hidden  hover:text-[var(--yellow)]"
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}

export default Header;
