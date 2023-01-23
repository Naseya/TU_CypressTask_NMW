import selectors from "../support/selectors"

/*This test sometimes fails, due to the unhandled saved input 
from earlier attempts. This should have been solved by testing the
yellow bar, which asks whether you would like to start a new order when
entering the retour page. Run it a few (probably 3 or more) times, or make sure
that you manually start a new order (inside the yellow bar on top, after clicking
    "Ik begrijp de voorwaarden") before running the test. 
so that you will see that it does what it is supposed to do!*/ 

describe('Successful login', () => {
        
    it('Visit TU and log in', () => {
        cy.toWebsite()
        cy.logIn()
        cy.toReturnPage()

        /*Search throught article number 
        All the buttons are "covered by another element: header search container" 
        Hence the force*/
        cy.get(selectors.artNrRadioBtn).click({force:true})
        cy.scrollTo('top')
        cy.get(selectors.inputFieldProperty).type('6944326', {force:true})
        cy.get(selectors.returnPageSearchBtn, {timeout: 5000}).click({force:true})
        cy.scrollTo('center')
        cy.get('label.primary').click({force:true})
        cy.get(selectors.returnPageSubmit).click({force:true})    

        //Reason of return: input = null
        cy.get('[data-cy="cta-step-returns-form-submit-details-button"]', {timeout:5000})
          .scrollIntoView()
          .click({force:true})
        cy.get('[index="0"]').should('contain', 'Retourreden ontbreekt') 

        //Select reason from dropdown menu, amount = 0 
        cy.get('[index="0"] > .product-row-col-2 > .product-information-container > .container-select-reason-qty > .select-reason > .selectbox > .custom-select-box > [data-cy="6944326-selectReason-select"] > .input-container > [data-cy="6944326-selectReason-input"]')
          .click({force:true})  
        cy.get('[index="0"] > .product-row-col-2 > .product-information-container > .container-select-reason-qty > .select-reason > .selectbox > .custom-select-box > .items > [data-cy="option-06"]')  
          .click({force:true})

        cy.get('[data-cy="cta-step-returns-form-submit-details-button"]', {timeout:5000})
          .scrollIntoView()
          .click({force:true}) 
        cy.get('[index="0"]').should('contain', 'Het aantal ontbreekt.')
        

        //Select a reason and add an amount, then continue
        cy.get('[index="1"] > .product-row-col-2 > .product-information-container > .container-select-reason-qty > .select-reason > .selectbox > .custom-select-box > [data-cy="6944326-selectReason-select"] > .input-container > [data-cy="6944326-selectReason-input"]')
          .click({force:true})

        cy.get('[index="1"] > .product-row-col-2 > .product-information-container > .container-select-reason-qty > .select-reason > .selectbox > .custom-select-box > .items > [data-cy="option-06"]')  
          .click({force:true})

        Amount = 1
        cy.get('[data-cy="6944326-updateQuantity-plus-button"]')
        .click({force:true})

        cy.get('[data-cy="cta-step-returns-form-submit-details-button"]', {timeout:5000})
          .scrollIntoView()
          .click({force:true}) 


    })
})