
import { faker } from '@faker-js/faker';

Cypress.Commands.add("preencherNome", (name) => {
  cy.get("#user").type(name);
});

Cypress.Commands.add("preencherEmail", (email) => {
  cy.get("#email").type(email);
});

Cypress.Commands.add("preencherSenha", (senha) => {
  cy.get("#password").type(senha);
});

Cypress.Commands.add("clicarCadastrar", () => {
  cy.get("#btnRegister").click();
});

Cypress.Commands.add("validarCadastro", (name) => {
  cy.get("#swal2-title")
    .should("have.text", "Cadastro realizado!")
    .should("be.visible");
  cy.get("#swal2-html-container")
    .should("have.text", `Bem-vindo ${name}`)
    .should("be.visible");
  cy.get(".swal2-confirm").click();
});

Cypress.Commands.add("validarErroCadastro", (mensagem) => {
    cy.get('#errorMessageFirstName')
        .should('be.visible')
        .should('have.text', mensagem);
        

});

Cypress.Commands.add("cadastrarUsuario", () => {
        const name = faker.person.fullName();
        cy.preencherNome(name);
        cy.preencherEmail(faker.internet.email());
        cy.preencherSenha(faker.internet.password({ length: 6 }));
        cy.clicarCadastrar();
        cy.validarCadastro(name);
});