

describe('Login', function() {
  beforeEach(function() {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })    

  it('Login sucess', function() {
    cy.fillInName("Admin")    
    cy.fillInPassword("admin123")
    cy.clickButton()
    cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title > span > h6')
      .should('be.visible')
      .should('have.text', 'Dashboard')  
  })

  it('Login with invalid username', function() {
    cy.fillInName("invalid")    
    cy.fillInPassword("admin123")
    cy.clickButton()
    cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > div > div.oxd-alert.oxd-alert--error > div.oxd-alert-content.oxd-alert-content--error > p')
      .should('be.visible')
      .should('have.text', 'Invalid credentials')  
  })

  it('Login with invalid password', function() {
    cy.fillInName("Admin")    
    cy.fillInPassword("111")
    cy.clickButton()
    cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > div > div.oxd-alert.oxd-alert--error > div.oxd-alert-content.oxd-alert-content--error > p')
      .should('be.visible')
      .should('have.text', 'Invalid credentials')  
  })

  it('Login with blanck username and password', function() {    
    cy.clickButton()
    cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > span')
      .should('be.visible')
      .should('have.text', 'Required')  
  })

  it.only('Login with forgot password', function() {    
    cy.buttonForgotPassword()
    cy.get('#app > div.orangehrm-forgot-password-container > div.orangehrm-forgot-password-wrapper > div > form > h6')
      .should('be.visible')
      .should('have.text', 'Reset Password')  
  })

})