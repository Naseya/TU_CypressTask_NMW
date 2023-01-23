//reference Cypress to be found inside "cypress.confiq.js"
//This file tests whether the Cypress setup contains any issues

describe('Test', () => {
    it('Google Search', () => {
        cy.visit('https://google.com')
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('.gLFyf').type('It is working perfectly fine{Enter}')

        //First try 
        //cy.contains('Google Zoeken').click()

        //Second try => control keyboard by using {Enter}
    })
})
