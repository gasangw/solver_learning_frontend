import React from "react";
import about from './img/about.png'


const About = () => {
  return (
    <div className="about-wrapper px-20 my-wrap">
      <div className="slidein">
        <p className="text-xl text-left p-2 about font-bold">About Us</p>
        <h3 className="font-bold text-left about-heading">We provide best resources to develop your skill</h3>
        <p className="text-lg py-3 text-left about-text">
          Solver Learning is an innovative e-learning website designed to
          support Solvit Africa students in accessing their learning materials
          and staying on top of their coursework. With a user-friendly
          interface, the website makes it easy for students to navigate through
          the materials for a particular week, ensuring that they stay on track
          with their studies.
        </p>
      </div>
      <div>
        <img src={about} alt="cartoons" className="cartoon-students"/>
      </div>
    </div>
  );
};

export default About;
