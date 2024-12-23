import React, { useState } from "react";
import SelectInput from "../ui/SelectInput";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useQuery, gql, useMutation } from "@apollo/client";
import { GET_MOVIES } from "../GetOperations/Movie/MovieList";
import Spinner from "../ui/Spinner";

const UPDATE_MOVIE = gql`
  mutation UpdateMovie(
    $updateMovieId: ID!
    $name: String
    $yearOfPublication: Int
    $isInTheaters: Boolean
  ) {
    updateMovie(
      id: $updateMovieId
      name: $name
      yearOfPublication: $yearOfPublication
      isInTheaters: $isInTheaters
    ) {
      id
    }
  }
`;

function UpdateMovie() {
  const { loading, error, data } = useQuery(GET_MOVIES);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [movieName, setMovieName] = useState("");
  const [yearOfRelease, setYearOfRelease] = useState("");
  const [inTheaters, setInTheaters] = useState(true);

  const [updateMovie, { loading: loadingUpdate, error: errorUpdate }] =
    useMutation(UPDATE_MOVIE);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  const options = data?.movies.map((movie) => ({
    value: movie.id,
    label: movie.name,
  }));

  const handleUpdate = () => {
    updateMovie({
      variables: {
        updateMovieId: selectedMovie,
        name: movieName,
        yearOfPublication: parseInt(yearOfRelease),
        isInTheaters: inTheaters,
      },
      refetchQueries: [{ query: GET_MOVIES }],
      awaitRefetchQueries: true,
    });
    setSelectedMovie("");
    setMovieName("");
    setYearOfRelease("");
    setInTheaters(true);
  };

  return (
    <div className="border border-gray-300 h-full p-4 flex rounded-md justify-center items-center flex-col gap-4 bg-gray-50">
      <h2 className="text-lg font-semibold text-gray-800">
        {errorUpdate ? errorUpdate.message : "Update a Movie"}{" "}
      </h2>
      <form className="w-full max-w-md space-y-4">
        {/* Movie Name (Dropdown) */}
        <SelectInput
          onChange={(e) => setSelectedMovie(e.target.value)}
          label="Select Movie"
          loading={loading}
          value={selectedMovie}
          options={options}
        />

        {/* Movie Name */}
        <Input
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          label="Movie Name"
          type="text"
          placeholder="Update movie name"
        />

        {/* Year of Release */}
        <Input
          value={yearOfRelease}
          onChange={(e) => setYearOfRelease(e.target.value)}
          label="Year of Release"
          type="number"
          placeholder="Update release year"
        />

        {/* In Theaters */}
        <div className="flex justify-between gap-2">
          <label htmlFor="inTheaters" className="text-gray-700 font-medium">
            In Theaters
          </label>
          <div className="flex gap-4 cursor-pointer">
            <label className="flex items-center gap-2 cursor-pointer text-gray-700">
              <input
                onChange={() => setInTheaters(true)}
                type="radio"
                name="inTheaters"
                value="yes"
                checked={inTheaters === true}
                className="accent-slate-500 cursor-pointer"
              />
              Yes
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-gray-700">
              <input
                onChange={() => setInTheaters(false)}
                type="radio"
                name="inTheaters"
                value="no"
                checked={inTheaters === false}
                className="accent-slate-500 cursor-pointer"
              />
              No
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleUpdate}
          type="button"
          disabled={loadingUpdate || !selectedMovie}
          text={loadingUpdate ? "Updating..." : "Update Movie"}
        />
      </form>
    </div>
  );
}

export default UpdateMovie;
