import axios from "axios";

// services es una forma organizada de tener las llamadas al backend
const service = axios.create({
  baseURL: "http://localhost:5005/api"
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
