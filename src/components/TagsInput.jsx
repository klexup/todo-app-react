import React, { useRef, useState } from "react";

export default function TagsInput() {
  const [tagsInputFocused, setTagsInputFocused] = useState(false);
  const tagsRef = useRef();
  return (
    <>
      <div>
        <h2 className="text-H2 font-medium">Add Tags Seperated By ,</h2>
        <div
          className={`mb-5 flex h-[60px] w-[398px] cursor-text items-center justify-between rounded-full bg-WH ${
            tagsInputFocused ? "border-1 border-BLK" : "border-1 border-STROKE"
          }`}
          onClick={() => {
            tagsRef.current.focus();
          }}
        >
          <input
            ref={tagsRef}
            type="text"
            name="search"
            id="search"
            className="ml-4 cursor-text outline-none"
            placeholder="Career, Job, Fun"
            onFocus={() => {
              setTagsInputFocused((prev) => !prev);
            }}
            onBlur={() => {
              setTagsInputFocused((prev) => !prev);
            }}
          />
        </div>
      </div>
    </>
  );
}
