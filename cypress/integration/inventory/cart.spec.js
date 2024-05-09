// <reference types="cypress"/>

const users = require('../../fixtures/users.json')

const { user, password } = users['standard']

describe('Cart - Inventory Page', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.login(user, password)

    cy.url()
      .should('include', '/inventory.html')

  })

  it('should add 1 product to the cart', () => {          

    cy.addProductToCartByID('add-to-cart-sauce-labs-backpack')

    cy.checkCartBadgeQuantity('1')

  })

  it('should add 3 products to the cart', () => {          

    cy.addProductToCartByID('add-to-cart-sauce-labs-backpack')
    cy.addProductToCartByID('add-to-cart-sauce-labs-bike-light')
    cy.addProductToCartByID('add-to-cart-sauce-labs-bolt-t-shirt')

    cy.checkCartBadgeQuantity('3')

  })

  it('should remove items from cart', () => {          

    cy.addProductToCartByID('add-to-cart-sauce-labs-backpack')
    cy.addProductToCartByID('add-to-cart-sauce-labs-bike-light')

    cy.checkCartBadgeQuantity('2')

    cy.removeProductFromCartByID('remove-sauce-labs-backpack')

    cy.checkCartBadgeQuantity('1')

    cy.removeProductFromCartByID('remove-sauce-labs-bike-light')

    cy.checkCartIsEmpty()

  })

 })


