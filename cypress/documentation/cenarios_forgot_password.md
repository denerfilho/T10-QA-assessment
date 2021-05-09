# CENARIOS DE TESTE FORGOT PASSWORD:

#### CT 01 - Exibir informações de página de forgot password 
Objetivo: 
Validar o comportamento do sistema ao exibir a página de forgot password.
Ações: 
DADO QUE: o usuário acesse a página de login, através da url `http://localhost:3000/login`,
QUANDO: ele visualiza a página, E clica em “Forgot my password”
Resultado Esperado:
ENTÃO: o sistema direciona o usuário para a url http://localhost:3000/forgot-password e exibe na tela as seguintes informações:
•	Título “Fill the field below with your email”
•	Campo “Email address”
•	Botão “Send”
•	Hiperlink “Go to login”


#### CT 02 - Não informar Email Address
Validar o comportamento do sistema quando o usuário não informar email address.
Ações: 
DADO QUE: o usuário acesse a página de login, através da url `http://localhost:3000/login`,
QUANDO: ele visualiza a página, E clica em “Forgot my password”, E visualiza a página de forgot password, E não informa o Email address
Resultado Esperado:
ENTÃO: o sistema não permite clicar no botão “Send”.


#### CT 03 - Não informar Email válido 
Objetivo: 
Validar o comportamento do sistema quando o usuário não informar email válido.
Ações: 
DADO QUE: o usuário acesse a página de login, através da url `http://localhost:3000/login`,
QUANDO: ele visualiza a página, E clica em “Forgot my password”, E visualiza a página de forgot password, E informa o Email address inválido
Resultado Esperado:
ENTÃO: o sistema exibe mensagem de erro “Insert a valid email address.”.


#### CT 04 - Não informar Email existente 
Objetivo: 
Validar o comportamento do sistema quando o usuário não informar email existente.
Ações: 
DADO QUE: o usuário acesse a página de login, através da url `http://localhost:3000/login`,
QUANDO: ele visualiza a página, E clica em “Forgot my password”, E visualiza a página de forgot password, E insere um Email address inexistente,
Resultado Esperado:
ENTÃO: o sistema exibe mensagem de erro “User not found”.

#### CT 05 – Realizar envio de senha com sucesso para o email
Objetivo: 
Validar o comportamento do sistema, quando o usuário realizar envio de senha para o email, com sucesso.
Ações: 
DADO QUE: o usuário acesse a página de login, através da url `http://localhost:3000/login`,
QUANDO: ele visualiza a página, E clica em “Forgot my password”, E visualiza a página de forgot password, E insere um Email address válido, E clica no botão “Send”,
Resultado Esperado:
ENTÃO: o sistema faz o envio da senha para o email digitado e exibe mensagem de sucesso “Email Sent.”.

#### T 06 – Funcionalidade do botão Send
Objetivo: 
Validar o comportamento do botão Send.
Ações: 
DADO QUE: o usuário acesse a página de login, através da url `http://localhost:3000/login`,
QUANDO: ele visualiza a página, E clica em “Forgot my password”, E visualiza a página de forgot password, E insere um Email address válido, E clica no botão “Send”,
Resultado Esperado:
ENTÃO: o sistema faz o envio da senha para o email digitado e exibe mensagem de sucesso “Email Sent.”.




