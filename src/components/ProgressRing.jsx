import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressRing({ percentage }) {
  return (
    <>
      <div className="absolute bottom-10 right-2 h-[44px] w-[44px]">
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
    </>
  );
}
