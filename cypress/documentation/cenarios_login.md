# CENARIOS DE TESTE LOGIN PAGE:

#### CT 01 - Exibir informações de página de login
Objetivo: 
Validar o comportamento do sistema ao exibir a página de login.
Ações: 
DADO QUE: o usuário acesse a página de login do sistema através da url http://localhost:3000/login,
QUANDO: ele visualiza a página de login 
Resultado Esperado:
ENTÃO: o sistema exibe as seguintes informações:
•	Título “Sign in to your account”
•	Link “Or create your account for free”
•	Subtítulo “Fill the fields below to login”
•	Campo”Emaill address”
•	Campo “Password”
•	Checkbox “Remember me”
•	HiperLink “Forgot my password”
•	Botão “Login”
•	Botão de exibir/ocultar senha


#### CT 02 - Não informar dados de login
Objetivo: 
Validar o comportamento do sistema quando o usuário não informar os dados.
Ações: 
DADO QUE: o usuário acesse a página de login do sistema através da url http://localhost:3000/login,
QUANDO: ele visualiza a página de login, E não informa dados, E clica no botão “Login”.
Resultado Esperado:
ENTÃO: o sistema não permite clicar no botão Login


#### CT 03 - Não informar Email Address
Objetivo: 
Validar o comportamento do sistema quando o usuário não informar “Email Address”.
Ações: 
DADO QUE: o usuário acesse a página de login do sistema através da url http://localhost:3000/login,
QUANDO: ele visualiza a página de login, E não informa o Email Address, E preenche Password, E clica no botão “Login”.
Resultado Esperado:
ENTÃO: o sistema não permite clicar no botão Login.


#### CT 04 - Não informar Password
Objetivo: 
Validar o comportamento do sistema quando o usuário não informar “Password”.
Ações: 
DADO QUE: o usuário acesse a página de login do sistema através da url http://localhost:3000/login,
QUANDO: ele visualiza a página de login, E informa o Email Address, E não preenche Password, E clica no botão “Login”.
Resultado Esperado:
ENTÃO: o sistema não permite clicar no botão Login.


#### CT 05 - Informar dados inválidos
Objetivo: 
Validar o comportamento do sistema quando o usuário não informar os dados válidos.
Ações: 
DADO QUE: o usuário acesse a página de login do sistema através da url http://localhost:3000/login,
QUANDO: ele visualiza a página de login, E informa dados inválidos, E clica no botão “Login”.
Resultado Esperado:
ENTÃO: o sistema não permite clicar no botão “Login”, e exibe mensagens de erros sob cada campo com dado inválido: 
•	Mensagem de erro – Campo “Email address”: “Insert a valid email address.”.
•	Mensagem de erro – Campo “Password”: “The password must have at leat 7 characters.”.


#### CT 06 - Informar Email Address inválido
Objetivo: 
Validar o comportamento do sistema quando o usuário não informar o Email Address válido.
Ações: 
DADO QUE: o usuário acesse a página de login do sistema através da url http://localhost:3000/login,
QUANDO: ele visualiza a página de login, E informa email address inválido, E informa senha válida,
Resultado Esperado:
ENTÃO: o sistema exibe mensagem de erro “Insert a valid email address.”, E não permite clicar em login.

#### CT 07 - Informar Password com menos de 7 caracteres
Objetivo: 
Validar o comportamento do sistema quando o usuário não informar o Password com ao menos de 7 caracteres.
Ações: 
DADO QUE: o usuário acesse a página de login do sistema através da url http://localhost:3000/login,
QUANDO: ele visualiza a página de login, E informa email address válido, E informa email Password com menos de 7 caracteres
Resultado Esperado:
ENTÃO: o sistema exibe mensagem de erro “The password must have at leat 7 characters.”, E não permite clicar em login.


#### CT 08 - Informar Email Address inexistente
Objetivo: 
Validar o comportamento do sistema quando o usuário não informar um Email Address existente.
Ações: 
DADO QUE: o usuário acesse a página de login do sistema através da url http://localhost:3000/login,
QUANDO: ele visualiza a página de login, E informa email address inexistente, E informa Password válida, E clica no botão Login,
Resultado Esperado:
ENTÃO: o sistema exibe mensagem de erro “Email or password are incorrect. Try again.”.


#### CT 9 - Funcionalidade do hiperlink “Forgot my password”
Objetivo: 
Validar a funcionalidade do texto com hiperlink “Forgot my password”.
Ações: 
DADO QUE: o usuário acesse a página de login do sistema através da url http://localhost:3000/login,
QUANDO: ele visualiza a página de login, E clica no hiperlink “Forgot my password”
Resultado Esperado:
ENTÃO: o sistema direciona o usuário para a página forgot password (http://localhost:3000/forgot-password). 


#### CT 10 - Funcionalidade do checkbox “Remember me”
Objetivo: 
Validar a funcionalidade do texto com checkbox “Remember me”
Ações: 
DADO QUE: o usuário acesse a página de login do sistema através da url http://localhost:3000/login,
QUANDO: ele visualiza a página de login, E preenche os dados de acesso, marca o Checkbox “Remember me”, E clica Login, E finaliza a sessão, E retorna para a página inicial,
Resultado Esperado:
ENTÃO: o sistema salva o email address, e o mantém preenchido automaticamente, para futuros acessos ao sistema.

#### CT 11 - Funcionalidade do botão mostrar/esconder senha do campo Password
Objetivo: 
Validar a funcionalidade do botão de mostrar/esconder senha existente no campo de digitar Password
Ações: 
DADO QUE: o usuário acesse a página de login do sistema através da url http://localhost:3000/login,
QUANDO: ele visualiza a página de login, E preenche Password, e clique no botão “mostrar/ocultar” senha. 
Resultado Esperado:
ENTÃO: o sistema exibe/esconde a senha que está sendo ou foi digitada.

#### CT 12 - Funcionalidade do botão “Login”
Objetivo: 
Validar a funcionalidade do botão “Login”.
Ações: 
DADO QUE: o usuário acesse a página de login do sistema através da url http://localhost:3000/login,
QUANDO: ele visualiza a página de login, E informa email address, E informa Password, E clica no botão Login,
Resultado Esperado:
ENTÃO: o sistema realiza login e exibe mensagem de sucesso “Nothing here”.

#### CT 13 – Realizar login com sucesso
Objetivo: 
Validar o comportamento do sistema quando o usuário realizar login com sucesso.
Ações: 
DADO QUE: o usuário acesse a página de login do sistema através da url http://localhost:3000/login,
QUANDO: ele visualiza a página de login, E informa email address, E informa Password, E clica no botão Login,
Resultado Esperado:
ENTÃO: o sistema realiza login e exibe mensagem de sucesso “Nothing here”.












