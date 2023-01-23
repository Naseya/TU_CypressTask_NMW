/*                 ======= ANOMALY DETECTED ======
When a customer arrives on the return page and chooses to search based on 
their order reference ("a"), clicks on "Zoeken", then they will be provided 
with a list of invoices. This list has shown some malfunctioning:

If a customer clicks on one of these invoices, then there is a great chance that 
they will not be provided with the dropdown which include the checkbox to add that
item to their selection. 


Expected outcome - when a custumer clicks on an invoice, they should always see a 
                   dropdown with the article name, the amount of ordered
                   items, the article number and a checkbox. 

Actual result    - when a customer clicks on an invoice, they sometimes 
                   with a dropdown including the article name, the amount of ordered
                   items, the article number and a checkbox. The waiting time 
                   for these elements to show can be up till 40 seconds. 
*/

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

        //Search through order reference
        cy.get(selectors.orderRefRadioBtn).click({force:true})
        cy.scrollTo('top')
        cy.get(selectors.inputFieldProperty).type('a', {force:true})
        cy.get(selectors.returnPageSearchBtn).click({force:true})
        
        cy.scrollTo('center')
        cy.wait(10000)

        //Check whether the checkbox of an invalid option is actually disabled.
        cy.get('[data-cy="toggleInvoice-6090313"]').invoke('show')
        cy.get('[data-cy="toggleInvoice-6090313"]').click({force:true})
        cy.get('[data-cy="product-row-4336244"]')
          .should('contain', 'Retour sturen is niet toegestaan.')  
        cy.get('[data-cy="4336244-6090313-invci6238566-addProduct-checkbox"] > fieldset')
          .click({force:true})
          .should('not.be.checked')

        //Selecting a possible option and checking whether the 'ordered' message is present
        cy.get('[data-cy="9129613-selectInvoice"] > .wrapper-rows > .row-one > .col-one', {timeout: 5000})
          .click({force:true})  
        cy.get('[data-cy="product-row-2452464"]')
          .should('contain', 'Besteld:')
        cy.get('[data-cy="2452464-9129613-invci17772834-addProduct-checkbox"] > fieldset > label.primary')
          .click({force:true})  
        
        //Add selection
        cy.get(selectors.returnPageSubmit)
          .click({force:true})  
            
    })
})