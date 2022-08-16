import { createContext, useEffect, useState } from "react";
import { verifyService } from "../services/auth.services";

const AuthContext = createContext()

function AuthWrapper(props) {

  // todos los estados que determinar el usuario activo
  const [ isUserActive, setIsUserActive ] = useState(false)
  const [ user, setUser ] = useState(null)
  const [ isFetching, setIsFetching ] = useState(true)

  useEffect(() => {
    authenticateUser()
  }, [])

  const authenticateUser = async () => {
    // funcion que en cualquier momento necesario, va a verificar si el token es valido

    try {
      const response = await verifyService()
      // desde aqui, el usuario está autenticado
      console.log(response.data)
      setIsUserActive(true)
      setUser(response.data)
      setIsFetching(false)
    } catch (error) {
      // si es catch, el token no es valido o no hay token
      console.log(error)
      setIsUserActive(false)
      setUser(null)
      setIsFetching(false)
    }
  }

  const passedContext = {
    isUserActive,
    user,
    authenticateUser
  }

  if (isFetching === true) {
    return <h3>... Is Validating User</h3>
  }

  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthWrapper
}