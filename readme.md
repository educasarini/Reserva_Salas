# Inteli - Instituto de Tecnologia e Liderança

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="assets/docs/readme/inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width=40% height=40%></a>
</p>

<br>

# Sistema de reserva de salas

Este projeto consiste no desenvolvimento de um sistema web para reserva de salas, criado como parte do Projeto Individual do módulo 2025-1B. O objetivo principal é aplicar, de forma prática, os conhecimentos adquiridos em backend com Node.js e Express.js, seguindo o padrão arquitetural MVC (Model-View-Controller). O sistema permite que usuários consultem salas disponíveis, realizem reservas em datas e horários específicos, e acompanhem o status de suas solicitações.

A estrutura do projeto foi pensada para garantir organização, escalabilidade e facilidade de manutenção. O backend é desenvolvido com Node.js, utilizando Express.js para criação das rotas e lógica de servidor, e EJS como motor de visualização para renderização das páginas. O banco de dados segue um modelo relacional, projetado com três entidades principais: users, rooms e bookings, refletindo os principais fluxos de uso do sistema.

Este repositório contém o código-fonte completo, diagramas, instruções para execução local e arquivos de documentação. O projeto também serve como portfólio técnico, demonstrando a capacidade de desenvolver aplicações completas com integração entre frontend, backend e banco de dados.

## Requisitos

- Node.js (versão 22.15.0)
- PostgreSQL (versão 17.0)

## Instalação

1. **Clonar o repositório:**

```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd seu-projeto
```

2. **Instalar as dependências:**
    
```bash
npm install
```

3. **Configurar o Banco de Dados (PostgreSQL):**

* Certifique-se de ter um servidor PostgreSQL rodando localmente (ou utilize um serviço de banco de dados em nuvem, como o Supabase, que você já mencionou no WAD).

* Crie um banco de dados vazio com o nome que você definirá no seu arquivo de variáveis de ambiente (sugestão: `reserva_salas_db`).

* Na raiz do projeto, crie um arquivo chamado `.env` e adicione as seguintes variáveis de ambiente, substituindo os valores pelos seus dados de conexão do PostgreSQL:
        
```env
   DB_USER=seu_usuario_postgresql
   DB_HOST=localhost # Ou o IP/URL do seu servidor PostgreSQL (ex: para Supabase, use a URL fornecida)
   DB_DATABASE=reserva_salas_db # Nome do banco de dados que você criou/usará
   DB_PASSWORD=sua_senha_postgresql
   DB_PORT=5432 # Porta padrão do PostgreSQL. Se for Supabase, use a porta fornecida por eles.
   DB_SSL=false # Defina como 'true' se estiver conectando via SSL (comum em serviços de nuvem como Supabase)
```

4. **Executar Migrações (Criação das Tabelas):**
        
- Para criar as tabelas `client`, `room` e `booking` (e outras que você tiver no seu esquema) no seu banco de dados, execute o script de migração. 
        
```bash
   npm run init-db # Este comando executa o script SQL ou JS de criação do banco
```

## Execução

1. **Inicie o servidor com o comando:**

```bash
   node server.js
```

2. **Se estiver tudo certo, você verá no terminal:**

```bash
   Servidor rodando na porta 3000
```

3. **Acesse no seu navegador:**

```bash
   http://localhost:3000
```

Funcionalidades Previstas
---------------

- Cadastro e autenticação de usuários
- Consulta de salas disponíveis
- Realização de reservas com data e horário
- Visualização de status da reserva
- Painel administrativo para controle das reservas 

Scripts Disponíveis
-------------------

* `npm start`: Inicia o servidor Node.js.
* `npm run dev`: Inicia o servidor com `nodemon`, reiniciando automaticamente após alterações no código.
* `npm run test`: Executa os testes automatizados.
* `npm run test:coverage`: Executa os testes e gera um relatório de cobertura de código.

Estrutura de Diretórios
-----------------------
```
ponderada_Bryan/
│
├── config/                # Arquivos de configuração (ex: conexão com banco)
│   └── database.js
├── controllers/           # Lógica de controle das requisições
│   └── HomeController.js
├── models/                # Definição de modelos de dados (estrutura do banco)
│   └── User.js
├── routes/                # Definição das rotas do sistema
│   └── index.js
├── services/              # Serviços auxiliares do sistema
│   └── userService.js
├── assets/                # Arquivos públicos como imagens e fontes
├── scripts/               # Arquivos de JavaScript públicos
├── styles/                # Arquivos CSS públicos
├── tests/                 # Arquivos de testes unitários
│   └── example.test.js
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env.example           # Arquivo de exemplo para variáveis de ambiente
├── jest.config.js         # Arquivo de configuração do Jest
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── readme.md              # Documentação do projeto (Markdown)
├── server.js              # Arquivo principal que inicializa o servidor
└── rest.http              # Teste de endpoints (opcional)
```

* **`config/`**: Configurações do banco de dados e outras configurações do projeto.
* **`controllers/`**: Controladores da aplicação (lógica de negócio).
* **`models/`**: Modelos da aplicação (definições de dados e interações com o banco de dados).
* **`routes/`**: Rotas da aplicação.
* **`tests/`**: Testes automatizados.
* **`views/`**: Views da aplicação (se aplicável).

Contribuição
------------

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

Licença
-------

Este projeto está licenciado sob a Licença MIT.

Este README.md fornece uma visão geral clara do boilerplate, incluindo instruções de instalação, instruções de execução, funcionalidades principais, scripts disponíveis, estrutura de diretórios, como contribuir e informações de licença. 