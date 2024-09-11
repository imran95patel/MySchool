import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Holiday = () => {
  const holidays = [
    {
      title: "Spring Break",
      duration: "2 weeks",
      date: "March 15 - April 10",
    },
    {
      title: "Summer Break",
      duration: "2 weeks",
      date: "June 15 - July 10",
    },
    {
      title: "Fall Break",
      duration: "1.5 weeks",
      date: "September 15 - October 10",
    },
    {
      title: "Winter Break",
      duration: "4 weeks",
      date: "December 15 - January 10",
    },
    {
      title: "Thanksgiving Break",
      duration: "1 week",
      date: "November 15 - December 10",
    },
    {
      title: "Halloween Break",
      duration: "1 week",
      date: "October 31 - November 1",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="px-4 py-8 md:px-8 lg:px-16">
        <h1 className="text-3xl font-bold text-center mb-6">Your Holidays</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">S/No</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Duration</th>
                <th className="px-4 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {holidays.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-4 py-2">{item.title}</td>
                  <td className="px-4 py-2">{item.duration}</td>
                  <td className="px-4 py-2">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Holiday;
