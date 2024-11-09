const selectorsList = {
  usernameField:"[name='username']",
  passwordField:"[name='password']",
  loginButton:"[type='submit']",
  sectionTitelToBar:".oxd-topbar-header-breadcrumb-module",
  worngCredentialAlert: "[role='alert']"
}

describe('Orange HRM Testes', () => {
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitelToBar).contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('test')
    cy.get(selectorsList.passwordField).type('test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.worngCredentialAlert)
  })
})