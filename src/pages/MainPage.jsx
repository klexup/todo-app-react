import { useRef, useState } from "react";
import SortDropdown from "../components/SortDropdown";
import CategoryDropdown from "../components/CategoryDropdown";
import { Link } from "react-router-dom";

export default function MainPage() {
  const [searchFocused, setSearchFocused] = useState(false);
  const searchRef = useRef();
  return (
    <>
      <div
        className={`mb-5 flex h-[60px] w-[398px] cursor-text items-center justify-between rounded-full bg-WH ${
          searchFocused ? "border-1 border-BLK" : "border-1 border-STROKE"
        }`}
        onClick={() => {
          searchRef.current.focus();
        }}
      >
        <div className="flex justify-start">
          <svg
            className="ml-3"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_646_2136)">
              <path
                d="M20.71 19.29L17.31 15.9C18.407 14.5025 19.0022 12.7767 19 11C19 9.41775 18.5308 7.87103 17.6518 6.55544C16.7727 5.23985 15.5233 4.21447 14.0615 3.60897C12.5997 3.00347 10.9911 2.84504 9.43928 3.15372C7.88743 3.4624 6.46197 4.22433 5.34315 5.34315C4.22433 6.46197 3.4624 7.88743 3.15372 9.43928C2.84504 10.9911 3.00347 12.5997 3.60897 14.0615C4.21447 15.5233 5.23985 16.7727 6.55544 17.6518C7.87103 18.5308 9.41775 19 11 19C12.7767 19.0022 14.5025 18.407 15.9 17.31L19.29 20.71C19.383 20.8037 19.4936 20.8781 19.6154 20.9289C19.7373 20.9797 19.868 21.0058 20 21.0058C20.132 21.0058 20.2627 20.9797 20.3846 20.9289C20.5064 20.8781 20.617 20.8037 20.71 20.71C20.8037 20.617 20.8781 20.5064 20.9289 20.3846C20.9797 20.2627 21.0058 20.132 21.0058 20C21.0058 19.868 20.9797 19.7373 20.9289 19.6154C20.8781 19.4936 20.8037 19.383 20.71 19.29ZM5 11C5 9.81332 5.3519 8.65328 6.01119 7.66658C6.67047 6.67989 7.60755 5.91085 8.7039 5.45673C9.80026 5.0026 11.0067 4.88378 12.1705 5.11529C13.3344 5.3468 14.4035 5.91825 15.2426 6.75736C16.0818 7.59648 16.6532 8.66558 16.8847 9.82946C17.1162 10.9933 16.9974 12.1997 16.5433 13.2961C16.0892 14.3925 15.3201 15.3295 14.3334 15.9888C13.3467 16.6481 12.1867 17 11 17C9.4087 17 7.88258 16.3679 6.75736 15.2426C5.63214 14.1174 5 12.5913 5 11Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_646_2136">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <input
            ref={searchRef}
            type="text"
            name="search"
            id="search"
            className="ml-2 cursor-text outline-none"
            placeholder="Search..."
            onFocus={() => {
              setSearchFocused((prev) => !prev);
            }}
            onBlur={() => {
              setSearchFocused((prev) => !prev);
            }}
          />
        </div>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-3 cursor-pointer"
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
      <div className="mb-5 flex w-[398px] justify-between">
        <SortDropdown />
        <CategoryDropdown />
      </div>

      <Link
        className="flex h-[60px] w-[192px] cursor-pointer items-center justify-center rounded-full bg-PRIMARY text-PRIMARYBUTTON text-WH"
        to={"newTodo"}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M12 5V19"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 12H19"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Add New Task
      </Link>
    </>
  );
}
