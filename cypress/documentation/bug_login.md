#Reporte de inconsistência ou comportamento não esperado:

#### 1-	Conseguir realizar troca de senha sem autenticação
Severidade: Alta
Prioridade: Alta
Descrição: o acesso a página de reset de senha (http://localhost:3000/login/reset-password/:user-id), está extremamente vulnerável, pois não necessita de autenticação para realizar a ação de troca de senha. Qualquer usuário malicioso (que tenha acesso a essa URL e aos Emails Address de usuários), consegue realizar a troca de senha de usuário, sem qualquer nível de autenticação, tornando a conta de usuários totalmente desprotegidas a roubos e ataques.

#### 2-	O botão Remember me não está funcionando.
Severidade: Baixa
Prioridade: Média
Descrição: Ao acessar a página de login (http://localhost:3000/login), o usuário tem um check box de “Remember me”, para que o email do usuário fique salvo para próximos acessos. Porém após simular login/logoff, o “Remember me”, não realiza nenhuma ação.
Obs: Portanto, o teste “CT 10 - Funcionalidade do checkbox ‘Remember me’”, irá falhar, pois buscará o cache de email e não encontrará!




