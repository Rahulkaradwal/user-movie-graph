import React from "react";
const buttonStyle =
  "rounded-md hover:bg-slate-600 bg-slate-500 text-white px-4 py-2 w-full  transition duration-300 ease-in-out";

function ViewButtons({ handleView }) {
  return (
    <div className="flex w-full  justify-stretch gap-2 p-2 ">
      <button className={buttonStyle} onClick={() => handleView("getData")}>
        Get Data
      </button>
      <button className={buttonStyle} onClick={() => handleView("addData")}>
        Add Data
      </button>
    </div>
  );
}

export default ViewButtons;
