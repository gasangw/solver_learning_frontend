import React from 'react'
import signimage from '../img/lib.png'
// import logoimg from '../img/Logo.png'
import './Login.css'

const Login=()=> {
  return (
      < div class = "flex ml-52 mb-5 mt-4" >
      <div class="w-96 mr-20">
        <div class="header">
      
        </div>
        <div class=" mt-4  ">
               <h6 className="text-xs mt-12">
          Please create a new account here
          </h6>
          <div class="mt-2">
            <input
              id="email"
              type="text"
              class="  px-1 border rounded-full border-grey-400"
              name="email"
              value=""
              placeholder="Email"
            />
          </div>
          <div class="  mt-2">
            <input
              id="password"
              type="password"
              class="  px-1 border rounded-full border-grey-400"
              name="password"
              required
              placeholder="Password"
            />

          </div>
          <h6 className=""> Don't have an account <a href=' 'id='link'>sign up</a></h6>
          <button
            type="button"
            class = " btn bg-gradient-to-l from-blue-200 to-blue-500 mt-4 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Login
          </button>
        </div>
      </div>

      <div class=" pic w-96 mt-0" >
       <img src={signimage} alt=""></img>
      
      </div>
    </div>
      
    



    

      
  
  
  )
}

export default Login
