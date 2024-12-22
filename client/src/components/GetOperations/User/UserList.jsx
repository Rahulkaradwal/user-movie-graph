// import React from "react";
// import { useQuery, gql } from "@apollo/client";
// import UserItem from "./UserItem";

// const GET_USERS = gql`
//   query Users {
//     users {
//       id
//       username
//       age
//       nationality
//       friends {
//         username
//       }
//       favoriteMovies {
//         name
//       }
//     }
//   }
// `;

// function UserList() {
//   const { loading, error, data } = useQuery(GET_USERS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div className="overflow-y-scroll h-screen p-2">
//       {data.users.map((user) => (
//         <UserItem key={user.id} user={user} />
//       ))}
//     </div>
//   );
// }

// export default UserList;

import React from "react";
import { useQuery, gql } from "@apollo/client";
import UserItem from "./UserItem";

const GET_USERS = gql`
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
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="overflow-y-scroll h-screen p-2 ">
      {data.users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
