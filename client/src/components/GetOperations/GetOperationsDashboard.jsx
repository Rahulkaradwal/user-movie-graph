import React, { useState } from "react";
import MovieList from "./Movie/MovieList";
import UserList from "./User/UserList";
import FindByID from "../ui/FindByID";
import SearchField from "../ui/SearchField";

function GetOperationsDashboard() {
  const [filter, setFilter] = useState("movie");

  console.log(filter);

  return (
    <div className="grid grid-cols-3 gap-4 p-4 full ">
      {/* Movie List Section */}
      <div className="border rounded-md flex flex-col">
        <h2 className="text-lg font-semibold border-b p-2">Movie List</h2>
        <MovieList />
      </div>

      {/* User Section */}
      <div className="border rounded-md flex flex-col">
        <h2 className="text-lg font-semibold border-b p-2">All Movies</h2>
        <UserList />
      </div>

      {/* Find By ID Section */}
      <div className="border rounded-md flex flex-col">
        <h2 className="text-lg font-semibold border-b p-2">Find By ID</h2>
        <div className="p-4 border bg-gray-50    shadow-md rounded-md">
          <FindByID setFilter={setFilter} />
          {filter === "movie" ? <SearchField name="Movie ID" /> : null}
          {filter === "user" ? <SearchField name="User ID" /> : null}
        </div>
      </div>
    </div>
  );
}

export default GetOperationsDashboard;
