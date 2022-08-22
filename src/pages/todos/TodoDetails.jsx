import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { deleteTodoService, getTodoDetailsService } from "../../services/todo.services"

function TodoDetails() {

  const navigate = useNavigate()
  const { id } = useParams()

  const [ singleTodo, setSingleTodo ] = useState(null)
  const [ isFetching, setIsFetching ] = useState(true)

  useEffect(() => {
    getSingleTodo()
  }, [])

  const getSingleTodo = async () => {

    try {
      // const response = await axios.get(`http://localhost:5005/api/todos/${id}`)
      const response = await getTodoDetailsService(id)
      console.log(response.data)
      setSingleTodo(response.data)
      setIsFetching(false)
    } catch (error) {
      navigate("/error")
    }
  }

  const handleDelete = async () => {

    try {
      await deleteTodoService(id)
      navigate("/todos")
    } catch (error) {
      navigate("/error")
    }

  }

  if (isFetching === true) {
    return <h3>... is Loading</h3>
  }

  const { title, description, isUrgent, _id, image} = singleTodo

  return (
    <div>
      
      <h5>Detalles del To-Do</h5>

      <img src={image} alt="image" width={100}/>

      <p>Titulo: {title}</p>
      <p>Descripción: {description}</p>
      <p>Es Urgente: {isUrgent === true ? "SIIIII" : "Nah"}</p>

      <button onClick={handleDelete}>Borrar</button>
      <Link to={`/todos/${_id}/edit`}><button>Editar</button></Link>

    </div>
  )
}

export default TodoDetails