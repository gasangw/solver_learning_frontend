import React from "react";
import "./styles.css";
import student from "./img/student.png";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="wrapper2_holder">
        <div>
          <h1 className="title text-3xl font-bold text-left pb-3">Start your learning Journey<br/>with us</h1>
          <p className="parag">
            Solver Learning is an e-learning website tailored specifically to
            meet the learning needs of students at Solvit Africa, providing easy
            access to learning materials, progress tracking, and interactive
            features for collaborative learning.
          </p>
          <div className="text-left py-10">
            <button className="border-1 py-2 px-6 mr-5 text-white text-lg btn-1">
              View all Stacks
            </button>
            <button className="border-1 py-2 px-6 text-white text-lg btn-2">
              Access all courses
            </button>
          </div>
        </div>
        <div className="px-15">
          <img src={student} alt="student-reading" className="ml-auto stud" />
        </div>
      </div>
    </div>
  );
};

export default Home;
