import React from "react";
import { gql, useMutation } from "@apollo/client";
import { GET_MOVIES } from "./MovieList";

const DELETE_MOVIE = gql`
  mutation DeleteMovie($deleteMovieId: ID!) {
    deleteMovie(id: $deleteMovieId) {
      id
    }
  }
`;

function MovieItem({ movie }) {
  const [deleteMovie] = useMutation(DELETE_MOVIE, {
    refetchQueries: [{ query: GET_MOVIES }],
    awaitRefetchQueries: true,
  });

  const handleDelete = () => {
    deleteMovie({
      variables: {
        deleteMovieId: movie.id,
      },
    });
  };
  return (
    <div
      key={movie.id}
      className=" bg-slate-200 relative shadow-md w-full h-fit p-4 mb-2 rounded-md"
    >
      <div className="flex justify-between">
        <h2 className="font-bold ">{movie.name}</h2>
        <span className="text-[10px]">{movie.id}</span>
      </div>
      <div className="flex justify-between">
        <p> Year: {movie.yearOfPublication}</p>
        <p>In Theaters: {movie.isInTheaters ? "Yes" : "No"}</p>
        <button
          onClick={handleDelete}
          className=" text-[8px] px-2 py-1 bg-slate-400 duration-200 hover:bg-slate-500 cursor-pointer text-white rounded-md w-fit flex justify-center items-center"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default MovieItem;
