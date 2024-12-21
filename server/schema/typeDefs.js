const { gql } = require("@apollo/server");

const typeDefs = `#graphql

type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }



type user {
    id: ID!
    username: String!
    age: Int!
    nationality: String!
    friends: [user]
    favoriteMovies: [Movie]

}

  type Query {
    users: [user!]!
    user(id: ID!): user!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }
`;

module.exports = typeDefs;
