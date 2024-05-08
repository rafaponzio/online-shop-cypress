
Cypress.Commands.add('getByDataTest', selector => {
    cy.get(`[data-test="${selector}"]`)
})
