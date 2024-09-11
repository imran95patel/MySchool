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
      title: "Success",
      text: "Your message has been sent successfully!",
      confirmButtonText: "OK",
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row p-8 md:p-16">
        <div className="flex-1">
          <img src={img} alt="Contact Us" className="w-full h-auto" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <form
            onSubmit={contactUs}
            className="w-full max-w-lg flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium">Full Name</label>
              <input
                onChange={(e) => setFullname(e.target.value)}
                required
                type="text"
                name="fullname"
                placeholder="Enter Your name"
                className="border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                placeholder="example@example.com"
                className="border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium">Message</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                required
                name="message"
                placeholder="Write your query or message here"
                rows={4}
                className="border border-gray-300 rounded-lg p-3"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
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
