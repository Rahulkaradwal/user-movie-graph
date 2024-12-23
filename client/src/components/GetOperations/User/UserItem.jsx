import React from "react";

function UserItem({ user }) {
  const { id, username, age, nationality, friends, favoriteMovies } = user;

  return (
    <div
      key={id}
      className="bg-slate-200 shadow-md w-full  p-4 mb-2 rounded-lg"
    >
      {/* Username */}
      <div className="flex justify-between">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{username}</h2>
        <span className="text-[10px]">{id}</span>
      </div>

      {/* Age and Nationality */}
      <div className="flex justify-between text-gray-600 mb-2">
        <p>
          <span className="font-medium">Age:</span> {age}
        </p>
        <p>
          <span className="font-medium">Nationality:</span> {nationality}
        </p>
      </div>

      {/* Friends and Favorite Movies */}
      <div className="text-gray-600">
        {friends.length > 0 && (
          <p>
            <span className="font-medium">Friends:</span>{" "}
            {friends.map((f) => f.username).join(", ")}
          </p>
        )}
        {favoriteMovies.length > 0 && (
          <p className="mt-1">
            <span className="font-medium">Favorite Movies:</span>{" "}
            {favoriteMovies.map((f) => f.name).join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}

export default UserItem;
