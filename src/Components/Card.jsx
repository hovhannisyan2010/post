import React from 'react'

function Card({ title, img }) {
  return (
    <div className='card'>
      <img src={img} className='img' />
      <h3>{title}</h3>
    </div>
  )
}

export default Card