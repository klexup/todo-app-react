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

  return [todos, setTodos, setLocalStorage];
}
