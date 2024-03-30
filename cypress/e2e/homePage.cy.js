describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("basic test", () => {
    expect(true).to.equal(true);
  });

  it("check home-firsat class value", () => {
    cy.get(".home-firsat").should("contain", "fırsatı kaçırma");
  });

  it("check home-container first part1", () => {
    cy.get(".home-container > :nth-child(2)").should("contain", "KOD ACIKTIRIR");
  });

  it("check home-container first part2", () => {
    cy.get(".home-container > :nth-child(3)").should("contain", "PIZZA, DOYURUR");
  });

  it("check category-items clickTest", () => {
    cy.get(".ListItems > :nth-child(2) > .category-items").click();
    cy.get(".foodItemsFrame").should("have.length", 3);
  });
});
