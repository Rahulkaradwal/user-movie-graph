import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function SearchField({ name, handleIdChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    handleIdChange(inputValue);
  };

  return (
    <div className="flex justify-between items-center gap-4 p-4 rounded-md">
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        name={name}
        placeholder={`Enter ${name}`}
        className="flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-slate-200"
      />
      <Button
        text="Find"
        onClick={handleButtonClick}
        className="bg-slate-500 text-white hover:bg-slate-600 px-4 py-2 rounded-md focus:ring focus:ring-slate-300"
      />
    </div>
  );
}

export default SearchField;
