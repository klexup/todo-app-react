import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TodoContext = createContext();

export default function TodoProvider({ children }) {
  const storageName = "todos";
  const [todos, setTodos, setLocalStorage] = useLocalStorage(storageName);

  const [searchInput, setSearchInput] = useState("");
  const [tagFilter, setTagFilter] = useState(null);
  const [filter, setFilter] = useState("default");

  let allCurrentTags = [];
  todos.forEach((element) => {
    if (element.tags.length > 0) {
      const tagArray = element.tags;
      for (let value of tagArray) {
        if (!allCurrentTags.includes(value)) {
          allCurrentTags.push(value);
        }
      }
    }
  });

  let todosCopy = [...todos];
  if (searchInput !== "") {
    todosCopy = todosCopy.filter((value) =>
      value.taskName.includes(searchInput),
    );
  }
  if (tagFilter !== null) {
    todosCopy = todosCopy.filter((value) => value.tags.includes(tagFilter));
  }
  function filterTodos() {
    switch (filter) {
      case "default":
        return todosCopy;
      case "ascending-priority":
        return todosCopy.sort((a, b) => {
          const valueA = a.priorityLevel;
          const valueB = b.priorityLevel;
          if (valueA < valueB) {
            return -1;
          } else if (valueA > valueB) {
            return 1;
          } else {
            return 0;
          }
        });
      case "descending-priority":
        return todosCopy.sort((a, b) => {
          const valueA = a.priorityLevel;
          const valueB = b.priorityLevel;
          if (valueA < valueB) {
            return 1;
          } else if (valueA > valueB) {
            return -1;
          } else {
            return 0;
          }
        });
      case "ascending-complexity":
        return todosCopy.sort((a, b) => {
          const valueA = a.complexityLevel;
          const valueB = b.complexityLevel;
          if (valueA < valueB) {
            return -1;
          } else if (valueA > valueB) {
            return 1;
          } else {
            return 0;
          }
        });
      case "descending-complexity":
        return todosCopy.sort((a, b) => {
          const valueA = a.complexityLevel;
          const valueB = b.complexityLevel;
          if (valueA < valueB) {
            return 1;
          } else if (valueA > valueB) {
            return -1;
          } else {
            return 0;
          }
        });
      case "ascending-date":
        return todosCopy.sort(
          (a, b) => new Date(a.dueDate) - new Date(b.dueDate),
        );
      case "descending-date":
        return todosCopy.sort((a, b) => {
          return new Date(b.dueDate) - new Date(a.dueDate);
        });

      default:
        return todos;
    }
  }

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
      setLocalStorage(storageName, prevCopy);
      return prevCopy;
    });
  };

  const toggleCompleted = (id) => {
    setTodos(() => {
      const newArr = todos.map((value) => {
        if (value.id === id) {
          return { ...value, completed: !value.completed };
        }
        return value;
      });
      setLocalStorage(storageName, newArr);
      return newArr;
    });
  };

  const handleDeleteTask = (id) => {
    setTodos(() => {
      const updatedArr = todos.filter((value) => value.id !== id);
      setLocalStorage(storageName, updatedArr);
      return updatedArr;
    });
  };

  return (
    <>
      <TodoContext.Provider
        value={{
          todos,
          setTodos,
          handleSubmitNewTask,
          handleUpdateTask,
          toggleCompleted,
          handleDeleteTask,
          filter,
          setFilter,
          tagFilter,
          setTagFilter,
          searchInput,
          setSearchInput,
          allCurrentTags,
          filterTodos,
        }}
      >
        {children}
      </TodoContext.Provider>
      ;
    </>
  );
}
