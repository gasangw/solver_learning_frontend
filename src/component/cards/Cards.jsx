import React from 'react'
import '../styles.css'
import CardDetails from './cardDetails'

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
