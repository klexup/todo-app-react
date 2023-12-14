import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TodoContext = createContext();

export default function TodoProvider({ children }) {
  const [
    todos,
    setTodos,
    handleSubmitNewTask,
    handleUpdateTask,
    toggleCompleted,
  ] = useLocalStorage("todos");

  return (
    <>
      <TodoContext.Provider
        value={{
          todos,
          setTodos,
          handleSubmitNewTask,
          handleUpdateTask,
          toggleCompleted,
        }}
      >
        {children}
      </TodoContext.Provider>
      ;
    </>
  );
}
