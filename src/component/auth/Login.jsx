import React from 'react';
import signimage from '../img/lib.png';
import Logo from '../img/Logo.png';
import { NavLink } from 'react-router-dom';
import './auth.css'

const Login=()=> {
  return (
      <div class="auth-cont" >
      <div className='form-holder'>
      <div class="text-center core">
        <img src={Logo} alt='logo' className='logos'/>
        <form>
          <h6 className="mt-12">
          Please create a new account here
          </h6>
          <div class="mt-2">
            <input
              id="email"
              type="text"
              class="px-1 border rounded-full border-grey-400"
              name="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div class="mt-2">
            <input
              id="password"
              type="password"
              class="px-1 rounded-full"
              name="password"
              placeholder='password'
              required
            />

          </div>
          <h6 className="text-sm pt-3 ml-48">Don't have an account? <NavLink to="/signup" className="line">sign up</NavLink></h6>
          <button
            type="submit"
            class = "btn bg-gradient-to-l from-blue-200 to-blue-500 mt-4 py-2.5 px-5 mr-2 mb-2 text-sm font-medium bg-white rounded-full border"
          >
            Login
          </button>
        </form>
      </div>
      </div>
      <div class="pic">
       <img src={signimage} alt="library" />
      </div>
    </div>
      
    



    

      
  
  
  )
}

export default Login
