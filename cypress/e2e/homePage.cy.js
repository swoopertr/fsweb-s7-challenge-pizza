describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/');
    });

    it("basıc test", () => {
        expect(true).to.equal(true);
    });

    it("check home-firsat class value", () => {
        cy.get('.home-firsat').should('contain', 'fırsatı kaçırma');

    });
    it("check home-firsat clickTest", () => {
        cy.get('.ListItems > :nth-child(2) > .category-items').click()
        cy.get('.foodItemsFrame').should("have.length", 3);
    });



});