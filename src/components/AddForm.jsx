import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTodoService } from "../services/todo.services";

function AddForm(props) {

  const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleIsUrgentChange = (event) => setIsUrgent(event.target.checked);

  const handleSubmit = async () => {
    // esta funcion podria ser un onSubmit del formulario o un onClick del boton

    const newTodo = {
      title: title,
      description: description,
      isUrgent: isUrgent
    }

    try {
      
      // await axios.post("http://localhost:5005/api/todos", newTodo)
      await addTodoService(newTodo)
      // ...
      // navigate("/todos")
      props.getTodos()


    } catch (error) {
      navigate("/error")
    }

  }

  return (
    <div>
      <h3>Agrega nuevo To-Do</h3>

      {/* <form> */}
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          name="title"
          onChange={handleTitleChange}
          value={title}
        />
        <br />
        <label htmlFor="description">Descripción</label>
        <input
          type="text"
          name="description"
          onChange={handleDescriptionChange}
          value={description}
        />
        <br />
        <label htmlFor="isUrgent">Es Urgente?:</label>
        <input
          type="checkbox"
          name="isUrgent"
          onChange={handleIsUrgentChange}
          checked={isUrgent}
        />
        <br />
        <button onClick={handleSubmit}>Agregar</button>
      {/* </form> */}
    </div>
  );
}

export default AddForm;
