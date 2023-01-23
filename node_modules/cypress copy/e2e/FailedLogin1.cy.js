/*The "captchaCheck is unfortunately not working correctly due to a bug I 
could not detect. However, the principle of the method I am using should work 
after the bug has been detected and fixed. Therefore you will find some 
code in the comments inside the function in "commands.js".
For now, the empty function is still inside this code to show you how 
I would like to apply this method."*/

import selectors from "../support/selectors"

describe('Failed login empty fields', () => {
    let counter = 0     
    it('Ensure error message(s) after open text fields', () => {

        cy.toWebsite()
        //Using empty customer number 
        cy.get(selectors.usernameInputBox).type('Arslan ')
        cy.get(selectors.passwordInputBox).type('Test@123456789!')
        cy.get(selectors.custNrInputBox).clear()
        cy.get(selectors.logInBtn).click()
        cy.checkMessage()
        cy.countLoginAttempts()
        cy.captchaCheck()

        //Using empty username 
        cy.get(selectors.custNrInputBox).type('3827110')
        cy.get(selectors.passwordInputBox)
        cy.get(selectors.usernameInputBox).clear()
        cy.get(selectors.logInBtn).click()
        cy.log(counter)
        cy.checkMessage()
        cy.countLoginAttempts()
        cy.captchaCheck()
    
        //Using empty password 
        cy.get(selectors.custNrInputBox).focus().clear()
        cy.get(selectors.custNrInputBox).type('3827110')
        cy.get(selectors.usernameInputBox).type('Arslan')
        cy.get(selectors.passwordInputBox).clear()
        cy.get(selectors.logInBtn, {timeout:5000}).click()
        cy.checkMessage()
        cy.countLoginAttempts()
        cy.captchaCheck()
    })
})