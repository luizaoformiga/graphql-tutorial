import { gql, ApolloServer} from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello: string
  }
`;

const resolvers = {
  Query: {
    hello() {
      return "hello World"
    }
  }
}

const server = new ApolloServer({ 
  typeDefs, 
  resolvers
})

server.listen();