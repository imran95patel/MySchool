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
      duration: "1 weeks",
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
      <div style={{ width: "60%", margin: "0 auto", padding: "64px 0" }}>
        <h1 style={{ textAlign: "center" }}>Your Holidays</h1>
        <table width="100%">
          <thead>
            <tr style={{ background: "#ddd" }}>
              <th style={{ padding: 14 }}>S/No</th>
              <th>Title</th>
              <th>Duration</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((item, index) => (
              <tr key={index} style={{ textAlign: "center" }}>
                <td style={{ padding: 14, borderBottom: "1px solid #ddd" }}>
                  {index + 1}
                </td>
                <td style={{ padding: 14, borderBottom: "1px solid #ddd" }}>
                  {item.title}
                </td>
                <td style={{ padding: 14, borderBottom: "1px solid #ddd" }}>
                  {item.duration}
                </td>
                <td style={{ padding: 14, borderBottom: "1px solid #ddd" }}>
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Holiday;
