import React, { useRef, useState } from "react";
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
        <header className="grid md:grid-cols-2 md:p-24 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  animate__animated animate__fadeIn animate__slow">
          <div>
            <img
              src={img}
              alt=""
              className="rounded-full w-3/4 animate__animated animate__backInDown border-2 shadow-5xl "
            />
          </div>
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="text-7xl font-bold text-white">
              " Say Hello! My School Managment.
            </h1>
            <p className="text-xl font-semibold ">
              Enjoy full online learning experinace with Myschool by Imran Patel
            </p>
            <div className="flex gap-4">
              <button className="bg-[#100d22] text-white px-12 py-2 rounded-lg text-lg font-semibold hover:bg-orange-600">
                Learn More
              </button>
              <button className="border border-2 border-[#100d22] text-[#100d22] px-12 py-2 rounded-lg text-lg font-semibold">
                Watch Video
              </button>
            </div>
          </div>
        </header>

        <div className="p-24">
          <h1 className="text-center text-4xl font-bold">
            Benifits & Advantages
          </h1>
          <p className="text-gray-600 text-center mt-4 text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sit
            eos explicabo nesciunt distinctio? Perferendis nulla, ipsum corporis
            error voluptatem aliquid et consequatur culpa voluptatibus
            aspernatur quos asperiores iste dolorem.
          </p>
          <div className="w-11/12 mx-auto mt-12 grid grid-cols-3 gap-8">
            <div className="shadow-lg border rounded-md p-4 text-center">
              <i className="ri-artboard-line text-6xl"></i>
              <h1 className="text-2xl font-semibold mb-2 ">Great Faculty</h1>
              <p className="text-gray-600 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="shadow-lg border rounded-md p-4 text-center">
              <i className="ri-edit-box-line text-6xl"></i>
              <h1 className="text-2xl font-semibold mb-2 ">
                Latest Curriculum
              </h1>
              <p className="text-gray-600 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="shadow-lg border rounded-md p-4 text-center">
              <i className="ri-tree-line text-6xl"></i>
              <h1 className="text-2xl font-semibold mb-2 ">Great Envirnment</h1>
              <p className="text-gray-600 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 p-24">
          <div>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="w-8/12 rounded-2xl shadow-xl shadow-orange-600"
            >
              <SwiperSlide>
                <img src={img1} alt="" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img4} alt="" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} alt="" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img6} alt="" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img7} alt="" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img8} alt="" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img9} alt="" className="" />
              </SwiperSlide>
            </Swiper>
            ;
          </div>
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="text-7xl font-bold text-orange-600">
              " The best way to predict the future is to create it .
            </h1>
            <p className="text-xl font-semibold ">
              Prospective parents and their children – who require information
              about the school, pastoral care, exam results, admission
              procedures, open days.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#100d22] text-white px-12 py-2 rounded-lg text-lg font-semibold hover:bg-orange-600">
                Learn More
              </button>
              <button className="border border-2 border-[#100d22] text-[#100d22] px-12 py-2 rounded-lg text-lg font-semibold">
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

// <div className="p-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
// <h1 className="text-center text-4xl font-bold">Compus Portfolio</h1>
// <p className="text-white text-center mt-4 text-lg ">
//   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sit
//   eos explicabo nesciunt distinctio? Perferendis nulla, ipsum corporis
//   error voluptatem aliquid et consequatur culpa voluptatibus
//   aspernatur quos asperiores iste dolorem.
// </p>

// </div>
