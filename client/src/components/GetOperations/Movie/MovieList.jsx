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
    <div className="overflow-y-scroll h-screen p-2">
      {data.movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
