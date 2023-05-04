import React, { useState } from "react";
import "./lesson.css"
import { ImNext } from 'react-icons/im';
import { BsBookHalf } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';
import { NavLink } from "react-router-dom";

const Lesson1 = () => {
  const [complete, setComplete] = useState(false)
  const Completed = () => {
    setComplete(!complete)
  }
  return (
    <div className="m-10">
      <h1 className="pl-20 title-lesson">Introduction to HTML & CSS</h1>
      <div className="lesson-container">
        <article className="lesson-content pl-20 pr-10 m-3">
          <div>
            <h2 className="pb-3 pt-1" id="introduction">Introduction</h2>
            <p>
              So here it is: it’s time to actually start making things. This
              section will teach you the basics of HTML and CSS, the two
              foundational building blocks of pretty much everything on the web.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold pb-3 pt-3" id="lesson-overview">Lesson Overview</h2>
            <p>
              This section contains a general overview of topics that you will
              learn in this lesson.
            </p>
            <ul>
              <li>
                Get a basic overview of HTML, CSS and how they work together.
              </li>
            </ul>
          </div>
          <div id="content">
            <h2 className="text-lg font-bold pb-3 pt-3" id="html/css">HTML and CSS</h2>
            <p>
              HTML and CSS are two languages that work together to create
              everything that you see when you look at something on the
              internet. HTML is the raw data that a webpage is built out of. All
              the text, links, cards, lists, and buttons are created in HTML.
              CSS is what adds style to those plain elements. HTML puts
              information on a webpage, and CSS positions that information,
              gives it color, changes the font, and makes it look great!
            </p>
            <p className="pb-3 pt-3">
              Many great resources out there keep referring to HTML and CSS as
              programming languages, but if you want to get technical, labeling
              them as such is not quite accurate, because they are only
              concerned with presenting information. They are not used to
              program any logic. JavaScript, which you will be learning in the
              next section, is a programming language because it’s used to make
              webpages do things. Yet, there is quite a lot you can do with just
              HTML and CSS, and you will definitely need them both. The
              following lessons focus on giving you the tools you need to be
              successful once you get to the JavaScript content as you continue
              through our curriculum!
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold pb-3 pt-3" id="assignment">Assignment</h2>
            <div className="assign-wrapper">
               <p>1. Read <a href="https://brytdesigns.com/html-css-javascript-whats-the-difference">HTML vs CSS vs JavaScript</a>. It’s a quick overview of the relationship between HTML, CSS, and JavaScript.</p>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold pb-3 pt-3" id="knowledge-check">Knowledge Check</h2>
            <p>This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.</p>
            <ul className="pl-3">
                <li><a href="https://brytdesigns.com/html-css-javascript-whats-the-difference#What_is_HTML">What do HTML and CSS stand for?</a></li>
                <li><a href="#content">Between HTML and CSS, which would you use for putting paragraphs of text on a webpage?</a></li>
                <li><a href="#content">Between HTML and CSS, which would you use for changing the font and background color of a button?</a></li>
                <li><a href="https://brytdesigns.com/html-css-javascript-whats-the-difference">What is the difference between HTML, CSS and JavaScript?</a></li>
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
                <li><a href="#html/css">HTML and CSS</a></li>
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
           <NavLink to="/react/lesson2">
            <p>Next Lesson</p> 
           </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Lesson1;
