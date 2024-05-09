Cypress.Commands.add('checkTotalAmount', () => {
  const prices = []
  let taxNumber

  return cy.getByDataTest('cart-list')
    .find('[data-test="inventory-item-price"]')
    .each(($price) => {

      const priceText = $price.text().trim().replace(/^\$\s?/, '')

      const priceNumber = parseFloat(priceText)

      prices.push(priceNumber)
    })
    .then(() =>
      cy.getByDataTest('tax-label')
        .invoke('text')
        .then(($taxText) => {
          const taxTextTrimmed = $taxText.trim().replace(/^Tax\: \$\s?/, '')
          cy.log(taxTextTrimmed)

          taxNumber = parseFloat(taxTextTrimmed)

          const totalPrice = prices.reduce((sum, price) => sum + price, 0) + taxNumber

          return cy.getByDataTest('total-label')
            .invoke('text')
            .then(($subtotalText) => {
              const subtotalTextTrimmed = $subtotalText.trim().replace(/^Total\: \$\s?/, '')
              const displayedTotal = parseFloat(subtotalTextTrimmed)

              expect(totalPrice).to.equal(displayedTotal)
            })
        })
    )
})

Cypress.Commands.add('fillCheckoutInformation', (firstName, lastName, zipCode) => {

  if(firstName) {
    cy.getByDataTest('firstName')
      .type(firstName)
  }
  
  if (lastName) {
    cy.getByDataTest('lastName')
      .type(lastName)
  }

  if(zipCode) {
    cy.getByDataTest('postalCode')
      .type(zipCode)
  }

})