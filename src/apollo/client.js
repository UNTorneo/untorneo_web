import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-gateway-apollo-4yiv26znhq-uc.a.run.app",
  cache: new InMemoryCache(),
});
