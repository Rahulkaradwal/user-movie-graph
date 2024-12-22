const { UserList, MovieList } = require("../FakeData");
const Movie = require("../models/movie");
const User = require("../models/user");

const resolvers = {
  Query: {
    // user queries
    users: async () => {
      try {
        const users = await User.find()
          .populate("friends")
          .populate("favoriteMovies");
        return users;
      } catch (error) {
        throw new Error("Users not found" + error.message);
      }
    },
    user: async (_, args) => {
      try {
        const user = await User.findById(args.id)
          .populate("friends")
          .populate("favoriteMovies");
        return user;
      } catch (error) {
        console.log(error);
        throw new Error("User not found", error.message);
      }
    },
    // movie queries
    movies: async () => {
      try {
        const movies = await Movie.find();
        return movies;
      } catch (error) {
        console.log(error);
      }
    },
    movie: (_, args) => MovieList.find((movie) => movie.name === args.name),
  },
  Mutation: {
    // user mutations
    addUser: async (_, args) => {
      try {
        const user = new User({
          name: args.name,
          username: args.username,
          age: args.age,
          nationality: args.nationality,
          friends: args.friends || [],
          favoriteMovies: args.favoriteMovies || [],
        });
        const newUser = await user.save();
        return newUser;
      } catch (error) {
        throw new Error("User not added: " + error.message);
      }
    },

    updateUser: async (_, args) => {
      try {
        const updatedUser = {
          name: args.name,
          username: args.username,
          age: args.age,
          nationality: args.nationality,
          friends: args.friends,
          favoriteMovies: args.favoriteMovies,
        };
        const user = await User.findByIdAndUpdate(args.id, updatedUser, {
          new: true,
        });
        return user;
      } catch (error) {
        console.log(error);
        throw new Error("User not updated", error.message);
      }
    },
    deleteUser: async (_, args) => {
      try {
        const user = await User.findByIdAndDelete(args.id);
        return user;
      } catch (error) {
        console.log(error);
        throw new Error("User not deleted", error.message);
      }
    },
    // movie mutations
    addMovie: async (_, args) => {
      try {
        const movie = new Movie({
          name: args.name,
          yearOfPublication: args.yearOfPublication,
          isInTheaters: args.isInTheaters,
        });
        await movie.save();
        return movie;
      } catch (error) {
        console.log(error);
      }
    },
    updateMovie: async (_, args) => {
      try {
        const movie = {
          name: args.name,
          yearOfPublication: args.yearOfPublication,
          isInTheaters: args.isInTheaters,
        };
        const updatedMovie = await Movie.findByIdAndUpdate(args.id, movie, {
          new: true,
        });
        return updatedMovie;
      } catch (error) {
        throw new Error("Movie not updated: " + error.message);
      }
    },

    deleteMovie: async (_, args) => {
      try {
        const movie = await Movie.findByIdAndDelete(args.id);
        return movie;
      } catch (error) {
        console.log(error);
        throw new Error("Movie not deleted", error.message);
      }
    },
  },
};

module.exports = resolvers;
