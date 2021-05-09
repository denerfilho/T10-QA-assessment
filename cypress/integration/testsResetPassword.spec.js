describe("Reset Password", () => {

    it("CT 01 - Exibir informações de página de reset password", () => {
        cy.visit("http://localhost:3000/reset-password/:user-id");

        // Verificar Título “Fill the form to reset your password”
        cy.get(".css-wfdyk0").should("contain", "Fill the form to reset your password");

        // Verificar Campo “New Password”
        cy.get("#field-1-label").should("contain", "New password");

        // Verificar Campo “Confirm Password”
        cy.get("#field-2-label").should("contain", "Confirm password");

        //Verificar HiperLink “Go to login”
        cy.get(".css-ad08qd").should("contain", "Go to login");

        // Verificar 1º Botão de exibir/ocultar senha de New Password
        cy.get('.css-1bpnzr3 > .chakra-form-control > .chakra-input__group > .chakra-input__right-element > .chakra-button')
            .should("exist");

        // Verificar 2º Botão de exibir/ocultar senha de New Password
        cy.get('.css-17qnj1m > .chakra-form-control > .chakra-input__group > .chakra-input__right-element > .chakra-button')
            .should("exist");

        // Botão “Change password”
        cy.get('[data-testid="submit-reset"]').should("contain", "Change password");

    });

    it("CT 02 - Não informar dados", () => {
        cy.visit("http://localhost:3000/reset-password/:user-id");

        //verificar se o status do botão Change password é DISABLE    
        cy.get('[data-testid="submit-reset"]').should('have.attr', 'disabled');

    });

    it("CT 03 - Não informar New password", () => {
        cy.visit("http://localhost:3000/reset-password/:user-id");

        // digitar “Confirm Password”
        cy.get("#field-2-label").type("12345678");

        //verificar se o status do botão Change password é DISABLE    
        cy.get('[data-testid="submit-reset"]').should('have.attr', 'disabled');

    });

    it("CT 04 - Não informar Confirm password", () => {
        cy.visit("http://localhost:3000/reset-password/:user-id");

        // digitar “New Password”
        cy.get("#field-1-label").type("12345678");

        //verificar se o status do botão Change password é DISABLE    
        cy.get('[data-testid="submit-reset"]').should('have.attr', 'disabled');

    });

    it("CT 05 – Informar nova senha com menos de 7 caracteres", () => {
        cy.visit("http://localhost:3000/reset-password/:user-id");

        // digitar “New password”
        cy.get("#field-1-label").type("654321");

        // digitar "Confirm password"
        cy.get("#field-2-label").type("654321");

        //verifica msg de erro de senha menor de 7 caracteres
        cy.get(".css-gfghaq").should("contain", "The password must have at leat 7 characters.");
        
        //verificar se o status do botão Change password é DISABLE    
        cy.get('[data-testid="submit-reset"]').should('have.attr', 'disabled');

    });

    it("CT 06 – Informar nova senha para usuário inexistente", () => {
        cy.visit("http://localhost:3000/reset-password/:user-id");

        // digitar “New password”
        cy.get("#field-1-label").type("12345678");

        // digitar "Confirm password"
        cy.get("#field-2-label").type("12345678");
        
        //Clicar botão Change password     
        cy.get('[data-testid="submit-reset"]').click();

        //verificar msg de erro "User not found"
        cy.get(".css-12afuj0").should("contain", "User not found");

    });

    it("CT 07 – Informar nova senha para usuário inválido", () => {
        cy.visit("http://localhost:3000/reset-password/euAmoT10");

        // digitar “New password”
        cy.get("#field-1-label").type("12345678");

        // digitar "Confirm password"
        cy.get("#field-2-label").type("12345678");
        
        //Clicar botão Change password     
        cy.get('[data-testid="submit-reset"]').click();

        //verificar msg de erro "User not found"
        cy.get(".css-12afuj0").should("contain", "User not found");

    });

    it("CT 08 – Informar “New password” diferente de “Confirm password", () => {
        cy.visit("http://localhost:3000/reset-password/user@t10.digital");

        // digitar “New password”
        cy.get("#field-1-label").type("12345679");

        // digitar "Confirm password"
        cy.get("#field-2-label").type("12345678");
               
        //verificar se o status do botão Change password é DISABLE    
        cy.get('[data-testid="submit-reset"]').should('have.attr', 'disabled');

    });

    it("CT 09 – Funcionalidade do botão Change Password", () => {
        cy.visit("http://localhost:3000/reset-password/user@t10.digital");

        // digitar “New password”
        cy.get("#field-1-label").type("12345679");

        // digitar "Confirm password"
        cy.get("#field-2-label").type("12345679");
                       
        //Clicar botão Change password     
        cy.get('[data-testid="submit-reset"]').click();

        //Verificar msg de sucesso "Password updated."
        cy.get(".Toastify__toast-body").should("contain", "Password updated.");
        

    });

    it("CT 10 – Realizar mudança de senha com sucesso", () => {
        cy.visit("http://localhost:3000/reset-password/user@t10.digital");

        // digitar “New password”
        cy.get("#field-1-label").type("12345677");

        // digitar "Confirm password"
        cy.get("#field-2-label").type("12345677");
                       
        //Clicar botão Change password     
        cy.get('[data-testid="submit-reset"]').click();

        //Verificar msg de sucesso "Password updated."
        cy.get(".Toastify__toast-body").should("contain", "Password updated.");
        

    });

    it("CT 11- Verificar funcionalidade dos botões Hide/show Password", () => {
        cy.visit("http://localhost:3000/reset-password/user@t10.digital");

        // digitar “New password”
        cy.get("#field-1-label").type("12345678");
        
        // digitar "Confirm password"  ..
        cy.get("#field-2-label").type("12345678");

        // clicar 1º Botão para exibir New password 
        cy.get('.css-1bpnzr3 > .chakra-form-control > .chakra-input__group > .chakra-input__right-element > .chakra-button')
            .click();

        //clicar 2º Botão para exibir senha Confirm password 
        cy.get('.css-17qnj1m > .chakra-form-control > .chakra-input__group > .chakra-input__right-element > .chakra-button')
        .click();
    
        //confere se a senha está visível
        cy.get('[type="text"]').should("exist");

        // clicar 1º Botão para ocultar New password 
        cy.get('.css-1bpnzr3 > .chakra-form-control > .chakra-input__group > .chakra-input__right-element > .chakra-button')
            .click();

        //clicar 2º Botão para ocultar senha Confirm password 
        cy.get('.css-17qnj1m > .chakra-form-control > .chakra-input__group > .chakra-input__right-element > .chakra-button')
        .click();

        //confere se a senha está oculta
        cy.get('[type="password"]').should("exist");

    });

})
