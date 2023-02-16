import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/shelf">Shelf</NavLink>
        <NavLink to="/shelf/add">Add Book</NavLink>
      </nav>
    </div>
  )
}

export default NavBar
