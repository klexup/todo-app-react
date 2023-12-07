import React, { useRef, useState } from "react";

export default function SubtaskInput() {
  const [subtaskNameInputFocused, setSubtaskNameInputFocused] = useState(false);
  const subtaskNameRef = useRef();
  return (
    <>
      <div className="mt-5">
        <h2 className="text-H2 font-medium">Add Checklist For Subtasks</h2>
        <div
          className={`mb-5 flex h-[60px] w-[398px] cursor-text items-center justify-between rounded-full bg-WH ${
            subtaskNameInputFocused
              ? "border-1 border-BLK"
              : "border-1 border-STROKE"
          }`}
          onClick={() => {
            subtaskNameRef.current.focus();
          }}
        >
          <input
            ref={subtaskNameRef}
            type="text"
            name="search"
            id="search"
            className="ml-4 cursor-text outline-none"
            placeholder="Add New Subtask..."
            onFocus={() => {
              setSubtaskNameInputFocused((prev) => !prev);
            }}
            onBlur={() => {
              setSubtaskNameInputFocused((prev) => !prev);
            }}
          />
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3 cursor-pointer transition-all hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              // will be button to add subtask
            }}
          >
            <circle cx="18" cy="18" r="18" fill="#0D99FF" fillOpacity="0.1" />
            <path
              d="M11 18H25"
              stroke="#25282B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 11L25 18L18 25"
              stroke="#25282B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
