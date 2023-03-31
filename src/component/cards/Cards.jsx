import React from 'react'
import '../styles.css'
import CardDetails from './cardDetails'
import { BsArrowRightShort } from 'react-icons/bs';

const Cards = () => {
  return (
    <div className='main-holder'>
      <div className='card-holder'>
        {
            CardDetails.map((card)=> {
                return (
                    <div className='cards'>
                    <div className='image'>
                      <img src={card.stack} alt='each-stack-icon' className='my-ima' />
                    </div>
                    <div className='content'>
                      <h2 className='text-xl font-semibold'>{card.title}</h2>
                      <p>{card.description}</p>
                      <span className=''><BsArrowRightShort className='text-2xl text-white ml-auto border-2 border-green-500 bg-green-400 rounded-lg w-10' /></span>
                    </div>
                  </div> 
                )
            })
        }
      </div>
    </div>
  )
}

export default Cards
