import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {getTodoDetailsService, updateTodoService} from "../../services/todo.services.js"

function TodoEdit() {
  const navigate = useNavigate();
  const {id} = useParams()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleIsUrgentChange = (event) => setIsUrgent(event.target.checked);

  useEffect(() => {
    getTodoDetails()
  }, []);

  const getTodoDetails = async () => {
    try {
      const response = await getTodoDetailsService(id)
      console.log(response.data)
      setTitle(response.data.title)
      setDescription(response.data.description)
      setIsUrgent(response.data.isUrgent)
    } catch (error) {
      navigate("/error")
    }
  };

  const handleEdit = async () => {

    const todoObj = {
      title: title,
      description: description,
      isUrgent: isUrgent
    }

    try {
      
      await updateTodoService(id, todoObj)
      navigate("/todos")

    } catch (error) {
      navigate("/error")
    }

  }

  return (
    <div>
      <h4>Formulario de editar</h4>

      <label htmlFor="title">Titulo</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleTitleChange}
      />
      <br />
      <label htmlFor="description">Descripcion</label>
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <br />
      <label htmlFor="isUrgent">Es Urgente:</label>
      <input
        type="checkbox"
        name="isUrgent"
        checked={isUrgent}
        onChange={handleIsUrgentChange}
      />
      <br />
      <button onClick={handleEdit}>Editar</button>
    </div>
  );
}

export default TodoEdit;
