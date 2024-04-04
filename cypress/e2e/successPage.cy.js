describe("Succes Page Elements Exist", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/success");
  });

  it("basic test", () => {
    expect(true).to.equal(true);
  });

});