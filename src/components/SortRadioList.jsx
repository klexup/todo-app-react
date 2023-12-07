import React, { useState } from "react";

export default function SortRadioList() {
  const [sortValue, setSortValue] = useState("default");

  return (
    <div
      className="text-RADIOTEXT flex flex-col gap-2 p-3"
      onClick={(e) => e.stopPropagation()}
    >
      <RadioListItem
        label="Default"
        value="default"
        sortValue={sortValue}
        setSortValue={setSortValue}
      />
      <RadioListItem
        label="Ascending Date"
        value="ascending-date"
        sortValue={sortValue}
        setSortValue={setSortValue}
      />
      <RadioListItem
        label="Descending Date"
        value="descending-date"
        sortValue={sortValue}
        setSortValue={setSortValue}
      />
      <RadioListItem
        label="Ascending Complexity"
        value="ascending-complexity"
        sortValue={sortValue}
        setSortValue={setSortValue}
      />
      <RadioListItem
        label="Descending Complexity"
        value="descending-complexity"
        sortValue={sortValue}
        setSortValue={setSortValue}
      />
      <RadioListItem
        label="Ascending Priority"
        value="ascending-priority"
        sortValue={sortValue}
        setSortValue={setSortValue}
      />
      <RadioListItem
        label="Descending Priority"
        value="descending-priority"
        sortValue={sortValue}
        setSortValue={setSortValue}
      />
    </div>
  );
}

function RadioListItem({ label, value, sortValue, setSortValue }) {
  const handleChange = () => {
    setSortValue(value);
  };

  return (
    <div
      className="flex justify-between border-b-1 border-STROKE p-1"
      onClick={handleChange}
    >
      {label}
      <input
        type="radio"
        name="sort"
        value={value}
        checked={sortValue === value}
        onChange={handleChange}
      />
    </div>
  );
}
