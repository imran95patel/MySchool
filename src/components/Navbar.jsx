import React from "react";
import img from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav
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

        <h1>MySchool</h1>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: "0",
          margin: "0",
          display: "flex",
        }}
      >
        <li
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 24px",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#323232",
              fontWeight: "600",
              fontSize: "17px",
              transition: "color 0.3s ease",
            }}
          >
            Home
          </Link>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 24px",
          }}
        >
          <Link
            to="/teacher"
            style={{
              textDecoration: "none",
              color: "#323232",
              fontWeight: "600",
              fontSize: 17,
            }}
          >
            Teacher
          </Link>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 24px",
          }}
        >
          <Link
            to="/holiday"
            style={{
              textDecoration: "none",
              color: "#323232",
              fontWeight: "600",
              fontSize: 17,
            }}
          >
            Holiday
          </Link>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 24px",
          }}
        >
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              color: "#323232",
              fontWeight: "600",
              fontSize: 17,
            }}
          >
            Contacts
          </Link>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 24px",
          }}
        >
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "600",
              fontSize: 17,
              background: "dodgerblue",
              padding: "16px 48px",
              borderRadius: "8px",
            }}
            className="TalkToUs"
          >
            Talk to Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
