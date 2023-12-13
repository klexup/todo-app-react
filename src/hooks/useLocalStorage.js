import { useState } from "react";

export default function useLocalStorage(storageName) {
  const [todos, setTodos] = useState(() => {
    const array =
      localStorage.getItem(storageName) === null
        ? []
        : JSON.parse(localStorage.getItem(storageName));
    return array;
  });

  const handleSubmitNewTask = (newTodo) => {
    setTodos((prev) => {
      const updatedArray = [...prev, newTodo];
      localStorage.setItem(storageName, JSON.stringify(updatedArray));
      return updatedArray;
    });
  };

  const handleUpdateTask = (updatedTodo) => {
    setTodos((prev) => {
      const prevCopy = prev.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo,
      );

      localStorage.setItem(storageName, JSON.stringify(prevCopy));
      return prevCopy;
    });
  };

  return [todos, setTodos, handleSubmitNewTask, handleUpdateTask];
}
