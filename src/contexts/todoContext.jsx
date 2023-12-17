import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TodoContext = createContext();

export default function TodoProvider({ children }) {
  const storageName = "todos";
  const [todos, setTodos] = useLocalStorage(storageName);

  const [searchInput, setSearchInput] = useState("");
  const [tagFilter, setTagFilter] = useState(null);
  const [filter, setFilter] = useState("default");

  const allCurrentTags = [...new Set(todos.flatMap((value) => value.tags))];

  const todosCopy = todos
    .filter((value) => value.taskName.includes(searchInput))
    .filter((value) => {
      if (tagFilter === null) return value;
      return value.tags.includes(tagFilter);
    });

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
      return [...prev, newTodo];
    });
  };

  const handleUpdateTask = (updatedTodo) => {
    setTodos((prev) => {
      return prev.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo,
      );
    });
  };

  const toggleCompleted = (id) => {
    setTodos(() => {
      return todos.map((value) => {
        if (value.id === id) {
          return { ...value, completed: !value.completed };
        }
        return value;
      });
    });
  };

  const handleDeleteTask = (id) => {
    setTodos(() => {
      return todos.filter((value) => value.id !== id);
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
