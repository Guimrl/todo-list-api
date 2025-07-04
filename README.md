# To-Do List API (Node.js, TypeScript, Express, PostgreSQL, Docker)

Este projeto implementa uma API REST simples para gerenciamento de tarefas (CRUD), utilizando Node.js com TypeScript, Express como framework web, e PostgreSQL como banco de dados. A aplicação é conteinerizada com Docker para facilitar o desenvolvimento e a implantação.

---

## 🚀 Tecnologias Utilizadas

- **Backend:** Node.js, TypeScript, Express
- **Banco de Dados:** PostgreSQL
- **Containerização:** Docker, Docker Compose
- **Controle de Versão:** Git
- **Testes:** Jest, Supertest
- **Validação:** Zod
- **Qualidade de Código:** ESLint, Prettier

---

## ✨ Funcionalidades da API

- **Criar Tarefa (`POST /api/tasks`):** Adiciona uma nova tarefa à lista.
- **Listar Tarefas (`GET /api/tasks`):** Recupera todas as tarefas existentes.
- **Buscar Tarefa por ID (`GET /api/tasks/:id`):** Retorna detalhes de uma tarefa específica.
- **Atualizar Tarefa (`PUT /api/tasks/:id`):** Modifica os dados de uma tarefa existente (título, descrição, status).
- **Deletar Tarefa (`DELETE /api/tasks/:id`):** Remove uma tarefa da lista.

---

## ⚙️ Como Iniciar o Projeto (Passo a Passo)

Siga os comandos abaixo para configurar e rodar a aplicação em seu ambiente de desenvolvimento.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [**Node.js**](https://nodejs.org/en/download/) (versão 18.x ou superior, inclui `npm`)
- [**Docker Desktop**](https://www.docker.com/products/docker-desktop/) (ou Docker Engine e Docker Compose) - Garanta que o Docker Desktop esteja **rodando** e com o ícone verde/branco antes de começar.
- [**Git**](https://git-scm.com/downloads)
- Um editor de código como [**VS Code**](https://code.visualstudio.com/) (recomendado)

### 1. Clonar o Repositório

Abra seu terminal (PowerShell, Git Bash, WSL, etc.) e execute:

```bash
git clone [https://github.com/Guimrl/todo-list-api.git](https://github.com/Guimrl/todo-list-api.git)
cd todo-list-api
```

### 2. Configure o seu arquivo .env

### 3. Inicie o Banco de Dados (PostgreSQL com Docker Compose)

```bash
docker-compose up -d db
```

### 4. Instalar dependências do projeto

```bash
npm install
```

### 5. Rodar a Aplicação em Modo de Desenvolvimento

```bash
npm run dev
```

## 📞 Testando a API com Ferramentas HTTP

Aqui estão os endpoints que você pode testar:

- **`POST /api/tasks`**
  - **Descrição:** Cria uma nova tarefa.
  - **Body (JSON):**

    ```json
    {
      "title": "Minha primeira tarefa",
      "description": "Detalhes da minha tarefa inicial."
    }
    ```

  - **Resposta Esperada:** Status `201 Created` e o objeto da tarefa criada (com `id` e `created_at`).

- **`GET /api/tasks`**
  - **Descrição:** Lista todas as tarefas.
  - **Resposta Esperada:** Status `200 OK` e um array JSON contendo as tarefas.

- **`GET /api/tasks/:id`**
  - **Descrição:** Busca uma tarefa específica pelo seu ID.
  - **Parâmetro de Rota:** `id` (ID da tarefa).
  - **Resposta Esperada:** Status `200 OK` e o objeto da tarefa correspondente, ou `404 Not Found`.

- **`PUT /api/tasks/:id`**
  - **Descrição:** Atualiza uma tarefa existente.
  - **Parâmetro de Rota:** `id` (ID da tarefa a ser atualizada).
  - **Body (JSON):** (Campos `title`, `description`, `completed` são opcionais, mas pelo menos um deve ser enviado)

    ```json
    {
      "title": "Tarefa Atualizada",
      "description": "Nova descrição",
      "completed": true
    }
    ```

  - **Resposta Esperada:** Status `200 OK` e o objeto da tarefa atualizada.

- **`DELETE /api/tasks/:id`**
  - **Descrição:** Deleta uma tarefa pelo seu ID.
  - **Parâmetro de Rota:** `id` (ID da tarefa a ser deletada).
  - **Resposta Esperada:** Status `204 No Content`.
