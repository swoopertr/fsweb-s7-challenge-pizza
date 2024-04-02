describe("Success Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/success");
  });

  it("should render SuccessTitle component", () => {
    cy.get(".success-container").within(() => {
      cy.get(".success-title").should("exist");; // SuccessTitle bileşeninin var olduğunu kontrol et
    });
  });

  it("should render SuccessAbout component", () => {
    cy.get(".success-container").within(() => {
      cy.get(".success-about").should("exist"); // SuccessAbout bileşeninin var olduğunu kontrol et
    });
  });

  it("should render SuccessResult component", () => {
    cy.get(".success-container").within(() => {
      cy.get(".success-result").should("exist"); // SuccessResult bileşeninin var olduğunu kontrol et
    });
  });

  it("should display customer order details", () => {
    cy.get(".success-container").within(() => {
      cy.contains("Order Details").should("exist"); // "Order Details" metnini içeren bir elementin var olduğunu kontrol et
      // Diğer sipariş detaylarını burada kontrol edebilirsiniz
    });
  });
});
