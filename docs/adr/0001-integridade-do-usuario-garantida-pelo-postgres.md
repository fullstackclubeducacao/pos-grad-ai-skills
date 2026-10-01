# Integridade do Usuário garantida pelo Postgres

O requisito é que os dados do Usuário sejam "persistidos fortemente": duráveis e íntegros mesmo que a aplicação tenha bugs ou que alguém escreva direto no banco. Por isso o Postgres é a fonte de verdade das regras (`NOT NULL`, `UNIQUE (email)`, `CHECK (email = lower(email))`, `CHECK (birth_date >= '1900-01-01')`, limites de tamanho), e a validação com zod na aplicação apenas espelha essas regras para devolver `400` com mensagens por campo. A duplicação é intencional: não remova as constraints achando que "o zod já valida". Pelo mesmo motivo, o `409` de email duplicado vem da violação de `UNIQUE` (código `23505`) e não de um SELECT prévio, que abriria uma janela de corrida.

## Consequences

- A regra "Data de Nascimento não está no futuro" é a única que fica só na aplicação: o Postgres não aceita `CURRENT_DATE` em `CHECK`, e optamos por não usar trigger.
- Acesso ao banco é feito com `pg` e SQL puro (sem ORM), para que as constraints fiquem explícitas nas migrations.
