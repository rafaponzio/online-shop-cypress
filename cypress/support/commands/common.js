
Cypress.Commands.add('getByDataTest', selector => {
  cy.get(`[data-test="${selector}"]`)
})

Cypress.Commands.add('checkError', message => {
  cy.getByDataTest('error')
    .should('be.visible')
    .and('have.text', message)
})