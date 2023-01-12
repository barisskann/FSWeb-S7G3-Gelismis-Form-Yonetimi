describe("base URL", () => {
  const bosYapi = "";
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("input-dogrulama", () => {
    cy.get(".test-isim").type("selam").should("have.value", "selam");
  });
  it("form-kontrol", () => {
    cy.get(".test-isim").type("BARIŞ KAN").should("not.have.value", bosYapi);
    cy.get(".test-email")
      .type("bars_958@hotmail.com")
      .should("not.have.value", bosYapi);
    cy.get(".test-sifre").type("SİFRE123123").should("not.have.value", bosYapi);
    cy.get(".test-checkbox").check("true");

    cy.get(".test-button")
      .click({ force: true })
      .then((res) => console.log(res));
  });
});
