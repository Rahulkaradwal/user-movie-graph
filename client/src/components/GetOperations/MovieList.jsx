import React from "react";
import { useQuery, gql } from "@apollo/client";
import MovieItem from "./MovieItem";

const GET_MOVIES = gql`
  query getMovies {
    movies {
      id
      name
      yearOfPublication
      isInTheaters
    }
  }
`;

function MovieList() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className=" h-full ">
      <div className=" h-1/3 overflow-scroll ">
        <h2 className="text-center text-bold text-2xl">Favorite Movies</h2>
        <div className="  grid grid-cols-3  p-2    justify-center gap-2 mb-4 "></div>
      </div>
      <div className=" h-2/3  overflow-scroll pb-4 ">
        <h2 className="text-center text-bold text-2xl">Movie List</h2>
        <div className="grid grid-cols-3  p-2    justify-center gap-2 mb-4 ">
          {data.movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
