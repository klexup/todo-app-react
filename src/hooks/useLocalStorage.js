import { useState } from "react";

export default function useLocalStorage(storageName) {
  const [todos, setTodos] = useState(() => {
    const array =
      localStorage.getItem(storageName) === null
        ? []
        : JSON.parse(localStorage.getItem(storageName));
    return array;
  });

  const setLocalStorage = (storageName, newValue) => {
    localStorage.setItem(storageName, JSON.stringify(newValue));
  };

  const handleSubmitNewTask = (newTodo) => {
    setTodos((prev) => {
      const updatedArray = [...prev, newTodo];
      setLocalStorage(storageName, updatedArray);
      return updatedArray;
    });
  };

  const handleUpdateTask = (updatedTodo) => {
    setTodos((prev) => {
      const prevCopy = prev.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo,
      );
      setLocalStorage(storageName, setLocalStorage);
      return prevCopy;
    });
  };

  return [todos, setTodos, handleSubmitNewTask, handleUpdateTask];
}
