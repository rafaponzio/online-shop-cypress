Cypress.Commands.add('addProductToCartByID', id => {
    cy.getByDataTest(id).click()
})

Cypress.Commands.add('removeProductFromCartByID', id => {
    cy.getByDataTest(id).click()
})

Cypress.Commands.add('checkCartBadgeQuantity', quantity => {
    cy.getByDataTest('shopping-cart-badge')
        .should('be.visible')
        .and('contain.text', quantity)
})

Cypress.Commands.add('checkCartIsEmpty', () => {
    cy.getByDataTest('shopping-cart-badge')
        .should('not.exist')
})