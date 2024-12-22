const { ApolloServer } = require("@apollo/server");
const mongoose = require("mongoose");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");
require("dotenv").config();

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("🚀 Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Exit on failure
  }
};
connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: process.env.PORT },
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
