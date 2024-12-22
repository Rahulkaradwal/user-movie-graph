import React from "react";
import SelectInput from "../ui/SelectInput";
import Input from "../ui/Input";
import Button from "../ui/Button";

function UpdateMovie() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <div className="border border-gray-300 h-full p-4 flex rounded-md justify-center items-center flex-col gap-4 bg-gray-50">
      <h2 className="text-lg font-semibold text-gray-800">
        Update Movie Details
      </h2>
      <form className="w-full max-w-md space-y-4">
        {/* Movie Name (Dropdown) */}

        <SelectInput label="Select Movie" options={options} />

        {/* Movie Name */}
        <Input label="Movie Name" type="text" placeholder="Update movie name" />

        {/* Year of Release */}
        <Input
          label="Year of Release"
          type="number"
          placeholder="Update release year"
        />

        {/* In Theaters */}
        <div className="flex justify-between gap-2">
          <label className="text-gray-700 font-medium">In Theaters</label>
          <div className="flex gap-4 cursor-pointer">
            <label className="flex items-center gap-2 cursor-pointer text-gray-700">
              <input
                type="radio"
                name="inTheaters"
                value="yes"
                className="accent-slate-500 cursor-pointer"
              />
              Yes
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-gray-700">
              <input
                type="radio"
                name="inTheaters"
                value="no"
                className="accent-slate-500 cursor-pointer"
              />
              No
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <Button text="Update Movie" />
      </form>
    </div>
  );
}

export default UpdateMovie;
