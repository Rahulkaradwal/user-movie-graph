import React from "react";
import Input from "../ui/Input";
import SelectInput from "../ui/SelectInput";
import Button from "../ui/Button";
import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query Users {
    users {
      id
      username
    }
  }
`;

function UpdateUser() {
  const { loading, error, data } = useQuery(GET_USERS);

  const options = data?.users.map((user) => ({
    value: user.id,
    label: user.username,
  }));

  return (
    <div className="border border-gray-300 h-full p-4 flex rounded-md justify-center items-center flex-col gap-4 bg-gray-50">
      <h2 className="text-lg font-semibold text-gray-800">Update User</h2>
      <form className="w-full max-w-md grid grid-cols-2 gap-4">
        {/* User Name */}
        <div className="flex flex-col gap-1 col-span-1">
          <SelectInput
            label="Select the User"
            options={options}
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white text-gray-800"
          />
        </div>
        <div className="flex flex-col gap-1 col-span-1">
          <Input
            label="Name of the User"
            type="text"
            placeholder="Enter Username"
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white text-gray-800"
          />
        </div>

        {/* User Age */}
        <div className="flex flex-col gap-1 col-span-1">
          <Input
            label="Enter the Age"
            type="number"
            placeholder="Enter your age"
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white text-gray-800"
          />
        </div>

        {/* Nationality */}
        <div className="flex flex-col gap-1 col-span-1">
          <Input
            label="Enter the Nationality"
            type="text"
            placeholder="Enter your nationality"
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white text-gray-800"
          />
        </div>

        {/* Add a Friend */}
        <div className="flex flex-col gap-1 col-span-1">
          {error ? (
            <p className="text-red-500">{error.message}</p>
          ) : (
            <SelectInput
              label="Add a Friend"
              loading={loading}
              options={options}
              className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white text-gray-800"
            />
          )}
        </div>

        {/* Submit Button */}
        <div className="col-span-2 flex justify-center">
          <Button
            text="Update User"
            className="bg-slate-500 text-white rounded-md px-6 py-2 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
