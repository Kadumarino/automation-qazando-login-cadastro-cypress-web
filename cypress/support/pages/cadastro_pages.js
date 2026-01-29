 export function preencherNome(name) {
    cy.get('#user').type(name);
}

export function preencherEmail(email) {
  cy.get("#email").type(email);
}

export function preencherSenha(password) {
  cy.get("#password").type(password);
}

export function clicarCadastrar() {
  cy.get("#btnRegister").click();
}

export function validarCadastro(name) {
  cy.get("#swal2-title")
    .should("have.text", "Cadastro realizado!")
    .should("be.visible");
  cy.get("#swal2-html-container")
    .should("have.text", `Bem-vindo ${name}`)
    .should("be.visible");
  cy.get(".swal2-confirm").click();
}

export function validarErroCadastro(mensagem) {
    cy.get('#errorMessageFirstName')
        .should('be.visible')
        .should('have.text', mensagem);
        

}

export function cadastrarUsuario() {
        const name = faker.person.fullName();
        cy.preencherNome(name);
        cy.preencherEmail(faker.internet.email());
        cy.preencherSenha(faker.internet.password({ length: 6 }));
        cy.clicarCadastrar();
        cy.validarCadastro(name);
}