import React from "react";
import "./styles.css";
import GIZ from './img/GIZ.png'
import Cards from "./cards/Cards";
import About from "./About";
import Footer from "./Footer";
import NavBar from "./navBar";

const Home = () => {
  return (
    <div>
     <NavBar />
     <div className="wrapper">
      <div className="wrapper2_holder">
        <div>
          <h1 className="title lg:text-3xl font-bold text-[1.3rem] text-left pb-3">Start your learning Journey<br className="lg:block sm
          hidden"/>with us</h1>
          <p className="parag">
            Solver Learning is an e-learning website tailored specifically to
            meet the learning needs of students at Solvit Africa, providing easy
            access to learning materials, progress tracking, and interactive
            features for collaborative learning.
          </p>
          <div className="lg:text-left py-10 grid grid-cols-1 gap-[0.6rem] lg:flex lg:flex-row">
            <button className="border-1 cursor-pointer rounded-full py-2 px-6 mr-5 text-white text-lg btn-1">
              View all Stacks
            </button>
            <button className="border-1 cursor-pointer  rounded-full py-2 px-6 text-white text-lg btn-2">
              Access all courses
            </button>
          </div>
        </div>
        <div className="lg:px-15 student">
          <img src={GIZ} alt="student-reading" className="ml-auto stud rounded-full object-cover lg:rounded-full w-full" />
        </div>
      </div>
    </div>
      <Cards />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
