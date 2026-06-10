# CRM Backend API

API REST desenvolvida com Node.js, Express, TypeScript, Prisma ORM e MySQL para gerenciamento de clientes com autenticação JWT.

## Tecnologias

* Node.js
* Express
* TypeScript
* Prisma ORM
* MySQL
* JWT (JSON Web Token)
* BcryptJS

## Funcionalidades

### Autenticação

* Cadastro de usuários
* Login com JWT
* Senhas criptografadas com Bcrypt
* Rotas protegidas por autenticação

### Clientes

* Criar cliente
* Listar clientes
* Buscar cliente por ID
* Atualizar cliente
* Excluir cliente

### Segurança

* Senhas armazenadas de forma criptografada
* Rotas protegidas com Bearer Token
* Clientes associados ao usuário autenticado

## Estrutura do Projeto

```text
src/
├── controllers/
├── middlewares/
├── prisma/
├── routes/
├── types.d.ts
└── server.ts
```

## Banco de Dados

### User

| Campo     | Tipo     |
| --------- | -------- |
| id        | String   |
| name      | String   |
| email     | String   |
| password  | String   |
| createdAt | DateTime |
| updatedAt | DateTime |

### Customer

| Campo     | Tipo     |
| --------- | -------- |
| id        | String   |
| name      | String   |
| email     | String   |
| phone     | String   |
| company   | String   |
| createdAt | DateTime |
| updatedAt | DateTime |
| userId    | String   |

## Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/crm-backend.git
```

Entre na pasta:

```bash
cd crm-backend
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env`:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/crm"
JWT_SECRET="sua_chave_secreta"
PORT=3000
```

Execute as migrations:

```bash
npx prisma migrate dev
```

Gere o Prisma Client:

```bash
npx prisma generate
```

Inicie o servidor:

```bash
npm run dev
```

## Rotas

### Autenticação

#### Registrar usuário

```http
POST /auth/register
```

#### Login

```http
POST /auth/login
```

### Clientes

#### Criar cliente

```http
POST /customers
```

#### Listar clientes

```http
GET /customers
```

#### Buscar cliente por ID

```http
GET /customers/:id
```

#### Atualizar cliente

```http
PUT /customers/:id
```

#### Excluir cliente

```http
DELETE /customers/:id
```

## Autor

Desenvolvido por Daliane Rabelo.
