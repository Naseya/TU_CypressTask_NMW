/*This test sometimes fails, due to the unhandled saved input 
from earlier attempts. This should have been solved by testing the
yellow bar, which asks whether you would like to start a new order when
entering the retour page. Run it a few (probably 3 or more) times, or make sure
that you manually start a new order (inside the yellow bar on top, after clicking
    "Ik begrijp de voorwaarden") before running the test.
so that you will see that it does what it is supposed to do!*/

import selectors from "../support/selectors"

describe('Successful login', () => {
    it('Visit TU and log in', () => {
        cy.toWebsite()
        cy.logIn()
        cy.toReturnPage()

        //Search through invoice --> All the buttons are covered by another element: header search container, hence the force
        cy.get(selectors.invoiceNrRadioBtn).click({force:true})
        cy.scrollTo('center')
        cy.get(selectors.inputFieldProperty).type('9207396', {force:true})
        cy.get(selectors.returnPageSearchBtn, {timeout: 5000}).click({force:true})
        cy.scrollTo('center')
        cy.get('[data-cy="toggleInvoice-9207396"]').click({force:true})

        //Checkboxes have property - "display:none", hence the force
        //Verify that invalid options are disabled
        cy.get('[data-cy="product-row-2136604"]').contains('Retour sturen is niet toegestaan.')
        cy.get('[data-cy="product-row-2136604"]')
          .click({force:true})
          .should('not.be.checked')
        
        //Select a valid option and add selection
        cy.get('[data-cy="4076212-9207396-invci18124796-addProduct-checkbox"] > fieldset > label.primary')
        .scrollIntoView({timeout: 5000})
        .click({force:true})
        cy.get(selectors.returnPageSubmit).click({force:true})
    })
})