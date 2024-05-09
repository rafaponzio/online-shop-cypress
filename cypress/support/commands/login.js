Cypress.Commands.add('login', (user, password) => {
    cy.getByDataTest('username')
        .type(user)
  
    cy.getByDataTest('password')
    .type(password, {log: false})

    cy.getByDataTest('login-button')
    .click()
})

Cypress.Commands.add('checkLoginError', message => {
    cy.getByDataTest('error')
        .should('be.visible')
        .and('have.text', message)
})