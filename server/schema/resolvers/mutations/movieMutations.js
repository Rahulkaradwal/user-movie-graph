const Movie = require("../../../models/movie");

const movieMutations = {
  addMovie: async (_, args) => {
    try {
      const movie = new Movie({
        name: args.name,
        yearOfPublication: args.yearOfPublication,
        isInTheaters: args.isInTheaters,
      });
      return await movie.save();
    } catch (error) {
      throw new Error("Movie not added: " + error.message);
    }
  },
  updateMovie: async (_, { id, ...args }) => {
    try {
      return await Movie.findByIdAndUpdate(id, args, { new: true });
    } catch (error) {
      throw new Error("Movie not updated: " + error.message);
    }
  },
  deleteMovie: async (_, { id }) => {
    try {
      return await Movie.findByIdAndDelete(id);
    } catch (error) {
      throw new Error("Movie not deleted: " + error.message);
    }
  },
};

module.exports = movieMutations;
