import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filtered }) {
    console.log(filtered)
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtered.map((todo) => (
          <Todo
            text={todo.text}
            id={todo.id}
            todos={todos}
            todo = {todo}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
