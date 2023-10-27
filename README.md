# Trybe Smith: Loja de itens medievais

Bem-vindo ao repositório do projeto Trybesmith! Este projeto é parte do currículo da Trybe e tem como objetivo desenvolver uma loja de itens medievais, como espadas feitas sob encomenda, no formato de uma API, utilizando TypeScript e Sequelize.

## Principais Características:

- ### API  de itens Medievais: 
Desenvolvemos uma API para uma loja de itens medievais, permitindo aos usuários acessar e gerenciar produtos e pedidos relacionados a itens medievais.
 
- ### Operação CRUD:
Implementamos operações CRUD (Create, Read, Update, Delete) para produtos e pedidos. Os usuários poderão criar, visualizar, atualizar e excluir produtos e pedidos de maneira simples e intuitiva.

- ### Autenticação com JWT:
Utilizamos autenticação com JSON Web Tokens (JWT) para proteger rotas e garantir que apenas usuários autorizados possam acessar recursos específicos da aplicação. Isso aumentará a segurança e a proteção dos dados do sistema.

- ### Estrutura Model-Service-Controller(MSC):
Neste projeto seguimos uma arquitetura de código organizada com base no Modelo-Serviço-Controlador (MSC). Isso ajuda a manter o código bem estruturado, facilita a escalabilidade e torna a manutenção mais eficiente.

- ### Testes Unitários e de Cobertura:
Desenvolvemos testes unitários para garantir que suas funcionalidades estejam funcionando corretamente. Além disso, acompanhe a cobertura de código com testes para manter a qualidade do projeto.

## Tecnologias Utilizadas

- **TypeScript**: Neste projeto utilizamos TypeScript, uma linguagem que adiciona tipos estáticos ao JavaScript, tornando o código mais seguro e legível.
- **Node.js**: A base da nossa aplicação, que permite a construção de servidores web escaláveis e eficientes.
- **Express**: Um framework web que simplifica o desenvolvimento de APIs RESTful.
- **Jest**: Uma estrutura de teste de JavaScript para garantir a qualidade do código.
- **Sequelize**: ORM (Object-Relational Mapping) para Node.js que simplifica a interação com bancos de dados SQL.
- **JWT (JSON Web Tokens)**: Utilizado para autenticação segura e criação de tokens.
- **Docker**: Plataforma para desenvolvimento, envio e execução de aplicações em contêineres.

## Como Executar a API

1. Certifique-se de ter o Docker instalado em sua máquina.

2. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/project-smith.git

3. Acesse o diretório do projeto:
   ```bash
   cd project-smith

4. Crie um arquivo .envno diretório raiz e defina as variáveis ​​de ambiente:
    -DB_HOST=seu-host-do-mysql
    -DB_USER=seu-usuario-do-mysql
    -DB_PASSWORD=sua-senha-do-mysql
    -DB_NAME=nome-do-banco-de-dados
    -JWT_SECRET=chave-secreta-para-o-jwt

## Tecnologias Utilizadas:
  - TypeScript
  - Node.js
  - Docker
  - Express
  - MySQL
  - Sequelize
  - JWT (Tokens da Web JSON)
  - Jest
  - Docker->
