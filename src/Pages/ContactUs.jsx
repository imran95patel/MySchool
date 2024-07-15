import React, { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../assets/contactus.svg";

const ContactUs = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactUs = (e) => {
    e.preventDefault();
    console.log(fullName, email, message);
    Swal.fire({
      icon: "success",
      title: "success ",
      text: "Your message has been sent successfully!",
      confirmButtonText: "OK",
    });
  };

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", padding: "64px" }}>
        <img src={img} alt="" width="50%" />
        <div style={{ width: "50%" }}>
          <form
            onSubmit={contactUs}
            action=""
            style={{ display: "flex", flexDirection: "column", gap: 24 }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label style={{ fontSize: "18px", fontWeight: 500 }}>
                Full Name
              </label>
              <input
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                required
                type="text"
                name="fullname"
                placeholder="Enter Your name"
                style={{
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  padding: 14,
                }}
              />
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label style={{ fontSize: "18px", fontWeight: 500 }}>Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                type="email"
                name="email"
                placeholder="example@example.com"
                style={{
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  padding: 14,
                }}
              />
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label style={{ fontSize: "18px", fontWeight: 500 }}>
                Massage
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                required
                type="text"
                name="Massage"
                placeholder="Write Your Query or Massage here"
                rows={4}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  padding: 14,
                }}
              />
            </div>

            <button
              style={{
                border: "none",
                width: "fit-content",
                padding: "14px 34px ",
                borderRadius: 6,
                color: "white",
                background: "#6c63ff",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
