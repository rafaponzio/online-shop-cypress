
Cypress.Commands.add('getByDataTest', selector => {
    cy.get(`[data-test="${selector}"]`)
})

Cypress.Commands.add('login', (user, password) => {
    cy.getByDataTest('username')
        .type(user)
  
    cy.getByDataTest('password')
    .type(password, {log: false})

    cy.getByDataTest('login-button')
    .click()
})