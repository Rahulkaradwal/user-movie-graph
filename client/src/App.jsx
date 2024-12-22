import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ViewButtons from "./components/ui/ViewButtons";
import Dashboard from "./components/ui/Dashboard";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

function App() {
  const [view, setView] = useState("getData");

  const handleView = (view) => {
    setView(view);
  };
  return (
    <ApolloProvider client={client}>
      <div className="bg-white h-[99vh] overflow-hidden">
        <ViewButtons handleView={handleView} view={view} />
        <Dashboard view={view} />
      </div>
    </ApolloProvider>
  );
}

export default App;
