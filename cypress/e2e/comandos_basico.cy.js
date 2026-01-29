/// <reference types="cypress" />

describe("Comandos Básicos", () => {
  it("Encontrar um elemento", () => {
    cy.visit("https://www.automationpratice.com.br/login");
    // get - busca um elemento
    cy.get("#user");

    // find - busca um elemento dentro de outro elemento
    cy.get(".mc-form").find(".form-control");

    // contains - busca um elemento pelo texto
    cy.get(".mc-form").contains("Send");
  });

  it("Preencher um campo", () => {
    cy.visit("https://www.automationpratice.com.br/login");
    cy.get("#user").type("carlos@carlos.com");
    cy.get(".mc-form").find(".form-control").type("carlos@carlos.com{enter}");
  });

  it("Clicar em um elemento", () => {
    cy.visit("https://www.automationpratice.com.br/login");
    cy.get("#btnLogin").click();
    // cy.get('#btnLogin').rightclick();
    // cy.get('#btnLogin').dblclick();
  });

  it("Select", () => {
    cy.visit("https://www.automationpratice.com.br/checkout-one");
    cy.get("#country").select("usa"); // ou pela posicao .select(1);
  });

  it("checkBox e RadioButton", () => {
    cy.visit("https://www.automationpratice.com.br/checkout-one");
    //cy.get('#materialUnchecked').check(); //uncheck();
    cy.get("#css").check(); //radio button //uncheck nao funciona em radio
  });

  it("Validação de texto", () => {
    cy.visit("https://www.automationpratice.com.br/login");
    cy.get("#createAccount")
      .should("be.visible")
      .should("contain", "Ainda não tem conta?");
  });
});
