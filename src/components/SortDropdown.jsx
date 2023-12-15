import { useState } from "react";
import SortRadioList from "./SortRadioList";

export default function SortDropdown({ setFilter, filter }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className="flex h-[44px] w-[184px] cursor-pointer items-center justify-center rounded-full bg-WH"
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      {isActive ? (
        <>
          <div className="relative">
            <svg
              width="104"
              height="24"
              viewBox="0 0 104 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M98 15L92 9L86 15"
                stroke="#25282B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute left-1/2 top-10 z-10 w-[184px] -translate-x-1/2 rounded-xl bg-WH shadow-md">
              <SortRadioList setFilter={setFilter} filter={filter} />
            </div>
          </div>
        </>
      ) : (
        <>
          <svg
            width="104"
            height="24"
            viewBox="0 0 104 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M86 9L92 15L98 9"
              stroke="#25282B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.80114 9.36364C6.74148 8.85985 6.49953 8.46875 6.07528 8.19034C5.65104 7.91193 5.13068 7.77273 4.5142 7.77273C4.06345 7.77273 3.66903 7.84564 3.33097 7.99148C2.99621 8.13731 2.73438 8.33783 2.54545 8.59304C2.35985 8.84825 2.26705 9.13826 2.26705 9.46307C2.26705 9.73485 2.33168 9.96851 2.46094 10.1641C2.59351 10.3563 2.76255 10.517 2.96804 10.6463C3.17353 10.7723 3.38897 10.8767 3.61435 10.9595C3.83973 11.0391 4.04688 11.1037 4.2358 11.1534L5.26989 11.4318C5.53504 11.5014 5.83002 11.5975 6.15483 11.7202C6.48295 11.8428 6.79616 12.0102 7.09446 12.2223C7.39607 12.4311 7.64465 12.6996 7.8402 13.0277C8.03575 13.3558 8.13352 13.7585 8.13352 14.2358C8.13352 14.786 7.98935 15.2831 7.70099 15.7273C7.41596 16.1714 6.99834 16.5244 6.44815 16.7862C5.90128 17.0481 5.23674 17.179 4.45455 17.179C3.72538 17.179 3.09399 17.0613 2.56037 16.826C2.03007 16.5907 1.61245 16.2625 1.30753 15.8416C1.00592 15.4207 0.835227 14.9318 0.795455 14.375H2.06818C2.10133 14.7595 2.23059 15.0777 2.45597 15.3295C2.68466 15.5781 2.97301 15.7637 3.32102 15.8864C3.67235 16.0057 4.05019 16.0653 4.45455 16.0653C4.92519 16.0653 5.34777 15.9891 5.7223 15.8366C6.09683 15.6809 6.39347 15.4654 6.61222 15.1903C6.83097 14.9119 6.94034 14.5871 6.94034 14.2159C6.94034 13.8778 6.84588 13.6027 6.65696 13.3906C6.46804 13.1785 6.21946 13.0062 5.91122 12.8736C5.60298 12.741 5.26989 12.625 4.91193 12.5256L3.65909 12.1676C2.86364 11.9389 2.2339 11.6125 1.76989 11.1882C1.30587 10.764 1.07386 10.2088 1.07386 9.52273C1.07386 8.95265 1.22798 8.45549 1.53622 8.03125C1.84777 7.60369 2.26539 7.27225 2.78906 7.03693C3.31605 6.7983 3.90436 6.67898 4.55398 6.67898C5.21023 6.67898 5.79356 6.79664 6.30398 7.03196C6.81439 7.26397 7.21875 7.58215 7.51705 7.98651C7.81866 8.39086 7.97775 8.8499 7.99432 9.36364H6.80114ZM13.1039 17.1591C12.4145 17.1591 11.8096 16.995 11.2892 16.6669C10.7722 16.3388 10.3678 15.8797 10.0762 15.2898C9.78782 14.6998 9.64364 14.0104 9.64364 13.2216C9.64364 12.4261 9.78782 11.7318 10.0762 11.1385C10.3678 10.5452 10.7722 10.0845 11.2892 9.75639C11.8096 9.42827 12.4145 9.2642 13.1039 9.2642C13.7933 9.2642 14.3965 9.42827 14.9135 9.75639C15.4339 10.0845 15.8382 10.5452 16.1266 11.1385C16.4183 11.7318 16.5641 12.4261 16.5641 13.2216C16.5641 14.0104 16.4183 14.6998 16.1266 15.2898C15.8382 15.8797 15.4339 16.3388 14.9135 16.6669C14.3965 16.995 13.7933 17.1591 13.1039 17.1591ZM13.1039 16.1051C13.6275 16.1051 14.0584 15.9709 14.3965 15.7024C14.7346 15.4339 14.9848 15.081 15.1472 14.6435C15.3096 14.206 15.3908 13.732 15.3908 13.2216C15.3908 12.7112 15.3096 12.2356 15.1472 11.7947C14.9848 11.3539 14.7346 10.9976 14.3965 10.7259C14.0584 10.4541 13.6275 10.3182 13.1039 10.3182C12.5802 10.3182 12.1493 10.4541 11.8113 10.7259C11.4732 10.9976 11.223 11.3539 11.0605 11.7947C10.8981 12.2356 10.8169 12.7112 10.8169 13.2216C10.8169 13.732 10.8981 14.206 11.0605 14.6435C11.223 15.081 11.4732 15.4339 11.8113 15.7024C12.1493 15.9709 12.5802 16.1051 13.1039 16.1051ZM18.3551 17V9.36364H19.4886V10.517H19.5682C19.7074 10.1392 19.9593 9.83262 20.3239 9.5973C20.6884 9.36198 21.0994 9.24432 21.5568 9.24432C21.643 9.24432 21.7507 9.24597 21.88 9.24929C22.0092 9.2526 22.107 9.25758 22.1733 9.2642V10.4574C22.1335 10.4474 22.0424 10.4325 21.8999 10.4126C21.7607 10.3894 21.6132 10.3778 21.4574 10.3778C21.0862 10.3778 20.7547 10.4557 20.4631 10.6115C20.1747 10.764 19.946 10.9761 19.777 11.2479C19.6113 11.5163 19.5284 11.8229 19.5284 12.1676V17H18.3551ZM27.3636 9.36364V10.358H23.4062V9.36364H27.3636ZM24.5597 7.53409H25.733V14.8125C25.733 15.1439 25.781 15.3925 25.8771 15.5582C25.9766 15.7206 26.1025 15.83 26.255 15.8864C26.4107 15.9394 26.5748 15.9659 26.7472 15.9659C26.8764 15.9659 26.9825 15.9593 27.0653 15.946C27.1482 15.9295 27.2145 15.9162 27.2642 15.9062L27.5028 16.9602C27.4233 16.9901 27.3123 17.0199 27.1697 17.0497C27.0272 17.0829 26.8466 17.0994 26.6278 17.0994C26.2964 17.0994 25.9716 17.0282 25.6534 16.8857C25.3385 16.7431 25.0767 16.526 24.8679 16.2344C24.6624 15.9427 24.5597 15.5748 24.5597 15.1307V7.53409Z"
              fill="#090003"
            />
          </svg>
        </>
      )}
    </div>
  );
}
