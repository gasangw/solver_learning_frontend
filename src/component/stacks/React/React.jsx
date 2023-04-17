import React from "react";
import "../stacks.css";
import { BsTwitter } from 'react-icons/bs';
import { FiInstagram, FiFacebook } from 'react-icons/fi';
import { CodesInReact } from "../SyntaxSamples/SampleInReact";

const AboutReact = () => {
  return (
    <section>
      <p className="font-bold text-xl text-center">Over View Of React</p>
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
            <div>
              <div className="py-48">
                <h3 className="text-xl font-bold pb-4 text-gray-600 sm:text-xl">
                  More About the Course Instructor
                </h3>
                <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                  <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                  <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                        Learn and Understand React with
                      </h3>
                      <p className="mt-1 text-xs font-medium text-gray-600">
                        John Doe
                      </p>
                    </div>

                    <div className="hidden sm:block sm:shrink-0">
                      <img
                        alt="Paul Clapton"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                        className="h-16 w-16 rounded-lg object-cover shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="max-w-[40ch] text-sm pb-3 text-gray-500">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      At velit illum provident a, ipsa maiores deleniti
                      consectetur nobis et eaque.
                    </p>
                    <p className="max-w-[40ch] text-sm text-gray-500">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      At velit illum provident a, ipsa maiores deleniti
                      consectetur nobis et eaque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
            <div className="pt-20">
             <CodesInReact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutReact;
