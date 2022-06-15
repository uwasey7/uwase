import React from "react";
// import HomeLayout from "../component/Homelayout";
import about from "../assets/image/about.jpg";
import abt from "../assets/image/abt.jpg";
import "./about.css";
const About = () => {
  return (
    <div>
      <h1 style={{ color: "black", textAlign: "center", fontWeight: "bold" }}>
        About us
      </h1>
      <p style={{ fontWeight: "bolder",textAlign:"center"}}>
        The Tour du Rwanda is a cycling event created in 1988 and based in
        Rwanda. The event is a cycling stage race that is organized by the
        Rwanda Cycling Federation. The event has been part of the UCI Africa
        Tour as a category 2.1-rated event since 2009. Tour du Rwanda 2022:
        Mugisha Wins 8th Stage as Eritrean Tesfazion Romps to Victory. Eritrean
        Natnael Tesfazion won the 14th Edition of Tour du Rwanda. Mugisha, who
        races for South Africa's ProTouch, won the eighth stage of the tour,
        which was flagged of by President Kagame, at Canal Olympia in Rebero,
        Kicukiro district
      </p>
      <div className="yvonne">
      <div className="uwase">
      <img  src={about} alt=""></img>
      <img  src={abt} alt=""></img>
      </div>
      </div>
    </div>
  );
};
export default About;