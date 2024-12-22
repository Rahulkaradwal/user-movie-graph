const User = require("../../../models/user");

const userQueries = {
  users: async () => {
    try {
      const users = await User.find()
        .populate("friends")
        .populate("favoriteMovies");
      return users;
    } catch (error) {
      throw new Error("Users not found: " + error.message);
    }
  },
  user: async (_, { id }) => {
    try {
      const user = await User.findById(id)
        .populate("friends")
        .populate("favoriteMovies");
      return user;
    } catch (error) {
      throw new Error("User not found: " + error.message);
    }
  },
};

module.exports = userQueries;
