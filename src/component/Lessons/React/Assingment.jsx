import React,  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./lesson.css"
const Assingment = () => {
  const form = useRef();
  const sendMessage = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rwq9987', 'template_f7dxpsf', form.current, 'f8r4nRcpaXAfP0vyx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
    });
    e.target.reset();
  }
  return (
    <div>
      <article className="lesson-content pl-20 pr-10 m-4">
          <div>
            <h2 className="text-lg font-bold pb-3 pt-3" id="assignment">Assignment for Lesson 1</h2>
            <div className="assign-wrapper">
               <ul>
                <li>1. Create a folder and name it <b>Assignment 1</b></li>
                <li>2. create an <b>index.html</b> file inside the folder</li>
                <li>3 <em>Learning HTML AND CSS</em> should be your heading</li>
                <li>3 <em>Hello World!</em> should be your text</li>
                <li>3. Create a <b>Stlyes.css</b> file</li>
                <li>4. Create a repository on <em>Github</em> and push your codes their</li>
                <li>5. Fill in the <b>Form</b> below and submit for review</li>
               </ul>
            </div>
          </div>
          <h3 className='form-title font-semibold mt-6'>Submission Form for Review</h3>
          <form ref={form} onSubmit={sendMessage} className='form'>
          <label for="user_name">Full Name</label>
          <input type="text" name="user_name" placeholder="Your Full Name" required/>
          <label for="email">Email</label>
          <input type="email" name="user_email" placeholder="example@gmail.com" required/>
          <label for="project">Project Name</label>
          <input type="text" name="project" placeholder="eg lesson 1 assignment" required/>
          <label for="Github">Github Link</label>
          <input type="url" name="Github" placeholder="https://github.com/" required/>
          <label for="deployed">Deployed Link (Optional)</label>
          <input type="url" name="deployed" placeholder="https://..."/>
          <button type="submit" className="btn text-white text-lg">Submit</button>
        </form>
        </article>
    </div>
  )
}

export default Assingment
