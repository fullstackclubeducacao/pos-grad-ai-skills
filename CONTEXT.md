# Cadastro de Usuários

Mantém o registro das pessoas cadastradas no sistema e disponibiliza esses dados para consulta.

## Language

**Usuário**:
O registro de uma pessoa no sistema, composto por Nome, Email e Data de Nascimento. Podem existir vários Usuários.
_Avoid_: Cadastro, conta, cliente, pessoa

**Nome**:
Como o Usuário se identifica, em um único texto (ex.: "Valdir Mendes"); não é dividido em nome e sobrenome.
_Avoid_: Nome completo, primeiro nome

**Email**:
O endereço de email do Usuário; identifica o Usuário de forma única, sem distinção entre maiúsculas e minúsculas.
_Avoid_: Login, contato

**Data de Nascimento**:
O dia em que o Usuário nasceu, sem hora nem fuso; nunca está no futuro.
_Avoid_: Idade, aniversário, nascimento
