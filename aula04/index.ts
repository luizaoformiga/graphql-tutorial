import { gql, ApolloServer } from 'apollo-server';

const typeDefs = gql`
  type Query {
    age: Int;
    pushcase: Float;
    name: String;
    active: Boolean;
    id: ID;
    technology: [String]!
  }
`

const resolvers = {
  Query: {
    age() {
      return 19;
    }, 
    purchase() {
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
    },
    technology() {
      return ["Age", "phone", "number", "address"] // or []
    } 
  }    
}

const server = new ApolloServer({ 
  typeDefs, 
  resolvers
})

server.listen();