import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: "https://config-gql.api.seodapop.com/graphql",
    credentials: "same-origin",
    headers: {
      // Authorization: process.env.HASHNODE_AUTH,
      "x-api-key": "da2-qmka7esa6bggzlsb4wykodvuda"
    },
  }),
  cache: new InMemoryCache(),
});

export default client;