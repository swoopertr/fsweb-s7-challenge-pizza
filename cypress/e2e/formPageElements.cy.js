describe('Form Page Elements Exist', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/pizzaorder'); 
    });
    
    it('order count section exists', () => {
        cy.wait(1000);
        let orderCountContainer = cy.get('.order-count-container');
        orderCountContainer.should('exist');
        cy.get('.order-count-container > :nth-child(1)').should('have.text', '-');
        cy.get('.order-count-container > :nth-child(3)').should('have.text', '+');
        cy.get('#order-count').should('exist');
        
    });
    it('order note section exists', () => {
        let orderNoteContainer = cy.get('.order-note-container');
        orderNoteContainer.should('exist')
        orderNoteContainer.children('h3').should('have.text', 'Sipariş Notu')
        cy.get('#noteid').should('exist')
    });

    it('pizza image exists', () => {
        cy.get('.customer-info-container > img').should('have.attr', 'src', '/src/assets/form-banner.png')
    });
    it('pizza description should have at least 50 chars', () => {
        cy.get('.description').invoke('text').should('have.length.gte', 50)
    });
    it('there should be 3 pizza size buttons', () => {
        cy.get('.radio-buttons-wrapper .form-check .RadioButton-Input').should('have.length', 3)
    });
    it('there should be 3 dough type options', () => {
        cy.get('.hamur-container .dropdown-select .dropdownOption').should('have.length', 3)
    });

    // Sinan: Egemen buraya malzeme container bölümleri var mı ve sayısı kaç tane onun testi yazılacak bir zahmet.
    
   /*  
    Sinan: bunlara fırsatım kalmadı ama formPageFunctions.cy.js diye ayrı bir dosyada tıklama/seçme ve siparişi verme işlevi test edilecek s
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
    }); */
  });
  