import React, { useState } from 'react';

import signimage from '../img/lib.png';
import Logo from '../img/Logo.png';
import { NavLink } from 'react-router-dom';
import './auth.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Call API endpoint with email and password
    const response = await fetch('http://hira.pythonanywhere.com/accounts/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password
      }),

    })
    const data = await response.json();
    if (response.ok) {
      // Login successful, navigate to dashboard
      navigate('/Lesson1');

    } else {
      // Login failed, display error message
      console.log(data.message);
    }
    
  }

  

  return (
      <div class="auth-cont" >
      <div className='form-holder'>
      <div class="text-center core">
        <img src={Logo} alt='logo' className='logos'/>
        <form onSubmit={handleSubmit}>
          <h6 className="mt-12 text-xl">
          Please create a new account here
          </h6><br/>
          <div class="mt-2">
            <input
              id="username"
              type="text"
              class="px-1 border rounded-full border-grey-400"
              name="username"
                placeholder="username"
                onChange={handleUsernameChange}
            /><br/><br/>
          </div>
          <div class="mt-2">
            <input
              id="password"
              type="password"
              class="px-1 rounded-full"
              name="password"
                placeholder='password'
                onChange={handlPasswordChange}
              required
            /><br/>

            </div>
            <div className = "flex " >
          <h6 className="text-sm pt-3 ml-48 text-xl">Don't have an account? <NavLink to="/signup" className="line">sign up</NavLink></h6>
          <a className="ml-12 mt-3 text-xl" href='ResetPassword'> ResetPassword</a>
              </div>
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
       <img src={signimage} alt="library"/>
      </div>
    </div>
      
    



    

      
  
  
  )
}

export default Login
