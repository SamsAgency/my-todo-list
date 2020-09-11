import React from "react";

const Forms = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  status,
  setStatus,
}) => {
  //input handler

  const textInputHandler = (e) => {
    setInputText(e.target.value);
  };

    // submit handler
  const todoSubmitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 999999,
      },
    ]);
    setInputText("");
  };

//   status handler
  const statusHandler = (e) => {
      setStatus(e.target.value)
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={inputText}
          className="todo-input"
          onChange={textInputHandler}
        />

        <button
          className="todo-button"
          type="submit"
          onClick={todoSubmitHandler}
        >
          <i className="fas fa-plus-square"></i>
        </button>

        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Forms;
