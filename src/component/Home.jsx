import React from "react";
import './styles.css'

const Home = () => {
  return (
    <div className="wrapper">
      <div>
        <h1>Solver Learning</h1>
        <p>
          Solver Learning is an e-learning website tailored specifically to meet
          the learning needs of students at Solvit Africa, providing easy access
          to learning materials, progress tracking, and interactive features for
          collaborative learning.
        </p>
        <div>
            <button className="border-1 py-1 px-4 mr-5 text-white text-lg btn-1">View all Stacks</button>
            <button className="border-1 py-1 px-4 text-white text-lg btn-2">Access all courses</button>
        </div>
      </div>
      <div>
        <img src="" alt="pics" />
      </div>
    </div>
  );
};

export default Home;
