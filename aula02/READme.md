**Aqui iremos instalar nossas ferramentas necessárias para poder então usar o GrapgQL**

- graphql
- apollo-server

```npm i --save graphql apollo-server```

Inicialmente nessa aula eles serão necessários para o nosso exemplo.

Assim está funcionando basicamente o nosso index.ts: 

```
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
```

Basta apenas o npm start para iniciar. Endereço ```http://localhost:4000``` Essa é a porta padrão.