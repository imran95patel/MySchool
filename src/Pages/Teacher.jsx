import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Teacher = () => {
  return (
    <div>
      <Navbar />
      <div>
        <header
          style={{
            height: 280,
            backgroundColor: "#FFDEE9",
            backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: 60 }}>
            <i className="ri-user-voice-line" style={{ marginRight: 16 }}></i>
            Teachers
          </h1>
        </header>

        <section
          style={{
            width: "80%",
            margin: "0 auto",
            padding: "80px",
          }}
        ></section>
      </div>
      <Footer />
    </div>
  );
};

export default Teacher;
