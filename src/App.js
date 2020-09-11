import React, { useState, useEffect } from "react";
import "./App.css";
import Forms from "./Components/Forms";
import TodoList from "./Components/TodoList";

function App() {

  // the states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  // the useEffect
  useEffect(() => {
    filterHandler()
  }, [todos, status])

  
  // functions
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFiltered(todos.filter(todo => todo.completed === true))
        break
      case "uncompleted":
        setFiltered(todos.filter(todo => todo.completed === false))
        break
      default:
        setFiltered(todos)
        break
    }
  }

  return (
    <div className="App">
      <header>
        <h1> Jose's Todo List </h1>
      </header>
      <Forms
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        status = {status}
        setStatus = {setStatus}
      />
      <TodoList filtered = {filtered} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
