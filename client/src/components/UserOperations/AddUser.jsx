import React, { useState } from "react";
import Input from "../ui/Input";
import SelectInput from "../ui/SelectInput";
import Button from "../ui/Button";
import { gql, useQuery, useMutation } from "@apollo/client";
import Spinner from "../ui/Spinner";

const GET_USERS = gql`
  query Users {
    users {
      id
      username
    }
  }
`;

const ADD_USER = gql`
  mutation AddUser(
    $username: String!
    $age: Int!
    $nationality: String!
    $favoriteMovies: [ID]
    $friends: [ID]
  ) {
    addUser(
      username: $username
      age: $age
      nationality: $nationality
      favoriteMovies: $favoriteMovies
      friends: $friends
    ) {
      id
      username
      age
      nationality
    }
  }
`;

function AddUser() {
  const { loading, error, data } = useQuery(GET_USERS);
  const options = data?.users.map((user) => ({
    value: user.id,
    label: user.username,
  }));

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [friend, setFriend] = useState();

  const [addUser, { error: errorAddUser, loading: loadingAddUser }] =
    useMutation(ADD_USER, {
      refetchQueries: [GET_USERS],
    });

  const handleSubmit = () => {
    addUser({
      variables: {
        username: name,
        age: parseInt(age),
        nationality,
        favoriteMovies: [],
        friends: [friend],
      },
    });

    setName("");
    setAge("");
    setNationality("");
  };

  if (loadingAddUser) return <Spinner />;
  if (errorAddUser) return <p>Error: {errorAddUser.message}</p>;

  return (
    <div className="border border-gray-300 h-full p-4 flex rounded-md justify-center items-center flex-col gap-4 bg-gray-50">
      <h2 className="text-lg font-semibold text-gray-800">Add a User</h2>
      <form className="w-full max-w-md grid grid-cols-2 gap-4">
        {/* User Name */}
        <div className="flex flex-col gap-1 col-span-1">
          <Input
            onChange={(e) => setName(e.target.value)}
            value={name}
            label="Name of the User"
            type="text"
            placeholder="Enter Username"
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white text-gray-800"
          />
        </div>

        {/* User Age */}
        <div className="flex flex-col gap-1 col-span-1">
          <Input
            onChange={(e) => setAge(e.target.value)}
            value={age}
            label="Enter Your Age"
            type="number"
            placeholder="Enter your age"
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white text-gray-800"
          />
        </div>

        {/* Nationality */}
        <div className="flex flex-col gap-1 col-span-1">
          <Input
            onChange={(e) => setNationality(e.target.value)}
            value={nationality}
            label="Enter Your Nationality"
            type="text"
            placeholder="Enter your nationality"
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white text-gray-800"
          />
        </div>

        {/* Add a Friend */}
        <div className="flex flex-col gap-1 col-span-1">
          {error ? (
            <p className="text-red-500">Error: {error.message}</p>
          ) : (
            <SelectInput
              onChange={(e) => setFriend(e.target.value)}
              loading={loading}
              value={friend}
              label="Add a Friend"
              options={options}
              className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white text-gray-800"
            />
          )}
        </div>

        {/* Submit Button */}
        <div className="col-span-2 flex justify-center">
          <Button
            onClick={handleSubmit}
            type="button"
            text="Add User"
            className="bg-slate-500 text-white rounded-md px-6 py-2 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </form>
    </div>
  );
}

export default AddUser;
