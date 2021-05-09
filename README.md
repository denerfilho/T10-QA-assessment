Conforme combinamos, segue a case para sua avaliação.

Para encontrar os arquivos de teste, siga o caminho dentro do projeto: “qa-assessment-main > cypress > integration”. Lá estarão os 3 arquivos .spec.js: testsPaginaForgot,testsPaginaLogin e testsResetPassword.

Seguindo o caminho dentrodo projeto: “qa-assessment-main > cypress > documentation, encontrará 4 arquivos .md: bug_login, cenarios_forgot_password,cenarios_login e cenarios_Reset_Password.OBS: 

Para realização do teste 10 (Funcionalidade do checkbox'Remember me’) da página "cenarios_Reset_Password", foi detectado que o mesmo não está funcionando como deveria. Logo o teste 10 irá falhar, pois buscará por elementos que deveriam estar no DOM, porém não estão. Esta, e mais outra falha grave de segurança foram reportados arquivo bug_login.md