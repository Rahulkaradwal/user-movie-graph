import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import FindByID from "../../ui/FindByID";
import SearchField from "../../ui/SearchField";
import MovieItem from "../Movie/MovieItem";
import UserItem from "../User/UserItem";

function Search() {
  const [filter, setFilter] = useState("movie");
  const [id, setId] = useState("");

  const handleIdChange = (value) => {
    setId(value);
  };

  const GET_MOVIE = gql`
    query Movie($name: String!) {
      movie(name: $name) {
        name
        yearOfPublication
        isInTheaters
      }
    }
  `;
  const GET_USER = gql`
    query User($userId: ID!) {
      user(id: $userId) {
        id
        username
        age
        nationality
        friends {
          username
        }
        favoriteMovies {
          name
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(
    filter === "movie" ? GET_MOVIE : GET_USER,
    {
      variables: filter === "movie" ? { name: id } : { userId: id },
      skip: !id, // Skip query execution if no ID is provided
    }
  );

  return (
    <div className="border rounded-md flex flex-col">
      <h2 className="text-lg font-semibold border-b p-2">Find By ID</h2>
      <div className="p-4 m-2 border bg-slate-200 shadow-md rounded-md">
        <FindByID setFilter={setFilter} />
        {filter === "movie" && (
          <SearchField handleIdChange={handleIdChange} name="Movie Name" />
        )}
        {filter === "user" && (
          <SearchField handleIdChange={handleIdChange} name="User ID" />
        )}
      </div>
      <div className="mt-4 p-2">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && filter === "movie" && <MovieItem movie={data.movie} />}
        {data && filter === "user" && <UserItem user={data.user} />}
      </div>
    </div>
  );
}

export default Search;
