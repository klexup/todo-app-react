import React from "react";

export default function SortCategoryList() {
  return (
    <>
      <div
        className="flex flex-col gap-2 p-3 text-RADIOTEXT"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center">
          No Categories Found
        </div>
      </div>
    </>
  );
}
