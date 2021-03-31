import { gql, ApolloServer } from 'apollo-server';

const typeDefs = gql`
  type Query {
    age: Int;
    pushcase: Float;
    name: String;
    active: Boolean;
    id: ID
  }
`;

const resolvers = {
  Query:  {
    age() {
      return 19;
    }, 
    pushcase() {
      return 19.00;  
    }, 
    name() {
      return "Luiz Lima";   
    }, 
    active() {
      return true; 
    },
    id() {
      return 2365135123;
    } 
  }    
}

const server = new ApolloServer({ 
    typeDefs, 
    resolvers
})

server.listen();