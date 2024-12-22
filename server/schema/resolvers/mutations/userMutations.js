const User = require("../../../models/user");

const userMutations = {
  addUser: async (_, args) => {
    try {
      const user = new User({
        username: args.username,
        age: args.age,
        nationality: args.nationality,
        friends: args.friends || [],
        favoriteMovies: args.favoriteMovies || [],
      });
      return await user.save();
    } catch (error) {
      throw new Error("User not added: " + error.message);
    }
  },
  updateUser: async (_, { id, ...args }) => {
    try {
      return await User.findByIdAndUpdate(id, args, { new: true });
    } catch (error) {
      throw new Error("User not updated: " + error.message);
    }
  },
  deleteUser: async (_, { id }) => {
    try {
      return await User.findByIdAndDelete(id);
    } catch (error) {
      throw new Error("User not deleted: " + error.message);
    }
  },
};

module.exports = userMutations;
