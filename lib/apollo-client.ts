import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: process.env.NEXT_PUBLIC_GQL_URL_CONFIG,
    credentials: "same-origin",
    headers: {
      // Authorization: process.env.HASHNODE_AUTH,
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY_CONFIG,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;