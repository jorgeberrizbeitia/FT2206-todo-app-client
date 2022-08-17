// este componente va a envolver rutas de frontend privadas

import {useContext} from "react"
import {AuthContext} from "../context/auth.context"
// import {useNavigate} from "react-router-dom"
import {Navigate} from "react-router-dom"

function IsPrivate(props) {

  const {isUserActive} = useContext(AuthContext)
  // const navigate = useNavigate()

  
  if (isUserActive === true) {
    // si el usuario está logeado, renderiza props.children
    return props.children
  } else {
    // si el usuario no está logeado, reenvia a "/login"
    // navigate("/login")
    // no podemos usar useNavigate en la renderizacion inicial de un componente
    return <Navigate to="/login"/>
  }

}

export default IsPrivate