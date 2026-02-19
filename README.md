#  OrangeHRM - Automação de Testes com Cypress

Este repositório contém uma suite de testes automatizados para a plataforma **OrangeHRM**, focada em fluxos de login e gestão de utilizadores utilizando o **Cypress**.

##  Testes Implementados

### 1.  Login (Sucesso e Falha)
Ficheiro: `login-success-fail-orange.cy.js`
- **Login com Sucesso**: Valida o acesso ao sistema utilizando credenciais administrativas e verifica o redirecionamento para o Dashboard.
- **Login com Falha**: Valida a exibição de mensagens de erro ao tentar aceder com credenciais inválidas.

### 2.  Gestão de Utilizadores (Dados Randómicos)
Ficheiro: `teste-Orangehrm-RandomUsers.cy.js`
- **Criação de Utilizador**: Utiliza a biblioteca **Chance** (ou fixtures) para gerar dados aleatórios (nome, apelido, etc.).
- **Fluxo Completo**: Simula o preenchimento de formulários de recrutamento/administração garantindo que o sistema aceita novos registos.

##  Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/) - Framework de automação.
- [Chance.js](https://chancejs.com/) - Geração de dados aleatórios.
- JavaScript - Linguagem base.

##  Como Executar
1. Clone o repositório:
   ```bash
   git clone [https://github.com/danieldinizqa/cypress-automation-orangehrm.git](https://github.com/danieldinizqa/cypress-automation-orangehrm.git)