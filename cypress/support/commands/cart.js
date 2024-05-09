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

Cypress.Commands.add('visitCartPage', () => {
	cy.getByDataTest('shopping-cart-link').click()

	cy.url()
		.should('include', '/cart.html')
})

Cypress.Commands.add('checkItemsOnCart', (productNames) => {
	cy.getByDataTest('inventory-item')
		.should('have.length', productNames.length)

	productNames.forEach(productName => {
    cy.get('.cart_item')
			.contains('[data-test="inventory-item-name"]', productName).should('exist')
  })

})