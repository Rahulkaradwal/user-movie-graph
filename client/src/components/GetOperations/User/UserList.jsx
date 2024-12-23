import React, { Suspense } from "react";
import { gql, useSuspenseQuery } from "@apollo/client";
import UserItem from "./UserItem";
import Spinner from "../../ui/Spinner";

export const GET_USERS = gql`
  query Users {
    users {
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

function UserList() {
  const { loading, error, data } = useSuspenseQuery(GET_USERS);

  if (loading) return <Spinner />;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="overflow-y-scroll h-[100vh] p-2 ">
      <Suspense fallback={<Spinner />}>
        {data.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </Suspense>
    </div>
  );
}

export default UserList;
