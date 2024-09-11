import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import img from "../assets/teacher2.jpg";
import img1 from "../assets/Designer.png";
import img2 from "../assets/Designer1.png";
import img3 from "../assets/Designer2.png";
import img4 from "../assets/Designer3.png";
import img5 from "../assets/Designer4.png";
import img6 from "../assets/Designer5.png";
import img7 from "../assets/Designer6.png";
import img8 from "../assets/Designer7.png";
import img9 from "../assets/Designer8.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* Header Section */}
        <header className="grid md:grid-cols-2 p-6 md:p-24 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 animate__animated animate__fadeIn animate__slow">
          <div className="flex justify-center md:justify-start">
            <img
              src={img}
              alt="Teacher"
              className="rounded-full w-3/4 md:w-4/5 border-2 shadow-5xl animate__animated animate__backInDown"
            />
          </div>
          <div className="flex flex-col gap-8 justify-center text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold text-white">
              Say Hello! My School Management.
            </h1>
            <p className="text-lg md:text-xl font-semibold text-white">
              Enjoy a full online learning experience with MySchool by Imran
              Patel.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center md:justify-start">
              <button className="bg-[#100d22] text-white px-8 py-2 rounded-lg text-lg font-semibold hover:bg-orange-600">
                Learn More
              </button>
              <button className="border border-2 border-[#100d22] text-[#100d22] px-8 py-2 rounded-lg text-lg font-semibold">
                Watch Video
              </button>
            </div>
          </div>
        </header>

        {/* Benefits Section */}
        <div className="p-6 md:p-24">
          <h1 className="text-center text-3xl md:text-4xl font-bold">
            Benefits & Advantages
          </h1>
          <p className="text-gray-600 text-center mt-4 text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sit
            eos explicabo nesciunt distinctio? Perferendis nulla, ipsum corporis
            error voluptatem aliquid et consequatur culpa voluptatibus
            aspernatur quos asperiores iste dolorem.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="shadow-lg border rounded-md p-4 text-center">
              <i className="ri-artboard-line text-4xl md:text-6xl"></i>
              <h1 className="text-xl md:text-2xl font-semibold mb-2">
                Great Faculty
              </h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="shadow-lg border rounded-md p-4 text-center">
              <i className="ri-edit-box-line text-4xl md:text-6xl"></i>
              <h1 className="text-xl md:text-2xl font-semibold mb-2">
                Latest Curriculum
              </h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="shadow-lg border rounded-md p-4 text-center">
              <i className="ri-tree-line text-4xl md:text-6xl"></i>
              <h1 className="text-xl md:text-2xl font-semibold mb-2">
                Great Environment
              </h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>

        {/* Swiper Section */}
        <div className="p-6 md:p-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="w-full rounded-2xl shadow-xl hover:shadow-green-600 animate__animated animate__zoomIn"
              >
                {[img1, img2, img3, img4, img5, img6, img7, img8, img9].map(
                  (src, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-auto"
                      />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
            <div className="flex flex-col gap-8 justify-center text-center md:text-left">
              <h1 className="text-4xl md:text-7xl font-bold text-orange-600">
                The best way to predict the future is to create it.
              </h1>
              <p className="text-lg md:text-xl font-semibold">
                Prospective parents and their children – who require information
                about the school, pastoral care, exam results, admission
                procedures, and open days.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-[#100d22] text-white px-8 py-2 rounded-lg text-lg font-semibold hover:bg-orange-600">
                  Learn More
                </button>
                <button className="border border-2 border-[#100d22] text-[#100d22] px-8 py-2 rounded-lg text-lg font-semibold">
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
