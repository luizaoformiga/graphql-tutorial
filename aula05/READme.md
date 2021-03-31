### GraphQL #5: Schema & Query | Object Types | Fields

Nesta aula vamos dar introdução ao uso de Schema.

```
/*
 => Schema
 => Schema Definition Language ou Linguagem de definição de Esquema
 => SDL

*/
```

Agora mudaremos um pouco a nossa estrutura criada nas aulas anterioes criando um schema diferente.

```
const typeDefs = gql`
  type User {
    id: ID;
    age: Int;
    pushcase: Float;
    name: String;
    active: Boolean;
    technology: [String]!
  }
  
  type Query {
    user: User
  }
`

const resolvers = {
  Query: {
    user() {
      return {
        id: 1,
        age: 24,
        purchase: 19,
        name: "Luiz Lima",
        active: true,
        technology: ["React", "Node"]
      }
    }
  }    
}
```

Criamos um schema chamado de ```Ùser``` e referenciamos ele em nosso type, logo em seguida demos um retorno das propriedades dele.
O problema aqui é que ele se tornou um objeto, Assim tendo que passar propriedades a serem passadas na hora de fazer nossa requisição.

Como fazer: 
```
query {
  user {
    id
    age
    purchase
    name
    active
    technology        
  }
}
```

Como não fazer: 
```
query {
  user
}
```

No exemplo final, vou fazer um uso de arrays e manipular eles na requisição. Criaremos dois arrays de produtos e usuários.

```
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
  type Product {
    id: ID;
    name: String;
    value: Float;
  }

  type User {
    id: ID;
    age: Int;
    pushcase: Float;
    name: String;
    active: Boolean;
    technology: [String!]!;
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
```

Nossa requisição seria mais ou menos desse tipo: 

```
query {
  users {
    // aqui buscamos o que quiser no que foi criado
  }

  product {
    // aqui também buscamos o que quiser no que foi feito
  }
}
```

Até a próxima aula!