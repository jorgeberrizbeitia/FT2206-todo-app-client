
import './App.css';

import {Routes, Route} from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import TodoList from "./pages/todos/TodoList"
import TodoDetails from "./pages/todos/TodoDetails"
import TodoEdit from "./pages/todos/TodoEdit"
import Error from "./pages/Error"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>

        <Route path="/" element={ <Home/> }/>
        <Route path="/todos" element={ <TodoList /> }/>
        <Route path="/todos/:id/details" element={ <TodoDetails /> }/>
        <Route path="/todos/:id/edit" element={ <TodoEdit /> }/>

        {/* componentes para error handling */}
        <Route path="/error" element={<Error />}/>
        <Route path="/*" element={<NotFound />}/>

      </Routes>

    </div>
  );
}

export default App;
