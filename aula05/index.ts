import { gql, ApolloServer } from 'apollo-server';


const users = [
  {
    id: 1,
    age: 24,
    purchase: 19,
    name: "Luiz Lima",
    active: true,
    technology: ["React", "Node"]
  } 
]

const products = [
  {   
    id: 1,
    name: "Notebook",
    value: 1200.00
  },
  {   
    id: 2,
    name: "camiseta",
    value: 10.00
  }
]

const typeDefs = gql` 
  type User {
    id: ID;
    age: Int;
    pushcase: Float;
    name: String;
    active: Boolean;
    technology: [String!]!;
  }

  type Product {
    id: ID;
    name: String;
    value: Float;
  }
  
  type Query {
    users: [User];
    products: [Product];   
  }
`

const resolvers = {
  Query: {
    user() {
      return users;
    },
    product() {
      return products;
    }
  }    
}

const server = new ApolloServer({ 
  typeDefs, 
  resolvers
})

server.listen();