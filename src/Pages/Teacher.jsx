import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img5 from "../assets/img5.jpg";
import img4 from "../assets/img4.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";

const Teachers = [
  {
    image: img1,
    name: "John Doe",
    Qualification: "MCA (Oxford University)",
  },
  {
    image: img2,
    name: "Neha Rathod",
    Qualification: "BE (Solapur University)",
  },
  {
    image: img3,
    name: "Ayeza Khan",
    Qualification: "MBA (Pune University)",
  },
  {
    image: img5,
    name: "Ranvir Sing",
    Qualification: "MSC (Pune University)",
  },
  {
    image: img6,
    name: "Arjun Sing",
    Qualification: "BE (Kolhapur University)",
  },
  {
    image: img7,
    name: "Sohel Khan",
    Qualification: "ME (Pune University)",
  },
  {
    image: img8,
    name: "Tausif Pirjade",
    Qualification: "MSC (Mumbai University)",
  },
  {
    image: img9,
    name: "Rehan Shekh",
    Qualification: "MBA (Pune University)",
  },
  {
    image: img10,
    name: "Bhanu Pratap",
    Qualification: "BE (Pune University)",
  },
  {
    image: img11,
    name: "Sana Malikh",
    Qualification: "ME (Pune University)",
  },
  {
    image: img12,
    name: "Shera Deshpande",
    Qualification: "MSC (Mumbai University)",
  },
  {
    image: img4,
    name: "Varsha Mishra",
    Qualification: "MSC (Pune University)",
  },
];

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
            display: "flex",
            columnGap: "5%",
            rowGap: 48,
            flexWrap: "wrap",
          }}
        >
          {Teachers.map((teacher, index) => (
            <div key={index} style={{ width: "20%" }}>
              <img src={teacher.image} alt={teacher.name} width="100%" />
              <h2 style={{ padding: 0, marginBottom: 4 }}>{teacher.name}</h2>
              <p style={{ padding: 0, margin: 0 }}>{teacher.Qualification}</p>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Teacher;
