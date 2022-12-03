
# Desafio Tecnico - Agenda

Este teste consiste em criar um pequeno cadastro de clientes com vínculo de contatos, depois mostrar o cliente e seus contatos vinculados.


## Funcionalidades

- Cadastro de Clientes
- Cadastro de Contatos
- Acesso aos contatos do Clientes
- CRUD de clientes e contatos


## Stack utilizada

**Front-end:** React, ContextAPI, Chakra-UI

**Back-end:** Node, Express, NestJS, Postgres, Prisma

**Docker**: Dockerizado


## Requisitos

- Docker
## Instalação

Clone o repositório

```bash
  git clone git@github.com:devigorgarcia/s3-teste-tecnico.git
```

Acesse a pasta
```bash
  cd s3-teste-tecnico
```

Abra o terminal dentro da pasta e rode o comando
```bash
  docker-compose up --build
```

Após a inicialização do docker, em um outro terminal, realize a migration

```bash
  docker exec -it api npx prisma migrate dev
```
    
## Rodando localmente

Para Acessar a aplicação, coloque em seu navegador

```http
  http://localhost:5173
```


## Documentação API

[Documentação API](http://localhost:3000/api)

