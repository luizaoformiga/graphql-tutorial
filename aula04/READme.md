### GraphQL #4: Schema & Query | Array | Non-Null

Neste assunto vamos ver exemplos de arrays em GraphQL e como são utilizadas.
Aqui foi criado um item chamado "technology", dentro dele nós adicionamos um array.

Exemplo: 
```
const typeDefs = gql`
  type Query {
    age: Int;
    pushcase: Float;
    name: String;
    active: Boolean;
    id: ID;
    tecnology: [String]
  }
`;

const resolvers = {
  Query:  {
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
      return ["Age", "phone", "number", "address"];
    } 
  }    
}
```

*Como podemos ver, Nós adicionamos um array que simboliza do tipo string, E damos o nosso retorno com alguns nomes em string. Se caso não fizéssemos nenhum retorno, ele voltaria com o valor null. Lembrando que, Mesmo se colocássemos outro tipo de valor dentro desse array, ele não retornaria erro e sim converteria para string.*

Aqui está um exemplo de como faríamos essa requisição: 

```
query {
  age
  purchase
  name
  active
  id
  technology
}
```

Quando queremos indicar para a nossa requisição que queremos um retorno de array independente do que seja no item devemos usar ```!``` no final do array criado. 

Exemplo: 
```
tecnology: [String]!
```

Assim nós evitamos dele nos retornar ```null```.


Outro acontecimento que pode ocorrer nesses casos, É o preenchimento de valores ```null``` em um retorno no array.

Exemplo: 
```
technology() {
    return [null, null];
}
```
Esse caso pode ser resolvido com o sinal ```!``` logo após a declaração do tipo do array criado.

Exemplo: 
```
technology: [string!]!
```

Lembrando que, esse sinal usado não é necessariamente somente de arrays, ele server para todos os outros casos para evitar esse tipo de valor ```null``` nas nossas responses.