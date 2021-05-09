describe("Forgot Password", () => {
    beforeEach(() => cy.visit("http://localhost:3000/login"));


it("CT 01 - Exibir informações de página de forgot password", () => {
    //clicar em forgot password
    cy.get(".css-k5ltf5").click();

    //verifica title na tela "Título “Fill the field below with your email”
    cy.get(".css-wfdyk0").should("contain", "Fill the field below with your email");

    //verifica Campo “Email address”
    cy.get("#field-1-label").should("contain", "Email address");

    //verifica Botão “Send”
    cy.get('[data-testid=submit-forgot]').should("contain", "Send");

    //verifica Hiperlink “Go to login”
    cy.get(".css-ad08qd").should("contain", "Go to login");

});

it("CT 02 - Não informar Email Address", () => {
    //clicar em forgot password
    cy.get(".css-k5ltf5").click();

    //verifica se status do botão Send é "disable"
    cy.get('[data-testid=submit-forgot]').should('have.attr', 'disabled');


});

it("CT 03 - Não informar Email válido", () => {
    //clicar em forgot password
    cy.get(".css-k5ltf5").click();

    //inserir email inválido 
    cy.get("#field-1-label").type("usert10.digital");

    //verifcar msg de erro "Insert a valid email address."
    cy.get("#field-1-feedback").should("contain", "Insert a valid email address.");

    //verifica se status do botão Send é "disable"
    cy.get('[data-testid=submit-forgot]').should('have.attr', 'disabled');

});

it("CT 04 - Não informar Email existente ", () => {
    //clicar em forgot password
    cy.get(".css-k5ltf5").click();

    //inserir email inexistente 
    cy.get("#field-1-label").type("dener@t10.digital");

    //clicar em Send
    cy.get('[data-testid=submit-forgot]').click();

    //verificar msg de erro "User not found"
    cy.get(".css-12afuj0").should("contain", "User not found");

});

it("CT 05 – Realizar envio de senha com sucesso para o email",  () => { 
    //clicar em forgot password
    cy.get(".css-k5ltf5").click();

    //inserir email existente 
    cy.get("#field-1-label").type("user@t10.digital");

    //clicar em Send
    cy.get('[data-testid=submit-forgot]').click();

    //verificar msg de sucesso "Email sent."
    cy.get('.Toastify__toast-body').should("contain", "Email sent.");

});

it("CT 06 – Funcionalidade do botão Send",  () => { 
    //clicar em forgot password
    cy.get(".css-k5ltf5").click();

    //inserir email existente 
    cy.get("#field-1-label").type("user@t10.digital");

    //clicar em Send
    cy.get('[data-testid=submit-forgot]').click();

    //verificar msg de sucesso "Email sent."
    cy.get('.Toastify__toast-body').should("contain", "Email sent.");

});

})
