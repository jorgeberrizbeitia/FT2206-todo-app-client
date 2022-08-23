import axios from "axios";

// services es una forma organizada de tener las llamadas al backend
const service = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`
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

export default service