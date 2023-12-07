import { useState } from "react";

export default function SelectComplexityLevel() {
  const [complexityValue, setComplexityValue] = useState(null);

  return (
    <>
      <h2 className="text-H2 font-medium">Select Complexity Level</h2>
      <div className="flex justify-between pb-1 pt-1">
        <ComplexityLevelItem
          complexityLevel={1}
          complexityValue={complexityValue}
          setComplexityValue={setComplexityValue}
        />
        <ComplexityLevelItem
          complexityLevel={2}
          complexityValue={complexityValue}
          setComplexityValue={setComplexityValue}
        />
        <ComplexityLevelItem
          complexityLevel={3}
          complexityValue={complexityValue}
          setComplexityValue={setComplexityValue}
        />
        <ComplexityLevelItem
          complexityLevel={4}
          complexityValue={complexityValue}
          setComplexityValue={setComplexityValue}
        />
        <ComplexityLevelItem
          complexityLevel={5}
          complexityValue={complexityValue}
          setComplexityValue={setComplexityValue}
        />
        <ComplexityLevelItem
          complexityLevel={6}
          complexityValue={complexityValue}
          setComplexityValue={setComplexityValue}
        />
        <ComplexityLevelItem
          complexityLevel={7}
          complexityValue={complexityValue}
          setComplexityValue={setComplexityValue}
        />
        <ComplexityLevelItem
          complexityLevel={8}
          complexityValue={complexityValue}
          setComplexityValue={setComplexityValue}
        />
        <ComplexityLevelItem
          complexityLevel={9}
          complexityValue={complexityValue}
          setComplexityValue={setComplexityValue}
        />
        <ComplexityLevelItem
          complexityLevel={10}
          complexityValue={complexityValue}
          setComplexityValue={setComplexityValue}
        />
      </div>
    </>
  );
}

function ComplexityLevelItem({
  complexityLevel,
  complexityValue,
  setComplexityValue,
}) {
  const handleClick = () => {
    setComplexityValue(complexityLevel);
  };
  return (
    <>
      <div
        className={`flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full transition-all hover:scale-110 ${
          complexityValue === complexityLevel
            ? "bg-PRIMARY"
            : "bg-BLUE10PERCENT"
        } p-1 text-RADIONUMBER`}
        onClick={() => handleClick()}
      >
        {complexityLevel}
      </div>
    </>
  );
}
