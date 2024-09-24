import React from 'react'

function CardPost({ body, title }) {
    return (
        <div className='post'>
            <div className='title'>
                <h2>{title}</h2>
            </div>
            <div className='body'>
                <h3>{body}</h3>
            </div>
        </div>
    )
}

export default CardPost