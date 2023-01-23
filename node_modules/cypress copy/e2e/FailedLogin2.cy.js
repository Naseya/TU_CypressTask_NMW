import selectors from "../support/selectors"

describe('Failed login wrong input', () => {
    it('Ensure error message(s) after wrong input', () => {
        cy.toWebsite()
        
        //Using wrong customer number
        cy.get(selectors.custNrInputBox).type('38271100')
        cy.get(selectors.usernameInputBox).type('Arslan')
        cy.get(selectors.passwordInputBox).type('Test@123456789!')
        cy.get(selectors.logInBtn).click()
        cy.checkMessage()
        
        cy.reload(true)
        //Using wrong username 
        cy.get(selectors.custNrInputBox).type('3827110')
        cy.get(selectors.usernameInputBox).type('Arslann')
        cy.get(selectors.passwordInputBox).type('Test@123456789!')
        cy.get(selectors.logInBtn).click()
        cy.checkMessage()

        cy.reload(true)
        //Using wrong password
        cy.get(selectors.custNrInputBox).type('3827110')
        cy.get(selectors.usernameInputBox).type('Arslan ')
        cy.get(selectors.passwordInputBox).type('Test@123456789')
        cy.get(selectors.logInBtn).click()
        cy.checkMessage()
    })
})