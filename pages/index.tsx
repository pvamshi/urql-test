import Home from "@components/Home";
import React from "react";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3001",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          Post(_, { args, toReference }) {
            return toReference({
              __typename: "Post",
              id: args?.id,
            });
          },
        },
      },
    },
  }),
  connectToDevTools: true,
});
export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
