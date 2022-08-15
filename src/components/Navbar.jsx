import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      
      <Link to="/">Home</Link>
      <Link to="/todos">Ver los To-Dos</Link>

    </div>
  )
}

export default Navbar