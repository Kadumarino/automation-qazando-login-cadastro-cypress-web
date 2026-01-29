/// <reference types="cypress" />

const auth = require('../fixtures/auth.json');

describe('Login', () => {

beforeEach(() => {
    cy.visit('/login');
});

it('Login com sucesso', () => {
    const login = auth.user;
    cy.get('#user').type(login);
    cy.get('#password').type(auth.password);
    cy.get('#btnLogin').click();
    cy.get('#swal2-title')
        .should('have.text', 'Login realizado')
        .should('be.visible');
    cy.get('#swal2-html-container')
        .should('have.text', `Olá, ${login}`)
        .should('be.visible');
    cy.get('.swal2-confirm').click();

});

it('Login vazio', () => {
    cy.get('#password').type('senhaSegura123');
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
        .should('be.visible');

});

it('Senha vazia', () => {
    const login = auth.user;
    cy.get('#user').type(login);
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should('have.text', 'Senha inválida.')
        .should('be.visible');
});

it('Senha com menos caracteres (<5)', () => {
    const login = auth.user;
    cy.get('#user').type(login);
    cy.get('#password').type('1234');
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should('have.text', 'Senha inválida.')
        .should('be.visible');
});


});