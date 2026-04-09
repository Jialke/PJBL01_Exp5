# PJBL 1 - CRUD para Gerenciamento de Usuários

Projeto de um sistema CRUD para gerenciamento de usuários, criado com o uso de React e Node, para a matéria de Experiência Criativa: Inovando Colaborativamente.

## Bibliotecas
* Frontend: React, Material UI
* Backend: Node, Express, Cors, MySQL, React Router Dom

## Instalação e Execução

### Banco de Dados
1. Acesse o diretório db:
   ```bash
   cd db
   ```

2. Acesse o arquivo `.sql` para criação e inserção do banco de dados.

### Backend
1. Acesse o diretório backend:
   ```bash
   cd backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Acesse o arquivo `db.js` e configure-o com suas credenciais do MySQL.

4. Inicie o servidor (ele irá iniciar na porta 8800):
   ```bash
   npm start
   ```

### Frontend
1. Acesse o diretório frontend/pjblproject:
   ```bash
   cd frontend/pjblproject
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o frontend (ele irá iniciar na porta 3000):
   ```bash
   npm start
   ```

## Rotas

### API

A API disponibiliza rotas para operações de CRUD (Create, Read, Update, Delete) de usuários.

#### Endpoints

| Método | Rota              | Descrição                                      |
|--------|------------------|-----------------------------------------------|
| GET    | /api/users       | Retorna todos os usuários                     |
| POST   | /api/users       | Cria um novo usuário                          |
| GET    | /api/users/:id   | Retorna um usuário específico pelo ID         |
| PUT    | /api/users/:id   | Atualiza os dados de um usuário               |
| DELETE | /api/users/:id   | Remove um usuário do sistema                  |


### Páginas

Rotas disponíveis no frontend da aplicação:

| Rota            | Descrição                                                                 |
|-----------------|--------------------------------------------------------------------------|
| /               | Página inicial que lista os usuários e permite navegação no sistema     |
| /cadastrar      | Página com formulário para cadastro de um novo usuário                  |
| /editar/:id     | Página para edição dos dados de um usuário existente                    |
| /detalhes/:id   | Página que exibe as informações detalhadas de um usuário                |


## Funcionalidades

### Página Inicial (`/`)
Página principal do sistema responsável pela listagem de usuários.

- Exibe uma tabela com rolagem infinita, consumindo dados da API (`/api/users`)
- Possui botão **"+ Cadastrar"** para adicionar um novo usuário

#### Tabela de usuários
| Campo  | Descrição                         |
|--------|----------------------------------|
| ID     | Identificador do usuário         |
| Nome   | Nome do usuário                  |
| E-mail | E-mail do usuário                |
| Ações  | Detalhar, editar ou excluir      |

---

### Detalhes (`/detalhes/:id`)
Exibe todas as informações de um usuário específico.

#### Informações exibidas
- ID  
- Nome  
- E-mail  
- Data de nascimento  
- Endereço  
- CPF  

Possui botão **"Voltar"** para retornar à listagem.

---

### Cadastrar (`/cadastrar`)
Formulário para criação de um novo usuário.

#### Campos
- Nome  
- E-mail  
- Data de nascimento  
- Endereço  
- CPF  

#### Ações
- **Salvar**: cadastra o usuário e retorna à página inicial  
- **Cancelar**: cancela a operação e retorna à página inicial  

---

### Atualizar (`/editar/:id`)
Formulário para edição de um usuário existente.

- Os campos já vêm **preenchidos com os dados atuais**

#### Campos
- Nome  
- E-mail  
- Data de nascimento  
- Endereço  
- CPF  

#### Ações
- **Salvar**: atualiza o usuário e retorna à página inicial  
- **Cancelar**: cancela a edição  

---

### Deletar
A exclusão de usuários é feita através de um modal de confirmação.

#### Modal de exclusão
- Exibe mensagem de confirmação antes de deletar

#### Ações
- **Cancelar**: fecha o modal  
- **Deletar**: remove o usuário e retorna à listagem  
