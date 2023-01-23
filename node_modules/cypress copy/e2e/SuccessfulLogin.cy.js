import selectors from "../support/selectors"

describe('Successful login', () => {
    it('Visit TU and log in', () => {
        cy.toWebsite()
        cy.logIn()
        
        /*It has been tested in a seperate function whether "Welkom" or "welkom" 
        appears on the Home page after logging in. In order to let Cypress continue 
        running, I have only included the assertions*/
        cy.get('#fixed-header').should('not.contain', 'Welkom')
        cy.get('#fixed-header').should('not.contain', 'welkom')
       
        cy.get(selectors.moreInfo, {timeout: 500}).click()
        cy.get(selectors.mijnGegevens).click()
        cy.get(selectors.profieloverzicht)
            .should('contain', 'Profieloverzicht')
            .and('be.visible')
    })

})
