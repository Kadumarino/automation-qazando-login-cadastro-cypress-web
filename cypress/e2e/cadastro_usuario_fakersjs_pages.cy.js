/// <reference types="cypress" />

import { fa, faker } from '@faker-js/faker';
const cadastro_page = require('../support/pages/cadastro_pages');

describe('Cadastro de Usuário', () => {

    //hooks

    beforeEach(() => {
        cy.visit('/register');
    });

    it('Cadastro com sucesso', () => {

        //preencher campos
        const name = faker.person.fullName();

        cadastro_page.preencherNome(name);
        cadastro_page.preencherEmail(faker.internet.email());
        cadastro_page.preencherSenha(faker.internet.password({ length: 6 }));
        cadastro_page.clicarCadastrar();
        cadastro_page.validarCadastro(name);
    });

    it('Cadastro com nome vazio', () => {
        cy.preencherEmail(faker.internet.email());
        cy.preencherSenha(faker.internet.password({ length: 6 }));
        cy.clicarCadastrar();
        cy.validarErroCadastro('O campo nome deve ser prenchido');
    });

    it('Cadastro com senha vazia', () => {
        const name = faker.person.fullName();
        cy.preencherNome(name);
        cy.preencherEmail(faker.internet.email());
        cy.clicarCadastrar();
        cy.validarErroCadastro('O campo senha deve ter pelo menos 6 dígitos');
    });

    it('Cadastro com e-mail inválido', () => {
        const name = faker.person.fullName();
        cy.preencherNome(name);
        cy.preencherEmail('carlos.1637823.com.br');
        cy.preencherSenha(faker.internet.password({ length: 6 }));
        cy.clicarCadastrar();
        cy.validarErroCadastro('O campo e-mail deve ser prenchido corretamente');
    });

    it('Cadastro com senha inválida < (menor que 5 digitos) ', () => {
        const name = faker.person.fullName();
        cy.preencherNome(name);
        cy.preencherEmail(faker.internet.email());
        cy.preencherSenha(faker.internet.password({ length: 4 }));
        cy.clicarCadastrar();
        cy.validarErroCadastro('O campo senha deve ter pelo menos 6 dígitos');

    });

});