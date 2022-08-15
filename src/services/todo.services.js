import axios from "axios";

// services es una forma organizada de tener las llamadas al backend
const service = axios.create({
  baseURL: "http://localhost:5005/api"
})

const getTodosService = () => {
  return service.get("/todos")
}

const getTodoDetailsService = (id) => {
  return service.get(`/todos/${id}`)
}

const addTodoService = (newTodo) => {
  return service.post("/todos", newTodo)
}

const deleteTodoService = (id) => {
  return service.delete(`/todos/${id}`)
}

const updateTodoService = (id, updateTodo) => {
  return service.patch(`/todos/${id}`, updateTodo)
}

export {
  getTodosService,
  getTodoDetailsService,
  addTodoService,
  deleteTodoService,
  updateTodoService
}