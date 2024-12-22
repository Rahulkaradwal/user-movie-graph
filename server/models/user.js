const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: String,
  age: Number,
  nationality: String,
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  favoriteMovies: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
});

module.exports = mongoose.model("User", userSchema);
