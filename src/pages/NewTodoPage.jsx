import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function NewTodoPage() {
  const [taskNameInputFocused, setTaskNameInputFocused] = useState(false);
  const taskNameRef = useRef();
  return (
    <>
      <div className="w-[398px]">
        <div className="relative mb-10 flex w-full items-center justify-center">
          <Link to={"/"} className="absolute left-0 top-1/2 -translate-y-1/2">
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
          <h1 className="text-H1 text-center font-medium">Add New Task</h1>
        </div>
        <div
          className={`bg-WH mb-5 flex h-[60px] w-[398px] cursor-text items-center justify-between rounded-full ${
            taskNameInputFocused
              ? "border-BLK border-1"
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
      </div>
    </>
  );
}
