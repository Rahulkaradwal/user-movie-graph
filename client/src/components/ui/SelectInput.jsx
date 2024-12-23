import React from "react";

function SelectInput({ label, options, onChange, loading }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-700 font-medium">{label}</label>
      {loading ? (
        <select className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white text-gray-800">
          <option>Loading...</option>
        </select>
      ) : (
        <select
          onChange={onChange}
          className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white text-gray-800"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default SelectInput;
