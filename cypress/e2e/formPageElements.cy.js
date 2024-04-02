describe("Form Page Elements Exist", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/pizzaorder");
  });

  it("order count section exists", () => {
    cy.wait(1000);
    let orderCountContainer = cy.get(".order-count-container");
    orderCountContainer.should("exist");
    cy.get(".order-count-container > :nth-child(1)").should("have.text", "-");
    cy.get(".order-count-container > :nth-child(3)").should("have.text", "+");
    cy.get("#order-count").should("exist").should("be.visible");
  });
  it("order note section exists", () => {
    let orderNoteContainer = cy.get(".order-note-container");
    orderNoteContainer.should("exist");
    orderNoteContainer.children("h3").should("have.text", "Sipariş Notu");
    cy.get("#noteid").should("exist").should("be.visible");
  });

  it("pizza image exists", () => {
    cy.get(".customer-info-container > img")
      .should("have.attr", "src", "/src/assets/form-banner.png")
      .should("be.visible");
  });
  it("pizza description should have at least 50 chars", () => {
    cy.get(".description").invoke("text").should("have.length.gte", 50);
  });
  it("there should be 3 pizza size buttons", () => {
    cy.get(".radio-buttons-wrapper .form-check .RadioButton-Input").should(
      "have.length",
      3
    );
  });
  it("there should be 3 dough type options", () => {
    cy.get(".hamur-container .dropdown-select .dropdownOption")
      .should("have.length", 3)
      .should("be.visible");
  });

  // Sinan: Egemen buraya malzeme container bölümleri var mı ve sayısı kaç tane onun testi yazılacak bir zahmet.

  it("toppings-section exists", () => {
    cy.get(".toppings-section")
      .should("be.visible")
      .invoke("text")
      .should((text) => {
        expect(text).to.contain("Ek Malzemeler");
      });
  });

  it("topping-warning-font exists", () => {
    cy.get(".topping-warning-font")
      .should("be.visible")
      .invoke("text")
      .should((text) => {
        expect(text).to.contain("En fazla 10 malzeme seçebilirsiniz. 5₺");
      });
  });

  it("Malzeme container exists with correct number of checkboxes and is visible", () => {
    cy.get(".malzemecontainer")
      .find('input[type="checkbox"]')
      .should("have.length", 14) 
    //   .should("be.visible");
});


  it("order-note-container exists", () => {
    cy.get(".order-note-container > .size-font")
      .should("be.visible")
      .invoke("text")
      .should((text) => {
        expect(text).to.contain("Sipariş Notu");
      });
  });

  it("check if element is textarea", () => {
    cy.get("#noteid")
      .should(($textarea) => {
        expect($textarea.get(0).tagName.toLowerCase()).to.equal("textarea");
      })
      .should("be.visible");
  });

  it("order-count-container buttons exists", () => {
    cy.get(".order-count-container")
      .find("button")
      .should("have.length", 2)
      .should("be.visible")
  });

  it("order-sum-container and its elements exist with correct content", () => {
    cy.get('.order-sum-container')
      .find("p")
      .should(($p) => {
        
        expect($p).to.have.length(5);
        
        expect($p.eq(0)).to.contain("Seçimler");
        expect($p.eq(1)).to.contain("Pizza");
        expect($p.eq(2)).to.contain("Boyut");
        expect($p.eq(3)).to.contain("Hamur");
        expect($p.eq(4)).to.contain("Toplam");
      })
      .should("be.visible"); 

    
    cy.get('.order-sum-container h2')
      .should("exist") 
      .should("be.visible") 
      .contains("Sipariş Toplamı"); 
});

it("yellow button exists", () => {
    cy.get('.order-sum-container') 
      .find("button") 
      .should("be.visible") 
      .contains("SİPARİŞ VER");
});





});
