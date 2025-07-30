import React from "react";

const MyBtn = ({
  name,
  width = "w-auto",
}: {
  name: string;
  width?: string;
}) => {
  return (
    <button
      className={`text-base font-normal px-7 py-3 bg-primary text-white rounded-lg ${width}`}
    >
      {name}
    </button>
  );
};

export default MyBtn;
