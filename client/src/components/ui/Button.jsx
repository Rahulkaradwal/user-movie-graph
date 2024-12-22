import React from "react";

function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="bg-slate-500 text-white rounded-md px-6 py-2 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
    >
      {text}
    </button>
  );
}

export default Button;
