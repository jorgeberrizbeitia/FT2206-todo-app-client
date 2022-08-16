import axios from "axios";

// services es una forma organizada de tener las llamadas al backend
const service = axios.create({
  baseURL: "http://localhost:5005/api"
})

// interceptar la llamada y agregar el token
service.interceptors.request.use((config) => {

  // buscar el token
  const authToken = localStorage.getItem("authToken")

  // agrega el token al request
  if (authToken) {
    config.headers = {
      authorization: `Bearer ${authToken}`
    }
  }

  return config
})

const signupService = (newUser) => {
  return service.post("/auth/signup", newUser)
}

const loginService = (user) => {
  return service.post("/auth/login", user)
}

const verifyService = () => {
  // enviar el token
  return service.get("/auth/verify")
}

export {
  signupService,
  loginService,
  verifyService
}
