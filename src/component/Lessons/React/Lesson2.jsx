import React, { useState } from "react";
import "./lesson.css"
import { ImNext } from 'react-icons/im';
import { BsBookHalf } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';
import { NavLink } from "react-router-dom";

const Lesson2 = () => {
  const [complete, setComplete] = useState(false)
  const Completed = () => {
    setComplete(!complete)
  }
  return (
    <div className="m-10">
      <h1 className="pl-20 title-lesson">Elements And Tags</h1>
      <div className="lesson-container">
        <article className="lesson-content pl-20 pr-10 m-3">
          <div>
            <h2 className="pb-3 pt-1" id="introduction">Introduction</h2>
            <p>
              HTML (HyperText Markup Language) defines the structure and content of webpages.
              We use HTML elements to create all of the
              paragraphs, headings, lists, images, and links that make up a typical webpage.
              In this lesson,we will explore how HTML elements work.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold pb-3 pt-3" id="lesson-overview">Lesson Overview</h2>
            <p>
              This section contains a general overview of topics that you
              will learn in this lesson.

            </p>
            <ul>
              <li>
                Get a basic overview of HTML, CSS and how they work together.
              </li>
            </ul>
          </div>
          <div id="content">
            <h2 className="text-lg font-bold pb-3 pt-3" id="html/css">Elements and Tags</h2>
            <p>
              Almost all elements on an HTML page are just pieces of content wrapped in opening and closing HTML tags!
              Opening tags tell the browser this is the start of an HTML element.They are comprised of a keyword enclosed in angle brackets
              Closing tags tell the browser where an element ends.They are almost the same as opening tags;
              the only difference is that they have a forward slash before the keyword.For example, a closing paragraph tag looks like this:
              You can think of elements as containers
              for content.The opening and closing tags tell the browser what content the
              element contains.The browser can then use that information to determine how
              it should interpret and format the content
            </p>
            <p className="pb-3 pt-3">
              There are some HTML elements that do not have a closing tag.
              These elements often look like this: but some can also be used without the closing forward slash such as . These are known as self-closing tags or empty elements because they don’t wrap any content. We will encounter a few of these in later lessons, but for the most part, elements will have both opening and closing tags.

              HTML has a vast list of predefined tags that you can use to create all kinds
              of different elements. It is important to use the correct tags for content. Using the correct tags can have a big impact on two aspects of your sites: how they are ranked in search engines; and how accessible they are to users who rely on assistive technologies, like screen readers, to use the internet.

              Using the correct elements for content is called semantic HTML.
              We will explore this in much more depth later on in the curriculum.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold pb-3 pt-3" id="assignment">Assignment</h2>
            <div className="assign-wrapper">
               <p>1. Read <a href="Watch Kevin Powell’s Introduction to HTML Video">Element vs tags in HTML</a>. It’s a quick overview of the relationship between Element, and tags.</p>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold pb-3 pt-3" id="knowledge-check">Knowledge Check</h2>
            <p>This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.</p>
            <ul className="pl-3">
                <li><a href="https://brytdesigns.com/html-css-javascript-whats-the-difference#What_is_HTML">What do Elemet tags and CSS stand for?</a></li>
                <li><a href="#content">Between tags and element, which would you use for putting paragraphs of text on a webpage?</a></li>
                <li><a href="#content">Between element and tage, which would you use for changing the font and background color of a button?</a></li>
                <li><a href="https://brytdesigns.com/html-css-javascript-whats-the-difference">What is the difference between HTML tag</a></li>
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
                <li><a href="#html/css">ELEMENT and TAGS</a></li>
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
           <NavLink to="/react/lesson3">
            <p>Next Lesson</p> 
           </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Lesson2;

