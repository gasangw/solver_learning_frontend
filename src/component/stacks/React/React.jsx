import React from "react";
import "../stacks.css";
import { BsTwitter } from 'react-icons/bs';
import { NavLink } from "react-router-dom";
import { FiInstagram, FiFacebook } from 'react-icons/fi';
import NavScroll from "../Nav";

const AboutReact = () => {
  return (
    <section>
      <NavScroll />
      <p className="font-bold text-xl text-center">REACT</p>
      <div className="sidebar-sec">
        <aside class="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
          <div class="flex flex-col items-center mt-6 -mx-2">
            <h2 className="text-xl mb-3 font-semibold">Instructor</h2>
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
          <div className="social-icon-holder pt-3">
            <ul>
              <li><a href="#"><FiFacebook /></a></li>
              <li><a href="#"><BsTwitter /></a></li>
              <li><a href="#"><FiInstagram /></a></li>
            </ul>
          </div>
          <hr class="mt-4" />
          <div class="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <details>
                <summary>Module 1: HTML/CSS</summary>
                <ul className="lession-items">
                  <li>
                    <NavLink to="/react/lesson1">Day-1: Lesson 1</NavLink>
                  </li>
                  <li>
                    <NavLink to="/react/lesson2">Day-2: Lesson 2</NavLink>
                  </li>
                  <li>
                    <a href="#">Day-3: Lesson 3</a>
                  </li>
                  <li>
                    <a href="#">Day-4: Lesson 4</a>
                  </li>
                  <li>
                    <NavLink to="/react/lessons/assignment">
                      Assessment
                    </NavLink>
                  </li>
                </ul>
              </details>
              <details>
                <summary>Module 2: JavaScript</summary>
                <ul className="lession-items">
                  <li>
                    <a href="#">Day-1: Lesson 1</a>
                  </li>
                  <li>
                    <a href="#">Day-2: Lesson 2</a>
                  </li>
                  <li>
                    <a href="#">Day-3: Lesson 3</a>
                  </li>
                  <li>
                    <a href="#">Day-4: Lesson 4</a>
                  </li>
                  <li>
                    <a href="#">Day-5: Assessment</a>
                  </li>
                </ul>
              </details>
              <details>
                <summary>Module 3: React</summary>
                <ul className="lession-items">
                  <li>
                    <a href="#">Day-1: Lesson 1</a>
                  </li>
                  <li>
                    <a href="#">Day-2: Lesson 2</a>
                  </li>
                  <li>
                    <a href="#">Day-3: Lesson 3</a>
                  </li>
                  <li>
                    <a href="#">Day-4: Lesson 4</a>
                  </li>
                  <li>
                    <a href="#">Day-5: Assessment</a>
                  </li>
                </ul>
              </details>
              <p className="final rounded text-white text-lg">
                <a href="#">Final Project</a>
              </p>
            </nav>
          </div>
        </aside>
        <div className="side-description pt-10 pr-8">
          <div>
          <p className="text-left ml-2 text-lg mb-10">
              React is an open-source JavaScript frontend library for creating
              user interfaces. It uses component based approach to create
              complicated, interactive web and mobile user interfaces.
            </p>
            <p className="text-left ml-2 text-lg">
              React is an open-source JavaScript frontend library for creating
              user interfaces. It uses component based approach to create
              complicated, interactive web and mobile user interfaces.
            </p>             
          </div>
          <div className="video-code">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/RHIWj7hvpM0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            {/* <div className="pt-20">
             <CodesInReact />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutReact;
