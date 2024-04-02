
describe("Form Page Elements Exist", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/pizzaorder");
    });

   it('pizza size buttons click', () => {
        let buttons = cy.get('.radio-buttons-wrapper .form-check .RadioButton-Input');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].click()
        }
    });
    it('dough type options click', () => {
        let options = cy.get('.hamur-container .dropdown-select');
        options.scrollIntoView()
        options.select('normal')
        cy.wait(2000)
        options.select('ince')
        cy.wait(2000)
        options.select('kalın')
    });
   it('dough type first option click', () => {
        cy.get('.hamur-container .dropdown-select').select('normal')
    });

})