Cypress.Commands.add('fillInName', function(user){
    cy.get("[name='username']")
      .type(user)
}) 

Cypress.Commands.add('fillInPassword', function(whritePassword){
  cy.get("[name='password']")
    .type(whritePassword)
}) 

Cypress.Commands.add('clickButton', function(password){
  cy.get("[type='submit']")
      .click()
})

Cypress.Commands.add('buttonForgotPassword', function(password){
  cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.orangehrm-login-forgot > p')
      .click()
})