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


  type Mutation {
    addUser(username: String!, age: Int!, nationality: String!, favoriteMovies: [ID], friends: [ID]): user
    addMovie(name: String!, yearOfPublication: Int!, isInTheaters: Boolean!): Movie
    updateUser(id: ID!,name: String,  age: Int, nationality: String): user
    updateMovie(id: ID!, name: String, yearOfPublication: Int, isInTheaters: Boolean): Movie
    deleteUser(id: ID!): user
    deleteMovie(id: ID!): Movie
  }
`;

module.exports = typeDefs;
