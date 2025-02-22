import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import LoginPopup from "../LoginPopup/LoginPopup"; // Import LoginPopup

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [menu, setMenu] = useState("home");

  return (
    <>
      <div className="navbar">
        <img src={assets.logo} alt="Logo" className="logo" />

        <ul className="navbar-menu">
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => setMenu("Menu")}
            className={menu === "Menu" ? "active" : ""}
          >
            Menu
          </li>
          <li
            onClick={() => setMenu("Mobile-App")}
            className={menu === "Mobile-App" ? "active" : ""}
          >
            Mobile-App
          </li>
          <li
            onClick={() => setMenu("Contact-Us")}
            className={menu === "Contact-Us" ? "active" : ""}
          >
            Contact Us
          </li>
        </ul>

        <div className="navbar-right">
          <img src={assets.search_icon} alt="Search" />
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="Basket" />
            <div className="dot"></div>
          </div>
          {/* Open Login Popup when clicking Sign In */}
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        </div>
      </div>

      {/* Show Login Popup */}
      {showLogin && <LoginPopup isOpen={showLogin} onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Navbar;
