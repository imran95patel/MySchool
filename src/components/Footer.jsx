import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          padding: "60px 100px",
          backgroundColor: "#03011c",
          display: "flex",
          gap: 48,
        }}
      >
        <div style={{ width: "100%" }}>
          <h2 style={{ color: "#f5f5f5", fontWeight: 500 }}>MySchool</h2>
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            molestias rerum beatae quaerat dolorum praesentium harum itaque
            possimus dolore doloremque.
          </p>
        </div>
        <div style={{ width: "100%" }}>
          <h2 style={{ color: "#f5f5f5", fontWeight: 500 }}>User Link</h2>
          <ul
            style={{
              padding: 0,
              margin: 0,
              display: "flex ",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <li>
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  listStyleType: "none",
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/teacher"
                style={{
                  color: "white",
                  textDecoration: "none",
                  listStyleType: "none",
                }}
              >
                Teachers
              </Link>
            </li>
            <li>
              <Link
                to="/holiday"
                style={{
                  color: "white",
                  textDecoration: "none",
                  listStyleType: "none",
                }}
              >
                Holidays
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                style={{
                  color: "white",
                  textDecoration: "none",
                  listStyleType: "none",
                }}
              >
                Contacts
              </Link>
            </li>
            <li style={{ width: "100px" }}>
              <Link
                to="/login"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Talk to us
              </Link>
            </li>
          </ul>
        </div>
        <div style={{ width: "100%" }}>
          <h2
            style={{
              color: "#f5f5f5",
              fontWeight: 500,
              width: "120px",
            }}
          >
            Social Link
          </h2>
          <ul
            style={{
              padding: 0,
              margin: 0,
              display: "flex ",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <li>
              <Link
                to="https://www.youtube.com"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <i className="ri-youtube-fill" style={{ marginRight: 6 }}></i>
                Youtube
              </Link>
            </li>
            <li>
              <Link
                to="https://www.facebook.com/"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <i
                  className="ri-facebook-circle-fill"
                  style={{ marginRight: 6 }}
                ></i>
                Facebook
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <i className="ri-instagram-fill" style={{ marginRight: 6 }}></i>
                Instagram
              </Link>
            </li>
            <li>
              <Link
                to="www.linkedin.com/in/imran-patel83"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <i
                  className="ri-linkedin-box-fill"
                  style={{ marginRight: 6 }}
                ></i>
                Linkedin
              </Link>
            </li>
            <li style={{ width: "100px" }}>
              <Link
                to="https://github.com/imran95patel"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <i className="ri-github-fill" style={{ marginRight: 6 }}></i>
                GitHub
              </Link>
            </li>
          </ul>
        </div>
        <div style={{ width: "100%" }}>
          <h2 style={{ color: "#f5f5f5", fontWeight: 500 }}>Enquery</h2>
          <form style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <input
              name="full name"
              placeholder="Full Name"
              type="text"
              required
              style={{ border: "none", padding: 12, borderRadius: "10px" }}
            />
            <input
              name="email"
              placeholder="example@example.com"
              type="email"
              required
              style={{ border: "none", padding: 12, borderRadius: "10px" }}
            />
            <textarea
              name="massage"
              placeholder="Massage"
              required
              style={{ border: "none", padding: 12, borderRadius: "10px" }}
            />
            <button
              style={{
                width: "fit-content",
                border: "none",
                background: "green",
                color: "white",
                padding: "12px 24px",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "background 0.3s ease",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </footer>
    </>
  );
};

export default Footer;
