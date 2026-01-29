/// <reference types="cypress" />

describe('Cadastro de Usuário', () => {

    //hooks

    beforeEach(() => {
        cy.visit('/register');
    });

    it('Cadastro com sucesso', () => {

        //preencher campos
        const name = 'Carlos Eduardo';
        cy.get('#user').type(name);
        cy.get('#email').type('carlos.eduardo@example.com');
        cy.get('#password').type('senhaSegura123');
        cy.get('#btnRegister').click();

        //validações
        cy.get('#swal2-title')
            .should('have.text', 'Cadastro realizado!')
            .should('be.visible');
        cy.get('#swal2-html-container')
            .should('have.text', `Bem-vindo ${name}`)
            .should('be.visible');
        cy.get('.swal2-confirm').click();
    });

    it('Cadastro com nome vazio', () => {
        cy.get('#email').type('carlos.eduardo@example.com');
        cy.get('#password').type('senhaSegura123');
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('have.text', 'O campo nome deve ser prenchido')
            .should('be.visible');
    });

    it('Cadastro com e-mail vazio', () => {
        const name = 'Carlos Eduardo';
        cy.get('#user').type(name);
        cy.get('#password').type('senhaSegura123');
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('have.text', 'O campo e-mail deve ser prenchido corretamente')
            .should('be.visible');
    });

    it('Cadastro com senha vazia', () => {
        const name = 'Carlos Eduardo';
        cy.get('#user').type(name);
        cy.get('#email').type('carlos.eduardo@example.com');
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
            .should('be.visible');
    });

    it('Cadastro com e-mail inválido', () => {
        const name = 'Carlos Eduardo';
        cy.get('#user').type(name);
        cy.get('#email').type('carlos.1637823.com.br');
        cy.get('#password').type('senhaSegura123');
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('have.text', 'O campo e-mail deve ser prenchido corretamente')
            .should('be.visible');
    });

    it('Cadastro com senha inválida < (menor que 5 digitos) ', () => {
        const name = 'Carlos Eduardo';
        cy.get('#user').type(name);
        cy.get('#email').type('carlos.eduardo@example.com');
        cy.get('#password').type('1234');
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
            .should('be.visible');

    });

});