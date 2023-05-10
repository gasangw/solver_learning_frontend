import React, { useState } from "react";
import "./lesson.css"
import { ImNext } from 'react-icons/im';
import { BsBookHalf } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';
import { NavLink } from "react-router-dom";

const Lesson4 = () => {
  const [complete, setComplete] = useState(false)
  const Completed = () => {
    setComplete(!complete)
  }
  return (
    <div className="m-10">
      <h1 className="pl-20 title-lesson">Links And Images</h1>
      <div className="lesson-container">
        <article className="lesson-content pl-20 pr-10 m-3">
          <div>
            <h2 className="pb-3 pt-1" id="introduction">Introduction</h2>
            <p>
             Links are one of the key features of HTML.They allow us to link to other HTML pages on the web.In fact, this is why it’ s called the web.

             In this lesson, we will learn how to create links and add some visual flair to our websites by embedding images.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold pb-3 pt-3" id="lesson-overview">Lesson Overview</h2>
            <p>
              This section contains a general overview of topics that you will
              learn in this lesson like How to create links to pages on other websites on the internet
              How to create links to other pages on your own websites
              The difference between absolute and relative links
              How to display an image on a webpage using HTML.
            </p>
            <ul>
              <li>
                To get some practice using links and images throughout this lesson we need an HTML project to work with.
              </li>
            </ul>
          </div>
          <div id="content">
            <h2 className="text-lg font-bold pb-3 pt-3" id="html/css">Anchor Elements</h2>
            <p>
                          To create a link in HTML, we use the anchor element.An anchor element is defined by wrapping the text or another HTML element we want to be a link with an  tag!
                          You may have noticed that clicking this link doesn’ t do anything.This is because an anchor tag on its own won’ t know where we want to link to.We have to tell it a destination to go to.We do this by using an HTML attribute.

                              An HTML attribute gives additional information to an HTML element and always goes in the element’ s opening tag.An attribute is usually made up of two parts: a name, and a value;
                          however, not all attributes require a value.In our
                          case, we need to add a href(hyperlink reference) attribute to the opening anchor tag.The value of the href attribute is the destination we want our link to go to.

                          Add the following href attribute to the anchor element we created previously and
                          try clicking it again, don’ t forget to refresh the browser so the new changes can be applied.
            </p>
            <p className="pb-3 pt-3">
                          It’ s worth noting you can use anchor tags to link to any
                          kind of resource on the internet, not just
                          other HTML documents.You can link to videos, pdf files,
                          images, and so on, but for the most part, you will be linking to other HTML documents
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold pb-3 pt-3" id="assignment">Assignment</h2>
            <div className="assign-wrapper">
               <p>1. Read <a href="https://www.theodinproject.com/lessons/foundations-links-and-images#anchor-elements">HTML vs CSS vs JavaScript</a>. It’s a quick overview of the relationship between HTML, CSS, and JavaScript.</p>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold pb-3 pt-3" id="knowledge-check">Knowledge Check</h2>
            <p>This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.</p>
            <ul className="pl-3">
                < li > <a href = "https://www.theodinproject.com/lessons/foundations-links-and-images#anchor-elements" > What is element is used to create link ? </a></li >
                <li><a href="#content">What is attribute?</a></li>
                <li><a href="#content">what is element used to display image?</a></li>
                <li><a href="#content">What do you do to access a parent directory in file part?</a></li>
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
                <li><a href="#html/css">Links and image</a></li>
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

export default Lesson4;
