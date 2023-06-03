import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://35.184.159.116/4000",
  cache: new InMemoryCache(),
});
