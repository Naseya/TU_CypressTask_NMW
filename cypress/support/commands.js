import selectors from "./selectors"

let errorMessage = ' Deze combinatie klantnummer / gebruiker / wachtwoord is bij ons niet bekend. Let op: Gebruiker is hoofdlettergevoelig.'
let counter = 0     

Cypress.Commands.add('logIn', () => {
    cy.get('#atg_store_registerLoginCustomerNumber').type('3827110')
    cy.get('#atg_store_registerLoginEmailAddress').type('Arslan')
    cy.get('#atg_store_registerLoginPassword').type('Test@123456789!')
    cy.get('#fakeLoginBtn').click()
})

Cypress.Commands.add('toWebsite', () => {
    cy.visit('https://accept.ocp.technischeunie.nl')
    cy.get('#onetrust-accept-btn-handler').click()
})

Cypress.Commands.add('checkMessage', () => {
    cy.get(selectors.loginFailedMsg)
    .should('contain', errorMessage)
    .and('be.visible')
    .log('***FUNCTION IS BEING USED***')
})

Cypress.Commands.add('countLoginAttempts', () =>{
    counter += 1
    cy.log('Login attempts: ' + counter)
})

Cypress.Commands.add('toReturnPage', () => {
    cy.get('#orderNavSubList').invoke('show')
    cy.wait(300)

    //Element contains property: "display:none"
    cy.contains('Retourneren').click({force:true})

    //Element "Ik begrijp de voorwaarden" is covered by another element    
    cy.scrollTo('bottom') 
    cy.contains('Ik begrijp de voorwaarden', {timeout: 5000})
      .scrollIntoView()
      .click({force:true})
    
    /*Here I wished to request a new session, but unfortunately the 
    "Ik begrijp de voorwaarden" button had to be clicked by force, due
    to its cover. Otherwise I would have applied the method below

    cy.scrollTo('top')    
    cy.get('#newRequest',{timeout:10000}).scrollIntoView().click()
    */  
})




Cypress.Commands.add('captchaCheck', () => {
    // cy.get('body').then((body) => {
    //     if (body.find('bullshit')) {
    //         cy.log("***Captcha protection appeared too early***")
    //     }
    //     else {
    //         cy.log("***Captcha protection appeared too late***")
    //     }
    // })      
})   


