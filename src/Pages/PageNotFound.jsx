import React from "react";
import img from "../assets/404.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PageNotFound = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          background: "#f5f5f5",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={img} alt="" width="720" />
        <h1 style={{ color: "#6C63FF" }}>Page Not Found</h1>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
