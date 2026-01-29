/// <reference types="cypress" />
import { fa, faker } from '@faker-js/faker';

describe('Login', () => {

    const tamanhosTela = ['iphone-6', 'ipad-2', 'macbook-15',
         'samsung-s10', 'samsung-s10', 'iphone-7', 'desktop'];

tamanhosTela.forEach((tamanho) => {
    beforeEach(() => {
        cy.viewport(tamanho !== 'desktop' ? tamanho : 1920, 1080);
        cy.visit('/login');
});

it(`Login com sucesso - ${tamanho}`, () => {
    const login = faker.internet.email();
    cy.get('#user').type(login);
    cy.get('#password').type(faker.internet.password({ length: 8 }));
    cy.get('#btnLogin').click();
    cy.get('#swal2-title')
        .should('have.text', 'Login realizado')
        .should('be.visible');
    cy.get('#swal2-html-container')
        .should('have.text', `Olá, ${login}`)
        .should('be.visible');
    cy.get('.swal2-confirm').click();

});

it(`Login vazio - ${tamanho}`, () => {
    cy.get('#password').type(faker.internet.password({ length: 8 }));
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
        .should('be.visible');

});

it(`Senha vazia - ${tamanho}`, () => {
    const login = faker.internet.email();
    cy.get('#user').type(login);
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should('have.text', 'Senha inválida.')
        .should('be.visible');
});

it(`Senha com menos caracteres (<5) - ${tamanho}`, () => {
    const login = faker.internet.email();
    cy.get('#user').type(login);
    cy.get('#password').type(faker.internet.password({ length: 4 }));
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should('have.text', 'Senha inválida.')
        .should('be.visible');
});

});

});