describe("Login", () => {
    beforeEach(() => cy.visit("http://localhost:3000/login"));
    
    
   it("CT 01 - Exibir informações de página de login", () => {

        //verificar texto na tela “Sign in to your account”
        cy.get("h1").should("contain", "Sign in to your account");

        //verifica Link “Or create your account for free”
        cy.get(".css-0").should("contain", "Or create your account for free");

        //verificar Subtítulo “Fill the fields below to login”
        cy.get(".css-wfdyk0").should("contain", "Fill the fields below to login");

        //verificar Campo”Email address”
        cy.get("#field-1-label").should("contain", "Email address");

        //verificar Campo “Password”
        cy.get("#field-2-label").should("contain", "Password");

        //verificar Checkbox “Remember me”
        cy.get(".css-gxkuxx").should("exist");
        cy.get(".css-1sgc0qu").should("exist");
        
        //verificar HiperLink “Forgot my password”
        cy.get(".css-k5ltf5").should("contain", "Forgot my password");

        //verificar Botão “Login”
        cy.get(".css-1b7zx0t").should("contain", "Login");
        
        //verificar Botão de exibir/ocultar senha
        cy.get(".css-1c7flzl").should("exist");

    });
 
   it("CT 02 - Não informar dados de login", () => {

        //verifica se status do botão Login é "disable"
        cy.get('[data-testid=submit-login]').should('have.attr', 'disabled');

    });
            
   it("CT 03 - Não informar email address", () => {

        //clicar e digitar senha
        cy.get("#field-2").type("12345678");

        //verifica se status do botão Login é "disable"
        cy.get('[data-testid=submit-login]').should('have.attr', 'disabled');
    });

   it("CT 04 - Não informar password", () => {
        
        //clicar e digitar usuario
        cy.get("#field-1-label").type("user@t10.digital");

        //verifica se status do botão Login é "disable"
        cy.get('[data-testid=submit-login]').should('have.attr', 'disabled');
         
    }); 
       
   it("CT 05 - Informar dados inválidos", () => {
       
       //clicar e digitar usuario inválido
       cy.get("#field-1-label").type("usert10.digital");

       //receber msg de erro “Insert a valid email address.”
       cy.get("#field-1-feedback").should("contain","Insert a valid email address.");

       //clicar e digitar senha inválida
       cy.get("#field-2-label").type("123456"); 
       
       //receber msg de erro “Insert a valid email address.”
       cy.get("#field-2-feedback").should("contain","The password must have at leat 7 characters.");

       //verifica se status do botão Login é "disable"
       cy.get('[data-testid=submit-login]').should('have.attr', 'disabled');
        
   });

   it("CT 06 - Informar Email Address inválido", () => {

       //clicar e digitar usuario inválido
       cy.get("#field-1-label").type("usert10.digital");

       //receber msg de erro “Insert a valid email address.”
       cy.get("#field-1-feedback").should("contain","Insert a valid email address.");

       //clicar e digitar senha válida
       cy.get("#field-2-label").type("12345678"); 

       //verifica se status do botão Login é "disable"
       cy.get('[data-testid=submit-login]').should('have.attr', 'disabled');

   });

   it("CT 07 - Informar Password com menos de 7 caracteres", () => {

    //clicar e digitar usuario válido
    cy.get("#field-1-label").type("user@t10.digital");

    //clicar e digitar senha inválida
    cy.get("#field-2-label").type("123456"); 
    
    //receber msg de erro “Insert a valid email address.”
    cy.get("#field-2-feedback").should("contain","The password must have at leat 7 characters.");

    //verifica se status do botão Login é "disable"
    cy.get('[data-testid=submit-login]').should('have.attr', 'disabled');

   });
    
   it("CT 08 - Informar Email Address inexistente", () => {

   //clicar e digitar usuario inexistente
   cy.get("#field-1-label").type("dener@t10.digital");

   //clicar e digitar senha válida
   cy.get("#field-2-label").type("12345678"); 

   //clicar em login
   cy.get('[data-testid=submit-login]').click();

   //receber msg de erro ""
   cy.get(".css-12afuj0").should("contain","Email or password are incorrect. Try again."); 

   });

   it("CT 09 - Funcionalidade do hiperlink 'Forgot my password'", () => {
   
    //clica em hiperlink "Forgot my password"
    cy.get(".css-k5ltf5").click();

    //verifica se a mudança de pagina ocorreu, verificando elemento
    cy.get(".css-wfdyk0").should("contain", "Fill the field below with your email");

   });
    
   it.only("CT 10 - Funcionalidade do checkbox 'Remember me'", () => {
    //clicar e digitar usuario
    cy.get("#field-1-label").type("user@t10.digital");

    //clicar e digitar senha
    cy.get("#field-2-label").type("12345678");   

    //clica no remember me
    cy.get('.css-gxkuxx').click();

    //clica no botão Login
     cy.get('[data-testid=submit-login]').click();
    //cy.wait(1000);

    //verificar se logou com sucesso, buscando nothing here 
    cy.get('button').should("contain", "Nothing here");

    //clica em Nothing here
    cy.get('button').click();
    cy.wait(1000);

    //Considerando que o remeber me funcionou, digitar senha e clicar em logar
    cy.get("#field-58-label").type("12345678");   
    cy.get('[data-testid=submit-login]').click();


   });
  
   it("CT 11 - Funcionalidade do botão mostrar/esconder senha do campo Password", () => {

   //clicar e digitar senha
   cy.get("#field-2").type("12345678"); 

   //clicar em mostrar senha
   cy.get(".css-onkibi").click();

   //conferir se senha está visible
   cy.get('[type="text"]').should("exist");

   //clicar em esconder senha
   cy.get(".css-onkibi").click();

   //confirmar que senha não está visible
   cy.get('[type="Password"]').should("exist");

   });

   it("CT 12 - Funcionalidade do botão 'Login'", () => {

    //clicar e digitar usuario
    cy.get("#field-1-label").type("user@t10.digital");

    //clicar e digitar senha
    cy.get("#field-2").type("12345678");   

    //clica no botão Login
    cy.get('[data-testid=submit-login]').click();

    //verica sucesso de login encontrando nothing here  
    cy.get('button').should("contain", "Nothing here");

   });

   it("CT 13 - Realizar Login com Sucesso", () => {
        
    //clicar e digitar usuario
    cy.get("#field-1-label").type("user@t10.digital");

    //clicar e digitar senha
    cy.get("#field-2").type("12345678");   

    //clica no botão Login
    cy.get('[data-testid=submit-login]').click();

    //verica sucesso de login encontrando nothing here  
    cy.get('button').should("contain", "Nothing here");
 
});


})