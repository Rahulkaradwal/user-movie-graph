const { UserList, MovieList } = require("../FakeData");

const resolvers = {
  Query: {
    // user queries
    users: () => UserList,
    user: (_, args) => {
      return UserList.find((user) => user.id === args.id);
    },
    // movie queries
    movies: () => MovieList,
    movie: (_, args) => MovieList.find((movie) => movie.name === args.name),
  },
  Mutation: {
    // user mutations
    addUser: (_, args) => {
      const user = {
        id: UserList.length + 1,
        name: args.name,
        username: args.username,
        age: args.age,
        nationality: args.nationality,
        friends: args.friends || [],
        favoriteMovies: args.favoriteMovies || [],
      };
      UserList.push(user);
      return user;
    },
    updateUser: (_, args) => {
      const user = UserList.find((user) => user.id === args.id);
      if (!user) {
        throw new Error("User not found");
      }
      if (typeof args.name === "string") {
        user.name = args.name;
      }

      if (typeof args.age === "number") {
        user.age = args.age;
      }
      if (typeof args.nationality === "string") {
        user.nationality = args.nationality;
      }

      return user;
    },
    deleteUser: (_, args) => {
      const user = UserList.find((user) => user.id === args.id);
      if (!user) {
        throw new Error("User not found");
      }
      UserList = UserList.filter((user) => user.id !== args.id);
      return user;
    },
    // movie mutations
    addMovie: (_, args) => {
      const movie = {
        id: MovieList.length + 1,
        name: args.name,
        yearOfPublication: args.yearOfPublication,
        isInTheaters: args.isInTheaters,
      };
      MovieList.push(movie);
      return movie;
    },
    updateMovie: (_, args) => {
      const movie = MovieList.find((movie) => movie.id === args.id);
      if (!movie) {
        throw new Error("Movie not found");
      }
      if (typeof args.name === "string") {
        movie.name = args.name;
      }

      if (typeof args.yearOfPublication === "number") {
        movie.yearOfPublication = args.yearOfPublication;
      }
      if (typeof args.isInTheaters === "boolean") {
        movie.isInTheaters = args.isInTheaters;
      }
      return movie;
    },
    deleteMovie: (_, args) => {
      const movie = MovieList.find((movie) => movie.id === args.id);
      if (!movie) {
        throw new Error("Movie not found");
      }
      MovieList = MovieList.filter((movie) => movie.id !== args.id);
      return movie;
    },
  },
};

module.exports = resolvers;
