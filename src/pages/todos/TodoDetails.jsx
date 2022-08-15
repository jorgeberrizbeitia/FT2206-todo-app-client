import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

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
      const response = await axios.get(`http://localhost:5005/api/todos/${id}`)
      console.log(response.data)
      setSingleTodo(response.data)
      setIsFetching(false)
    } catch (error) {
      navigate("/error")
    }

  }

  if (isFetching === true) {
    return <h3>... is Loading</h3>
  }

  return (
    <div>
      
      <h5>Detalles del To-Do</h5>

      <p>Titulo: {singleTodo.title}</p>
      <p>Descripción: {singleTodo.description}</p>
      <p>Es Urgente: {singleTodo.isUrgent === true ? "SIIIII" : "Nah"}</p>

    </div>
  )
}

export default TodoDetails