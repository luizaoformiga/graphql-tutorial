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