import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useContext} from "react"

import { AuthContext } from "../context/auth.context"

function Navbar() {

  const navigate = useNavigate()

  const { isUserActive, user, authenticateUser } = useContext(AuthContext)

  const handleLogout = () => {
    // destruir el token
    localStorage.removeItem("authToken")
    // authenticar al usuario
    authenticateUser()
    // redireccionar
    navigate("/")

  }

  if (isUserActive === true) {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/todos">Ver los To-Dos</Link>
        <button onClick={handleLogout}>Logout</button>
        <p>usuario: {user.email}</p>
      </div>
    )
  } else {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/signup">Registro</Link>
        <Link to="/login">Acceder</Link>
      </div>
    )
  }
}

export default Navbar