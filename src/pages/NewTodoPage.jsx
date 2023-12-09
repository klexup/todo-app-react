import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SelectPriorityLevel from "../components/SelectPriorityLevel";
import SelectComplexityLevel from "../components/SelectComplexityLevel";
import SelectDueDate from "../components/SelectDueDate";
import SelectTime from "../components/SelectTime";
import SubtaskInput from "../components/SubtaskInput";
import TagsInput from "../components/TagsInput";
import { TodoContext } from "../contexts/todoContext";
import TaskInput from "../components/TaskInput";

export default function NewTodoPage() {
  const { setTodos } = useContext(TodoContext);
  const navigate = useNavigate();

  const [currentTodo, setCurrentTodo] = useState({
    id: crypto.randomUUID(),
    taskName: "",
    priorityLevel: 0,
    complexityLevel: 0,
    dueDate: null,
    dueTime: null,
    subTasks: [],
    tags: [],
  });

  const handleSubmitNewTask = () => {
    setTodos((prev) => {
      return [...prev, currentTodo];
    });
  };

  return (
    <>
      <div className="jusi flex w-[398px] flex-col">
        <div className="relative mb-10 flex w-full items-center justify-center">
          <Link
            to={"/"}
            className="absolute left-0 top-1/2 -translate-y-1/2 transition-all hover:scale-110"
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="22" cy="22" r="22" fill="white" />
              <path
                d="M29 22H15"
                stroke="#25282B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 29L15 22L22 15"
                stroke="#25282B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <h1 className="text-center text-H1 font-medium">Add New Task</h1>
        </div>
        <TaskInput {...currentTodo} setCurrentTodo={setCurrentTodo} />
        <SelectPriorityLevel {...currentTodo} setCurrentTodo={setCurrentTodo} />
        <SelectComplexityLevel
          {...currentTodo}
          setCurrentTodo={setCurrentTodo}
        />
        <div className="mt-5 flex justify-between">
          <SelectDueDate {...currentTodo} setCurrentTodo={setCurrentTodo} />
          <SelectTime {...currentTodo} setCurrentTodo={setCurrentTodo} />
        </div>
        <SubtaskInput {...currentTodo} setCurrentTodo={setCurrentTodo} />
        <TagsInput {...currentTodo} setCurrentTodo={setCurrentTodo} />
        <div
          className="mt-5 flex h-[60px] w-[192px] cursor-pointer items-center justify-center self-center rounded-full bg-PRIMARY text-PRIMARYBUTTON text-WH transition-all hover:scale-110"
          onClick={() => {
            handleSubmitNewTask();
            navigate("/");
          }}
        >
          Save Task
        </div>
      </div>
    </>
  );
}
