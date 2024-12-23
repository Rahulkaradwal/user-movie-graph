import React from "react";

function MovieItem({ movie }) {
  return (
    <div
      key={movie.id}
      className=" bg-slate-200 shadow-md w-full h-fit p-4 mb-2 rounded-md"
    >
      <div className="flex justify-between">
        <h2 className="font-bold ">{movie.name}</h2>
        <span className="text-[10px]">{movie.id}</span>
      </div>
      <div className="flex justify-between">
        <p> Year: {movie.yearOfPublication}</p>
        <p>In Theaters: {movie.isInTheaters ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default MovieItem;
