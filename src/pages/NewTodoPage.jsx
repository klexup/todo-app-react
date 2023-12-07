import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SelectPriorityLevel from "../components/SelectPriorityLevel";
import SelectComplexityLevel from "../components/SelectComplexityLevel";
import SelectDueDate from "../components/SelectDueDate";
import SelectTime from "../components/SelectTime";
import SubtaskInput from "../components/SubtaskInput";
import TagsInput from "../components/TagsInput";

export default function NewTodoPage() {
  const [taskNameInputFocused, setTaskNameInputFocused] = useState(false);
  const taskNameRef = useRef();
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
        <h2 className="text-H2 font-medium">Task Name</h2>
        <div
          className={`mb-5 flex h-[60px] w-[398px] cursor-text items-center justify-between rounded-full bg-WH ${
            taskNameInputFocused
              ? "border-1 border-BLK"
              : "border-1 border-STROKE"
          }`}
          onClick={() => {
            taskNameRef.current.focus();
          }}
        >
          <input
            ref={taskNameRef}
            type="text"
            name="search"
            id="search"
            className="ml-4 cursor-text outline-none"
            placeholder="Name of task..."
            onFocus={() => {
              setTaskNameInputFocused((prev) => !prev);
            }}
            onBlur={() => {
              setTaskNameInputFocused((prev) => !prev);
            }}
          />
        </div>

        <SelectPriorityLevel />
        <SelectComplexityLevel />
        <div className="mt-5 flex justify-between">
          <SelectDueDate />
          <SelectTime />
        </div>
        <SubtaskInput />
        <TagsInput />
        <div className="mt-5 flex h-[60px] w-[192px] cursor-pointer items-center justify-center self-center rounded-full bg-PRIMARY text-PRIMARYBUTTON text-WH transition-all hover:scale-110">
          Save Task
        </div>
      </div>
    </>
  );
}
