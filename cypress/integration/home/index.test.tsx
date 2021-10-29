/// <reference types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should render the home page and display a message", () => {
    cy.get("button").contains("سلام");
  });

  it("should render header", () => {
    cy.get("div").contains("header");
  });

  it("should render footer", () => {
    cy.get("div").contains("footer");
  });
});

export {};
