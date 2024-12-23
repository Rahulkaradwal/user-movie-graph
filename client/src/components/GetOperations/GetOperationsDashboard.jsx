import MovieList from "./Movie/MovieList";
import Search from "./Search/Search";
import UserList from "./User/UserList";

function GetOperationsDashboard() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 full ">
      {/* Movie List Section */}
      <div className="border rounded-md flex flex-col">
        <h2 className="text-lg font-semibold border-b p-2 text-center">
          Movie List
        </h2>
        <MovieList />
      </div>

      {/* User Section */}
      <div className="border rounded-md flex flex-col">
        <h2 className="text-lg font-semibold border-b p-2 text-center">
          User List
        </h2>
        <UserList />
      </div>

      {/* Find By ID Section */}
      <Search />
    </div>
  );
}

export default GetOperationsDashboard;
