import React from "react";
import Button from "./Button";
import Input from "./Input";

function SearchField({ name }) {
  return (
    <div className="flex justify-between items-center gap-4 p-4   rounded-md ">
      <Input type="text" name={name} placeholder={`Enter ${name}`} />
      <Button text="Find" />
    </div>
  );
}

export default SearchField;
