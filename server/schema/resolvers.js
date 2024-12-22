const userQueries = require("./resolvers/queries/userQueries");
const movieQueries = require("./resolvers/queries/movieQueries");
const userMutations = require("./resolvers/mutations/userMutations");
const movieMutations = require("./resolvers/mutations/movieMutations");

const resolvers = {
  Query: {
    ...userQueries,
    ...movieQueries,
  },
  Mutation: {
    ...userMutations,
    ...movieMutations,
  },
};

module.exports = resolvers;
