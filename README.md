===================ETAPA 2===============================================================

API .Net 8.0 login

para acessar utilize os dados abaixo:

inicie com o seguinte comando-> pnpm run dev:all  <- ira iniciar junto com o API.

http://localhost:3000/login

Email para teste -> email_teste@gmail.com
Senha-> 123

ira imprimir uma mensagem 'Login realizado com sucesso!' caso contrario 'E-mail ou senha inválidos.'

os dados para teste poderão ser alterados em LoginAPI/Controllers/AuthController.cs

obs: caso nao inicie junto com api pelo 'pnpm run dev:all' executa com os cmd separados:
front - > pnpm dev
API -> cd LoginAPI; dotnet run

===================ETAPA 1===============================================================

Teste de Nivelamento com Next.js, Talwind e Shadcn

no visual studio code inicie com seguinte comando: pnpm dev.

http://localhost:3000/login

http://localhost:3000/recovery

http://localhost:3000/recovery_sent

http://localhost:3000/recovery_link

http://localhost:3000/recovery_redefinirsenha

Obs: A tela de login é responsiva. Quando a resolução for maior que 768px, será aberto um modal; caso contrário, será aberta outra tela."
