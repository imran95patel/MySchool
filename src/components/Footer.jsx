import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#03011c] p-8 md:p-16 flex flex-col md:flex-row gap-12">
      <div className="flex-1">
        <h2 className="text-white font-medium">MySchool</h2>
        <p className="text-white mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          molestias rerum beatae quaerat dolorum praesentium harum itaque
          possimus dolore doloremque.
        </p>
      </div>
      <div className="flex-1">
        <h2 className="text-white font-medium">User Link</h2>
        <ul className="list-none p-0 mt-4">
          <li className="mb-2">
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/teacher" className="text-white hover:underline">
              Teachers
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/holiday" className="text-white hover:underline">
              Holidays
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/contact" className="text-white hover:underline">
              Contacts
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/login" className="text-white hover:underline">
              Talk to us
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <h2 className="text-white font-medium">Social Links</h2>
        <ul className="list-none p-0 mt-4">
          <li className="mb-2">
            <a
              href="https://www.youtube.com"
              className="text-white flex items-center hover:underline"
            >
              <i className="ri-youtube-fill mr-2"></i>
              Youtube
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.facebook.com/"
              className="text-white flex items-center hover:underline"
            >
              <i className="ri-facebook-circle-fill mr-2"></i>
              Facebook
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.instagram.com"
              className="text-white flex items-center hover:underline"
            >
              <i className="ri-instagram-fill mr-2"></i>
              Instagram
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.linkedin.com/in/imran-patel83"
              className="text-white flex items-center hover:underline"
            >
              <i className="ri-linkedin-box-fill mr-2"></i>
              Linkedin
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://github.com/imran95patel"
              className="text-white flex items-center hover:underline"
            >
              <i className="ri-github-fill mr-2"></i>
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <h2 className="text-white font-medium">Enquiry</h2>
        <form className="mt-4 flex flex-col gap-4">
          <input
            name="fullName"
            placeholder="Full Name"
            type="text"
            required
            className="border-none p-3 rounded-lg"
          />
          <input
            name="email"
            placeholder="example@example.com"
            type="email"
            required
            className="border-none p-3 rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="border-none p-3 rounded-lg"
          />
          <button
            type="submit"
            className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
