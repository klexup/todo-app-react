import { useState } from "react";

export default function SelectPriorityLevel() {
  const [priorityValue, setPriorityValue] = useState(null);
  return (
    <>
      <h2 className="text-H2 font-medium">Select Priority Level</h2>
      <div className="flex justify-between pb-1 pt-1">
        <PriorityLevelItem
          priorityLevel={1}
          priorityValue={priorityValue}
          setPriorityValue={setPriorityValue}
        />
        <PriorityLevelItem
          priorityLevel={2}
          priorityValue={priorityValue}
          setPriorityValue={setPriorityValue}
        />
        <PriorityLevelItem
          priorityLevel={3}
          priorityValue={priorityValue}
          setPriorityValue={setPriorityValue}
        />
        <PriorityLevelItem
          priorityLevel={4}
          priorityValue={priorityValue}
          setPriorityValue={setPriorityValue}
        />
        <PriorityLevelItem
          priorityLevel={5}
          priorityValue={priorityValue}
          setPriorityValue={setPriorityValue}
        />
        <PriorityLevelItem
          priorityLevel={6}
          priorityValue={priorityValue}
          setPriorityValue={setPriorityValue}
        />
        <PriorityLevelItem
          priorityLevel={7}
          priorityValue={priorityValue}
          setPriorityValue={setPriorityValue}
        />
        <PriorityLevelItem
          priorityLevel={8}
          priorityValue={priorityValue}
          setPriorityValue={setPriorityValue}
        />
        <PriorityLevelItem
          priorityLevel={9}
          priorityValue={priorityValue}
          setPriorityValue={setPriorityValue}
        />
        <PriorityLevelItem
          priorityLevel={10}
          priorityValue={priorityValue}
          setPriorityValue={setPriorityValue}
        />
      </div>
    </>
  );
}

function PriorityLevelItem({ priorityLevel, priorityValue, setPriorityValue }) {
  const handleClick = () => {
    setPriorityValue(priorityLevel);
  };
  return (
    <>
      <div
        className={`flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full transition-all hover:scale-110 ${
          priorityValue === priorityLevel ? "bg-PRIMARY" : "bg-BLUE10PERCENT"
        } p-1 text-RADIONUMBER`}
        onClick={() => handleClick()}
      >
        {priorityLevel}
      </div>
    </>
  );
}
