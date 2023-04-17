import React from 'react'
import '../styles.css'
import { useNavigate } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';
import reacto from '../img/react.png'
import Nod from '../img/node.png'
import ux from '../img/ui-ux.png';
import djan from '../img/django.png';
import lara from '../img/lara.png';
import { useInView } from 'react-intersection-observer';

const Cards = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const navigate = useNavigate();
  return (
    <div className='main-holder' id='stacks'>
      <div className='card-holder'>
        <div className='cards'>
            <div className='image'>
              <img src={reacto} alt='each-stack-icon' className='my-ima' />
            </div>
            <div className='content'>
               <h2 className='text-xl font-semibold'>React Js</h2>
               <p>React js is a JavaScript library for building user interfaces.</p>
               <div className='enrol' onClick={() => navigate('/react')}> 
                  <p>Enrol</p>
                  <span><BsArrowRightShort className='text-2xl w-10' /></span>
                </div>
            </div>
          </div>

                  <div className='cards'>
                    <div className='image'>
                      <img src={Nod} alt='each-stack-icon' className='my-ima' />
                    </div>
                    <div className='content'>
                      <h2 className='text-xl font-semibold'>Node Js</h2>
                      <p>Node.js is a JavaScript runtime for building server-side applications.</p>
                      <div className='enrol' onClick={() => navigate('/node')}> 
                        <p>Enrol</p>
                        <span><BsArrowRightShort className='text-2xl w-10' /></span>
                      </div>
                    </div>
                  </div>

                  <div className='cards'>
                    <div className='image'>
                      <img src={ux} alt='each-stack-icon' className='my-ima' />
                    </div>
                    <div className='content'>
                      <h2 className='text-xl font-semibold'>UI/UX</h2>
                      <p>UI/UX refers to the user interface and user experience design of a website or application.</p>
                      <div className='enrol' onClick={() => navigate('/ui')}> 
                        <p>Enrol</p>
                        <span><BsArrowRightShort className='text-2xl w-10' /></span>
                      </div>
                    </div>
                  </div>

                <div className={inView ? "slide slide__zoom" : "slide"} ref={ref}>
                <div className='cards'>
                    <div className='image'>
                      <img src={djan} alt='each-stack-icon' className='my-ima' />
                    </div>
                    <div className='content'>
                      <h2 className='text-xl font-semibold'>Django</h2>
                      <p>Django is a Python web framework for building web applications</p>
                      <div className='enrol' onClick={() => navigate('/django')}> 
                        <p>Enrol</p>
                        <span><BsArrowRightShort className='text-2xl w-10' /></span>
                      </div>
                    </div>
                  </div>
                </div>

            <div className={inView ? "slide slide__zoom" : "slide"} ref={ref}>              
            <div className='cards'>
                    <div className='image'>
                      <img src={lara} alt='each-stack-icon' className='my-ima' />
                    </div>
                    <div className='content'>
                      <h2 className='text-xl font-semibold'>Laravel</h2>
                      <p>Laravel is a PHP web framework for building web applications</p>
                      <div className='enrol' onClick={() => navigate('/laravel')}> 
                        <p>Enrol</p>
                        <span><BsArrowRightShort className='text-2xl w-10' /></span>
                      </div>
                    </div>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Cards
