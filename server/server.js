const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");
const connectDB = require("./config/db");
require("dotenv").config();

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Initialize Apollo Server
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    // Start the server
    const { url } = await startStandaloneServer(server, {
      listen: { port: process.env.PORT || 4000 },
    });

    console.log(`🚀 Server ready at ${url}`);
  } catch (error) {
    console.error("❌ Server failed to start:", error.message);
  }
};

module.exports = startServer;
