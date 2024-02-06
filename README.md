# Full Cycle - Desafio 02

## Proposta

Criar um projeto utilizando docker-compose, em que um container de nginx atua como proxy reverso para um
servidor nodejs que grava dados em um terceiro container, com mysql

### Regras:
- Ao acessar http://localhost:8080, o servidor node deve inserir um registro na tabela `people`
- O retorno dessa chamada deve ser `<h1>Full Cycle Rocks!!</h1>`, junto com a listagem de nomes já salvos no banco

## Como rodar?

Para subir o projeto, basta rodar o seguinte comando, na raiz do projeto:

```bash
docker compose up -d
```