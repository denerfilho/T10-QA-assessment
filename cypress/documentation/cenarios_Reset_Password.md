CRITÉRIOS:

#### CT 01 - Exibir informações de página de reset password 
Objetivo: 
Validar o comportamento do sistema ao exibir a página de reset password.
Ações: 
DADO QUE: o usuário acesse a página de reset password, através da url `http://localhost:3000/reset-password/:user-id`,
QUANDO: ele visualiza a página de reset password, 
Resultado Esperado:
ENTÃO: o sistema exibe as seguintes informações:
•	Título “Fill the form to reset your password”
•	Campo “New Password”
•	Campo “Confirm Password”
•	HiperLink “Go to login”
•	1º Botões de exibir/ocultar senha de New Password
•	2º Botão de exibir/ocultar senha de New Password
•	Botão “Change password”


#### CT 02 - Não informar dados
Objetivo: 
Validar o comportamento do sistema quando o usuário não informar “New password” e “Confirm password”.
Ações: 
DADO QUE: o usuário acesse a página de reset password, através da url `http://localhost:3000/reset-password/:user-id`,
QUANDO: ele visualiza a página, E não informa “New password”, E não informa “Confirm password”, 
Resultado Esperado:
ENTÃO: o sistema não permite clicar no botão “Change password”.


#### CT 03 - Não informar New password
Objetivo: 
Validar o comportamento do sistema quando o usuário não informar “New password” 
Ações: 
DADO QUE: o usuário acesse a página de reset password, através da url `http://localhost:3000/reset-password/:user-id` ,
QUANDO: ele visualiza a página, E não informa “New password”, E insere “Confirm password”, 
Resultado Esperado:
ENTÃO: o sistema não permite clicar no botão “Change password”.


#### CT 04 - Não informar Confirm password
Objetivo: 
Validar o comportamento do sistema quando o usuário não informar “Confirm password” 
Ações: 
DADO QUE: o usuário acesse a página de reset password, através da url `http://localhost:3000/reset-password/:user-id` ,
QUANDO: ele visualiza a página, E insere “New password”, E não informa “Confirm password”, 
Resultado Esperado:
ENTÃO: o sistema não permite clicar no botão “Change password”.


#### CT 05 – Informar nova senha com menos de 7 caracteres
Objetivo: 
Validar o comportamento do sistema quando o usuário informar nova senha com menos de 7 caracteres
Ações: 
DADO QUE: o usuário acesse a página de reset password, através da url `http://localhost:3000/reset-password/:user-id` ,
QUANDO: ele visualiza a página, E insere “New password”, E insere “Confirm password”, ambos com menos de 7 caracteres,
Resultado Esperado:
ENTÃO: o sistema exibe mensagem de erro “The password must have at leat 7 characters.” E não permite clica em Change password.


#### CT 06 – Informar nova senha para usuário inexistente
Objetivo: 
Validar o comportamento do sistema quando o usuário tentar cadastrar nova senha para usuário inexistente.
Ações: 
DADO QUE: o usuário acesse a página de reset password, através da url `http://localhost:3000/reset-password/:user-id` , com Id de usuário inexistente,
QUANDO: ele visualiza a página, E insere “New password”, E insere “Confirm password”, e clica em Change password
Resultado Esperado:
ENTÃO: o sistema exibe mensagem de erro “User not found”.


#### CT 07 – Informar nova senha para usuário inválido
Objetivo: 
Validar o comportamento do sistema quando o usuário tentar cadastrar nova senha para usuário inválido.
Ações: 
DADO QUE: o usuário acesse a página de reset password, através da url `http://localhost:3000/reset-password/:user-id` , com Id de usuário inválida,
QUANDO: ele visualiza a página, E insere “New password”, E insere “Confirm password”, e clica em Change password
Resultado Esperado:
ENTÃO: o sistema exibe mensagem de erro “User not found”.


#### CT 08 – Informar “New password” diferente de “Confirm password”
Objetivo: 
Validar o comportamento do sistema quando o usuário informar New Password diferente de Confirm password 
Ações: 
DADO QUE: o usuário acesse a página de reset password, através da url `http://localhost:3000/reset-password/:user-id` ,
QUANDO: ele visualiza a página, E insere “New password”, E insere “Confirm password”, ambos os campos com dados diferentes,
Resultado Esperado:
ENTÃO: o sistema não permite clicar em “Change Password” 


#### CT 09 – Funcionalidade do botão Change Password
Objetivo: 
Validar a funcionalidade do botão “Change password”.
Ações: 
DADO QUE: o usuário acesse a página de reset password, através da url `http://localhost:3000/reset-password/:user-id`,
QUANDO: ele visualiza a página, E informa “New password”, E informa “Confirm password”, E clica em “Change password”,
Resultado Esperado:
ENTÃO: o sistema realiza a troca da senha e exibe mensagem de sucesso “Password updated.”.


#### CT 10 – Realizar mudança de senha com sucesso 
Objetivo: 
Validar o comportamento do sistema quando o usuário realizar troca de senha com sucesso.
Ações: 
DADO QUE: o usuário acesse a página de reset password, através da url `http://localhost:3000/reset-password/:user-id`,
QUANDO: ele visualiza a página, E informa “New password”, E informa “Confirm password”, E clica em “Change password”,
Resultado Esperado:
ENTÃO: o sistema realiza a troca da senha e exibe mensagem de sucesso “Password updated.”.


#### CT 11- Verificar funcionalidade dos botões Hide/show Password
Objetivo: 
Validar o comportamento do sistema quando o usuário clicar sobre botões HIDE/SHOW Password.
Ações: 
DADO QUE: o usuário acesse a página de reset password, através da url `http://localhost:3000/reset-password/:user-id`,
QUANDO: ele visualiza a página, E informa “New password”, E informa “Confirm password”, E clica em “Hide/Show” password,
Resultado Esperado:
ENTÃO: o sistema torna visível as senhas digitadas. Caso seja clicado novamente, as senhas voltam a ficarem ocultas.



