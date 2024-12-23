import React, { Suspense } from "react";
import { gql, useSuspenseQuery } from "@apollo/client";
import MovieItem from "./MovieItem";
import Spinner from "../../ui/Spinner";

export const GET_MOVIES = gql`
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
  const { loading, error, data } = useSuspenseQuery(GET_MOVIES);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="overflow-y-scroll h-screen p-2">
      <Suspense fallback={<Spinner />}>
        {data.movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Suspense>
    </div>
  );
}

export default MovieList;
