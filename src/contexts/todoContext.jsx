import { createContext, useState } from "react";

export const TodoContext = createContext();

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const handleSubmitNewTask = (newTodo) => {
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  return (
    <>
      <TodoContext.Provider value={{ todos, setTodos, handleSubmitNewTask }}>
        {children}
      </TodoContext.Provider>
      ;
    </>
  );
}
