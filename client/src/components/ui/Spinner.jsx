import React from "react";

function Spinner() {
  return (
    <div>
      <div class="flex flex-row gap-2 mt-4 justify-center">
        <div class="w-4 h-4 rounded-full bg-slate-700 animate-bounce [animation-delay:.7s]"></div>
        <div class="w-4 h-4 rounded-full bg-slate-700 animate-bounce [animation-delay:.3s]"></div>
        <div class="w-4 h-4 rounded-full bg-slate-700 animate-bounce [animation-delay:.7s]"></div>
      </div>
    </div>
  );
}

export default Spinner;
