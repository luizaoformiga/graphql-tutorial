### Guia GraphQL

**Exemplo de pesquisa em GraphQL**

```
query {
    product {
        id name email
    }
}
```

Como podemos ver, Nós pedimos apenas o que precisamos dentro de uma API.

Podemos fazer duas chamadas ou mais ao mesmo tempo em apenas uma requisição.

```
query {
    products {
        id name price 
    }

    clients {
        id name 
        address {
            street
        }
    }
}
```