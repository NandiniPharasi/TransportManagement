import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "./apolloClient";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
