import React, { useState } from "react";
import "./lesson.css"
import { ImNext } from 'react-icons/im';
import { BsBookHalf } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';
import { NavLink } from "react-router-dom";

const Lesson3 = () => {
  const [complete, setComplete] = useState(false)
  const Completed = () => {
    setComplete(!complete)
  }
  return (
    <div className="m-10">
      <h1 className="pl-20 title-lesson">
                    HTML Boilerplate</h1>
      <div className="lesson-container">
        <article className="lesson-content pl-20 pr-10 m-3">
          <div>
            <h2 className="pb-3 pt-1" id="introduction">Introduction</h2>
            <p>
            All HTML documents have the same basic structure or boilerplate that
        needs to be in place before anything useful can be done.In this lesson, we will explore the different parts
         of this boilerplate and see how it all fits together.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold pb-3 pt-3" id="lesson-overview">Lesson Overview</h2>
            <p>
             This section contains a general overview of topics that you will learn in this lesson.
            </p>
            <ul>
              <li>
                Get a basic overview of bailplate
                for HTML document, And open HTML documents in your browser.
              </li>
            </ul>
          </div>
          <div id="content">
            <h2 className="text-lg font-bold pb-3 pt-3" id="html/css">Creating an HTML File</h2>
            <p>
             To demonstrate an HTML boilerplate, we first need an HTML file to work with.

             Create a new folder on your computer and name it html - boilerplate.Within that folder create a new file and name it index.html.

             You’ re probably already familiar with a lot of different types of files,
                 for example doc, pdf, and image files.To
             let the computer know we want to create an HTML file, we need to append the filename with the.html extension as we have done when creating the index.html file.

             It is worth noting that we named our HTML file index.We should always name the HTML file that will contain the homepage of our websites index.html.This is because web servers will by
             default look
             for an index.html page when users land on our websites - and not having one will cause big problems.
            </p>
            <p className="pb-3 pt-3">
              The DOCTYPE
              Every HTML page starts with a doctype declaration.The doctype’ s purpose is to tell the browser what version of HTML it should use to render the document.The latest version of HTML is HTML5, and the doctype
              for that version is simply 

              The doctypes
              for older versions of HTML were a bit more complicated.For example, this is the doctype declaration
                          for HTML4:
                          
                          What is the lang attribute ?
                              lang specifies the language of the text content in that element.This attribute is primarily used
                          for improving accessibility of the webpage.It allows assistive technologies,
                              for example screen readers, to adapt according to the language and invoke correct pronunciation.

                          Head Element
                          The  element is where we put important meta - information about our webpages, and stuff required
                          Body Element
The final element needed to complete the HTML boilerplate is the  element. This is where all the content that will be displayed to users will go - the text, images, lists, links, and so on.

To complete the boilerplate, add a body element to the index.html file. The body element also goes within the HTML element and is always below the head element, like so:
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold pb-3 pt-3" id="assignment">Assignment</h2>
            <div className="assign-wrapper">
               <p>1. Read <a href="https://www.youtube.com/watch?v=V8UAEoOvqFg&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&t=93s">build your first web app</a>. Watch and follow along to Kevin Powell’s brilliant.</p>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold pb-3 pt-3" id="knowledge-check">Knowledge Check</h2>
            <p>This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.</p>
            <ul className="pl-3">
                <li><a href="https://www.theodinproject.com/lessons/foundations-html-boilerplate#the-doctype">what is purpase of doctype declaration?</a></li>
                <li><a href="#content">What is HTML element?</a></li>
                <li><a href="#content">What is the purpase of head element?</a></li>
                <li><a href="https://www.theodinproject.com/lessons/foundations-html-boilerplate#html-element">What is pupase of body element?</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold pb-3 pt-3" id="resources">Additional Resources</h2>
            <p>This section contains helpful links to related content. It isn’t required, so consider it supplemental.</p>
            <ul>
                <li><a href="https://www.freecodecamp.org/news/html-css-and-javascript-explained-for-beginners/">This FreeCodeCamp article</a>goes into a little more depth than the assigned one. It covers things we’ll be teaching explicitly in later lessons though, so don’t worry about memorizing any of the details.</li>
            </ul>
          </div>
        </article>
        <aside className="ml-40">
          <div className="lesson-nav">
            <h4 className="pb-2">Lesson Contents</h4>
            <ul className="pt-1">
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#lesson-overview">Lesson Overview</a></li>
                <li><a href="#html/css"> Creating HTML File and implementation</a></li>
                <li><a href="#assignment">Assignment</a></li>
                <li><a href="#knowledge-check">Knowledge Check</a></li>
                <li><a href="#resources">Additional Resources</a></li>
            </ul>
          </div>
        </aside>
      </div>
      <div className="bottom-buts p-20 flex gap-2 justify-center">
        <div className=" flex gap-2 text-lg text-white btu-1 cursor-pointer justify-center p-2 rounded-md">
            <BsBookHalf className="text-lg mt-1.5"/>
           <NavLink to="/react">
            <p>View Course</p> 
           </NavLink>
        </div>
        <div  className=" flex gap-2 btu-1 text-lg text-white justify-center p-2 rounded-md" onClick={Completed}>
           { complete ? <button>Mark Complete</button> : <div className="flex gap-2 text-xl">
              <p>Completed</p>
              <AiFillCheckCircle className="w-7 h-7 mt-1"/>
            </div> }
        </div>
        <div  className=" flex gap-2 cursor-pointer text-lg btu-1 text-white justify-center p-2 rounded-md">
            <ImNext className="text-lg mt-1.5"/>
           <NavLink to="/react/lesson4">
            <p>Next Lesson</p> 
           </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Lesson3;
