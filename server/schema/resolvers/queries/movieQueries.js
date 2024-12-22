const Movie = require("../../../models/movie");

const movieQueries = {
  movies: async () => {
    try {
      return await Movie.find();
    } catch (error) {
      throw new Error("Movies not found: " + error.message);
    }
  },
  movie: async (_, { name }) => {
    try {
      return await Movie.findOne({ name });
    } catch (error) {
      throw new Error("Movie not found: " + error.message);
    }
  },
};

module.exports = movieQueries;
