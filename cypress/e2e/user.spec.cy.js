import userData from '../fixtures/users/userData.json'

describe('Orange HRM Testes', () => {

  const selectorsList = {
    usernameField:"[name='username']",
    passwordField:"[name='password']",
    loginButton:"[type='submit']",
    sectionTitelToBar:".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    worngCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    fristNameField: "[placeholder='First Name']",
    lastNameField: "[placeholder='Last Name']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    nationalityField: '.oxd-select-wrapper'
  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.fristNameField).clear().type('TesteJ')
    cy.get(selectorsList.lastNameField).clear().type('TesteJ')
    cy.get(selectorsList.genericField).eq(3).clear().type('Teste3')
    cy.get(selectorsList.genericField).eq(4).clear().type('Teste1')
    cy.get(selectorsList.genericField).eq(5).clear().type('Teste2')
    cy.get(selectorsList.genericField).eq(6).clear().type('2024-14-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    //cy.get(selectorsList.nationalityField).eq(0).type('Brazilian')
  })
  
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.worngCredentialAlert)
  })
})