import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";

const teachers = [
  { image: img1, name: "John Doe", Qualification: "MCA (Oxford University)" },
  {
    image: img2,
    name: "Neha Rathod",
    Qualification: "BE (Solapur University)",
  },
  { image: img3, name: "Ayeza Khan", Qualification: "MBA (Pune University)" },
  { image: img5, name: "Ranvir Sing", Qualification: "MSC (Pune University)" },
  {
    image: img6,
    name: "Arjun Sing",
    Qualification: "BE (Kolhapur University)",
  },
  { image: img7, name: "Sohel Khan", Qualification: "ME (Pune University)" },
  {
    image: img8,
    name: "Tausif Pirjade",
    Qualification: "MSC (Mumbai University)",
  },
  { image: img9, name: "Rehan Shekh", Qualification: "MBA (Pune University)" },
  { image: img10, name: "Bhanu Pratap", Qualification: "BE (Pune University)" },
  { image: img11, name: "Sana Malikh", Qualification: "ME (Pune University)" },
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
      <header className="bg-gradient-to-b from-pink-300 to-teal-300 flex items-center justify-center h-72">
        <h1 className="text-5xl font-bold text-center animate__animated animate__pulse animate__slower animate__infinite">
          <i className="ri-user-voice-line text-6xl mr-4"></i>
          Teachers
        </h1>
      </header>
      <section className="p-8 md:p-16 lg:p-24 flex flex-wrap justify-center gap-8">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border-2 border-gray-200 rounded-xl shadow-xl hover:shadow-green-600 transition-shadow duration-300 ease-in-out"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-full h-50% object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold mb-2">{teacher.name}</h2>
              <p className="text-gray-600">{teacher.Qualification}</p>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Teacher;
