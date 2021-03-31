### GraphQL #3: Schema & Query | Type Scalar | Type Quey | Resolvers

```
/*
* scalar types

  int
  float
  string
  boolean
  id - (identificador exclusivo)

*/

const typeDefs = gql`
  type Query {
    age: Int;
    pushcase: Float;
    name: String;
    active: Boolean;
    id: ID
  }
`;
```

Inicialmente, Quando acontecer de fazer a consulta, Ambos os resultados que não foram declarados irão retornar ```null``` em nossas responses. 

*Agora com esse exemplo abaixo podemos sim ter o nosso retorno nos responses:* 

```
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
      return 12381723;
    } 
  }    
}
```

No caso do ID, Ele vai retornar uma sting com todos os valores dentro, mesmo que nós ali no exemplo digitamos no formato Int.