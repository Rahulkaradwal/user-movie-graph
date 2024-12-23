import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { gql, useMutation } from "@apollo/client";
import { GET_MOVIES } from "../GetOperations/Movie/MovieList";

const ADD_MOVIE = gql`
  mutation AddMovie(
    $name: String!
    $yearOfPublication: Int!
    $isInTheaters: Boolean!
  ) {
    addMovie(
      name: $name
      yearOfPublication: $yearOfPublication
      isInTheaters: $isInTheaters
    ) {
      id
    }
  }
`;

function AddMovie() {
  const [movieName, setMovieName] = useState("");
  const [yearOfRelease, setYearOfRelease] = useState("");
  const [inTheaters, setInTheaters] = useState(true);

  const [addMovie, { loading, error }] = useMutation(ADD_MOVIE, {
    refetchQueries: [{ query: GET_MOVIES }],
    awaitRefetchQueries: true,
  });

  const handleSubmit = () => {
    addMovie({
      variables: {
        name: movieName,
        yearOfPublication: parseInt(yearOfRelease),
        isInTheaters: inTheaters,
      },
    });
    setMovieName("");
    setYearOfRelease("");
    setInTheaters(true);
  };

  return (
    <div className="border border-gray-300 h-full p-4 flex rounded-md justify-center items-center flex-col gap-4 bg-gray-50">
      <h2 className="text-lg font-semibold text-gray-800">
        {error ? error.message : "Add a New Movie"}
      </h2>
      <form className="w-full max-w-md space-y-4">
        {/* Movie Name */}
        <Input
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
          value={movieName}
          label="Movie Name"
          type="text"
          placeholder="Enter movie name"
        />

        {/* Year of Release */}
        <Input
          onChange={(e) => {
            setYearOfRelease(e.target.value);
          }}
          label="Year of Release"
          type="number"
          value={yearOfRelease}
          placeholder="Enter release year"
        />

        {/* In Theaters */}
        <div className="flex justify-between gap-2">
          <label className="text-gray-700 font-medium">In Theaters</label>
          <div className="flex gap-4 cursor-pointer">
            <label className="flex items-center gap-2 cursor-pointer text-gray-700">
              <input
                type="radio"
                onChange={() => setInTheaters(true)}
                name="inTheaters"
                value="yes"
                className=" accent-slate-500 cursor-pointer"
              />
              Yes
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-gray-700">
              <input
                onChange={() => setInTheaters(false)}
                type="radio"
                name="inTheaters"
                value="no"
                className=" accent-slate-500 cursor-pointer "
              />
              No
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="button"
          onClick={handleSubmit}
          text={loading ? "Adding..." : "Add Movie"}
        />
      </form>
    </div>
  );
}

export default AddMovie;
