import React from "react";
import "../stacks.css";
import "./react.css"
import { BsArrowLeft } from "react-icons/bs";
import { GoArrowRight } from 'react-icons/go';

const AboutReact = () => {
  return (
    <section>
      <button className="flex align-baseline mt-2 ml-2 py-2 px-3 rounded-md border border-green-600">
        <BsArrowLeft className="mt-1 mr-2" /> Back
      </button>
      <p className="font-bold text-xl text-center">Over View Of React</p>
      <div className="sidebar-sec">
        <aside class="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
          <div class="flex flex-col items-center mt-6 -mx-2">
            <img
              class="object-cover w-24 h-24 mx-2 rounded-full"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
            />
            <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
              John Doe
            </h4>
            <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
              john@example.com
            </p>
          </div>
          <hr class="mt-4"/>
          <div class="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <div class="sec-center"> 	
                <input class="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
                <label class="for-dropdown" for="dropdown">Module 1: HTML/CSS<i class="uil uil-arrow-down"></i></label>
                <div class="section-dropdown"> 
                  <a href="#">Lesson 1: Day 1 <i class="uil uil-arrow-right"></i></a>
                  <a href="#">Lesson 3: Day 3<i class="uil uil-arrow-right"></i></a>
                  <a href="#">Lession 4: Day 5<i class="uil uil-arrow-right"></i></a>
                  <a href="#">Assessment: Day 5<i class="uil uil-arrow-right"></i></a>
                </div>
              </div>
            </nav>
          </div>
        </aside>
        <div className="side-description pt-20">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RHIWj7hvpM0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
            <div>
              <p className="text-left ml-2 text-lg">
                React is an open-source JavaScript frontend library for creating
                user interfaces. It uses component based approach to create
                complicated, interactive web and mobile user interfaces.
              </p><br /><br/>
              <p className="text-left ml-2 text-lg">
                React is an open-source JavaScript frontend library for creating
                user interfaces. It uses component based approach to create
                complicated, interactive web and mobile user interfaces.
              </p>
              <button className="bg-gray-300 py-2 px-4 rounded flex ml-2 mt-5">Continue <GoArrowRight className="ml-2 mt-1" /></button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutReact;
