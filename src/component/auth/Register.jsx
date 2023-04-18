import React from "react";
import signimage from "../img/lib.png";
// import Logo from '../img/Logo.png'
import './auth.css'
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth-cont">
      <div className="form-holder">
      <div className="text-center core">
        <div className="mt-1">
          {/* <div>
            <img src={Logo} alt='logo' className='logos mx-auto'/>
          </div> */}
          <h5 className="text-xs">
            Please create a new account here
          </h5>
          <form>
            <div className="mt-1 radius-100">
              <input
                id="name"
                type="text"
                className="px-1 border rounded-full border-grey-400"
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
            <p className="p-2 ml-48">Already have an account?<NavLink to="/login" className="line">Login</NavLink></p>
            <button
              type="submit"
              className="btn bg-gradient-to-l from-blue-200 to-blue-500 mt-1 py-2.5 px-5 mr-2 mb-2 text-sm font-medium focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:hover:text-white"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      </div>
      <div className="pic">
        <img src={signimage} alt="library" />
      </div>
    </div>
  );
};

export default Register;
