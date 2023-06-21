import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://34.172.240.138:80",
  cache: new InMemoryCache(),
});
