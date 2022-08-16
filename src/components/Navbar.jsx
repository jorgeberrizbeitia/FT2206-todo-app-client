import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      
      <Link to="/">Home</Link>
      <Link to="/todos">Ver los To-Dos</Link>
      <Link to="/signup">Registro</Link>
      <Link to="/login">Acceder</Link>

    </div>
  )
}

export default Navbar