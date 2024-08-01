import React from "react";
import img from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const menus = [
  {
    lable: "Home",
    path: "/",
  },
  {
    lable: "Teacher",
    path: "/teacher",
  },
  {
    lable: "Holiday",
    path: "/holiday",
  },
  {
    lable: "Contact Us",
    path: "/contact",
  },
  {
    lable: "Login",
    path: "/login",
  },
];
const Navbar = () => {
  return (
    <nav
      className="sticky top-0 left-0 z-50"
      style={{
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 48px",
        boxShadow: "0 16px 8px 0 rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          justifyContent: "space-between",
        }}
      >
        <img src={img} width="60" style={{ borderRadius: "10px" }} />

        <h1 className="text-2xl font-semibold">MySchool</h1>
      </div>

      <ul
        style={{
          listStyle: "none",
          alignItems: "center",
          display: "flex",
          gap: 32,
        }}
      >
        {menus.map((menu, index) => {
          return (
            <li key={index}>
              <Link
                to={menu.path}
                style={{
                  textDecoration: "none",
                  color: "#323232",
                  fontWeight: "600",
                  fontSize: 17,
                }}
              >
                {menu.lable}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
