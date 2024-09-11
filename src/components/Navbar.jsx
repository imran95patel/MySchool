import React, { useState } from "react";
import img from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const menus = [
  { label: "Home", path: "/" },
  { label: "Teacher", path: "/teacher" },
  { label: "Holiday", path: "/holiday" },
  { label: "Contact Us", path: "/contact" },
  { label: "Login", path: "/login" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={img} alt="Logo" width="60" />
        <h1>MySchool</h1>
      </div>
      <button className="navbar-toggler" onClick={toggleMenu}>
        <span className="navbar-toggler-icon">&#9776;</span>
      </button>
      <ul
        className={`navbar-menu ${isOpen ? "open" : ""}`}
        style={{ paddingBottom: "20px" }}
      >
        {menus.map((menu, index) => (
          <li key={index}>
            <Link to={menu.path} className="navbar-link">
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
