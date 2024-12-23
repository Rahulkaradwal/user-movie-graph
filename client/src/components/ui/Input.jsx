import React from "react";

function Input({ label, type, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-700 font-medium">{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-slate-500 bg-white text-gray-800"
      />
    </div>
  );
}

export default Input;
