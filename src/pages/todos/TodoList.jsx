import axios from 'axios'
import {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AddForm from "../../components/AddForm"

function TodoList() {

  const navigate = useNavigate()

  const [ allTodos, setAllTodos ] = useState([])
  const [ isFetching, setIsFetching ] = useState(true)

  useEffect(() => {
    getTodos()
  }, [])

  const getTodos = async () => {

    try {
      const response = await axios.get("http://localhost:5005/api/todos")
      console.log(response.data)
      setAllTodos(response.data)
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
      
      <AddForm getTodos={getTodos}/>

      <h3>Lista de To-Dos</h3>

      {allTodos.map((eachTodo) => {
        return <p key={eachTodo._id}>
          <Link to={`/todos/${eachTodo._id}/details`}>{eachTodo.title}</Link>
        </p>
      })}

    </div>
  )
}

export default TodoList