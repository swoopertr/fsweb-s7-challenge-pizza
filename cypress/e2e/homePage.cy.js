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

  User;
  it("check home-button clickTest", () => {
    cy.get(".home-button").click();
    cy.url().should("include", "/pizzaorder"); //include içermek olarak kullanılıyor. Yani butona tıkladığımızda url  /pizzaorder ı içeriyor mu demek oluyor
    cy.go("back");
    cy.url().should("not.include", "/pizzaorder");
  });

  it("check home-container img", () => {
    cy.get(".home-container").should("have.css", "background-image", 'url("http://localhost:5173/src/assets/images/home-banner.png")');
  });

  it("should have 6 options in the category-items list", () => {
    cy.get(".category-container").find("li").should("have.length", 6);
  });

  it("check category-container child4", () => {
    cy.get(":nth-child(4) > .category-items > a").should("text", "Kızartmalar");
  });

  it("check header-container img", () => {
    cy.get("#header-container img").should("have.attr", "src", "/src/assets/logo.svg");
  });

  it("check bigpart-container img", () => {
    cy.get(".big-part-container").should("have.css", "background-image", 'url("http://localhost:5173/src/assets/cta/kart-1.png")');
  });
});
