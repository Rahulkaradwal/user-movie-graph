const { gql } = require("@apollo/server");

const typeDefs = `#graphql

type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }



type User {
    id: ID!
    username: String!
    age: Int!
    nationality: String!
    friends: [User]
    favoriteMovies: [Movie]
}



  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!

  }


  type Mutation {
    addUser(username: String!, age: Int!, nationality: String!, favoriteMovies: [ID], friends: [ID]): User
    addMovie(name: String!, yearOfPublication: Int!, isInTheaters: Boolean!): Movie
    updateUser(id: ID!,name: String,  age: Int, nationality: String): User
    updateMovie(id: ID!, name: String, yearOfPublication: Int, isInTheaters: Boolean): Movie
    deleteUser(id: ID!): User
    deleteMovie(id: ID!): Movie
  }
`;

module.exports = typeDefs;
