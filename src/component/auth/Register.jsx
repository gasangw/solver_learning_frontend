import React from "react";
import signimage from "../img/lib.png";
import './auth.css'

const Register = () => {
  return (
    <div className="flex ml-52 mt-16">
      <div className="bg-blue-50 ">
        <div className="header"></div>
        <div className="mt-4">
          <div className="ml-20 w-25 mt-2">
            {/* <img src={logoimg} alt="" /> */}
          </div>
          <h5 className="text-xs">
            Please create a new account here
          </h5>
          <div className="mr-20">
            <div className="mt-1 radius-100">
              <input
                id="name"
                type="text"
                className=" px-1 border rounded-full border-grey-400"
                name="firstname"
                value=""
                placeholder="First Name"
              />
            </div>
            <div className="mt-1 radius-100">
              <input
                id="name"
                type="text"
                className=" px-1 border rounded-full border-grey-400"
                name="lastname"
                value=""
                placeholder="Last Name"
              />
            </div>
            <div className="mt-1 radius-100">
              <input
                id="email"
                type="text"
                className=" px-1 border rounded-full border-grey-400"
                name="email"
                value=""
                placeholder="Email"
              />
            </div>
            <div className=" mt-1">
              <input
                id="password"
                type="password"
                className=" px-1 border rounded-full border-grey-400"
                name="password"
                required
                placeholder="Password"
              />
            </div>
            <div className=" mt-1">
              <input
                id="password"
                type="password"
                className=" w px-1 border rounded-full border-grey-400"
                name="password"
                required
                placeholder="Confirm Password"
              />
            </div>
            <a className="text-sm bg-blue-50 ml-4" href="Login">
              <label className="ml-20">Already have an account?</label>
              Login
            </a>
            <button
              type="button"
              className="button bg-gradient-to-l from-blue-200 to-blue-500 mt-1 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="w-96 mt-0">
        <img src={signimage} alt="" />
      </div>
    </div>
  );
};

export default Register;
