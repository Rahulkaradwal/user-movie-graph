import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

function AddMovie() {
  return (
    <div className="border border-gray-300 h-full p-4 flex rounded-md justify-center items-center flex-col gap-4 bg-gray-50">
      <h2 className="text-lg font-semibold text-gray-800">Add a New Movie</h2>
      <form className="w-full max-w-md space-y-4">
        {/* Movie Name */}
        <Input label="Movie Name" type="text" placeholder="Enter movie name" />

        {/* Year of Release */}
        <Input
          label="Year of Release"
          type="number"
          placeholder="Enter release year"
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
                className=" accent-slate-500 cursor-pointer"
              />
              Yes
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-gray-700">
              <input
                type="radio"
                name="inTheaters"
                value="no"
                className=" accent-slate-500 cursor-pointer "
              />
              No
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <Button text="Add Movie" />
      </form>
    </div>
  );
}

export default AddMovie;
