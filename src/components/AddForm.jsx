import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTodoService } from "../services/todo.services";
import { uploadService } from "../services/upload.services";

function AddForm(props) {

  const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  // estado para guardar el URL que vendrá de cloudinary
  const [imageUrl, setImageUrl] = useState("")

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleIsUrgentChange = (event) => setIsUrgent(event.target.checked);

  const handleSubmit = async () => {
    // esta funcion podria ser un onSubmit del formulario o un onClick del boton

    const newTodo = {
      title: title,
      description: description,
      isUrgent: isUrgent,
      image: imageUrl
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

  const handleImgUpload = async (event) => {

    console.log(event.target.files[0])
    // enviar la imagen a cloudinary (via service/via backend)
    // recibir el url y subirlo al estado

    const form = new FormData()
    form.append("image", event.target.files[0])
    // "image" tiene que ser el mismo nombre que el uploader.single del backend

    try {
      
      const response = await uploadService(form)
      setImageUrl(response.data.imageUrl)

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

      <div>
        <h5>Añade una imagen:</h5>
        <input type="file" onChange={handleImgUpload}/>
        <img src={imageUrl} alt="imagen" width={50}/>
      </div>

    </div>
  );
}

export default AddForm;
