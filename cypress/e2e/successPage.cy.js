describe('Success Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/success'); 
    });
  
    it('displays success title and subtitle', () => {
      cy.get('.success-title').should('have.text', 'Teknolojik Yemekler');
      cy.get('.success-subtitle').should('contain', 'TEBRİKLER!');
      cy.get('.success-subtitle').should('contain', 'SİPARİŞİNİZ ALINDI!');
    });
  
    it('has correct background color', () => {
      cy.get('body').should('have.css', 'background-color', 'rgb(206, 40, 41)');
    });
  
    it('has proper font styles', () => {
      cy.get('.success-title').should('have.css', 'font-family', 'Quattrocento, serif');
      cy.get('.success-subtitle').should('have.css', 'font-family', 'Quattrocento, serif');
      cy.get('.success-title').should('have.css', 'font-size').and('eq', '51.2px');
      cy.get('.success-subtitle').should('have.css', 'font-size').and('eq', '51.2px');
      cy.get('.success-subtitle').should('have.css', 'font-weight', '100');
    });
  
    it('has proper positioning', () => {
      cy.get('.success-title').should('have.css', 'padding-top', '190px');
      cy.get('.success-title').should('have.css', 'margin-top', '-350px');
    });
  });
  