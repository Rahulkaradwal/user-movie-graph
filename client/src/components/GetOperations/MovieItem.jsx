import React from "react";

function MovieItem({ movie }) {
  return (
    <div className=" bg-slate-200 overflow-y-auto w-44 h-32 text-center p-4 rounded-md">
      <div key={movie.id}>
        <h2 className="font-bold ">{movie.name}</h2>
        <p> Year: {movie.yearOfPublication}</p>
        <p>In Theaters: {movie.isInTheaters ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default MovieItem;
