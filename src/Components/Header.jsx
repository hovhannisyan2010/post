import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <Link className='link' to="/">Photos</Link>
        <Link className='link' to="/post">Post</Link>
    </header>
  )
}

export default Header