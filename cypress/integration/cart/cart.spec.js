// <reference types="cypress"/>

const users = require('../../fixtures/users.json')

const { user, password } = users['standard']

describe('Cart - Cart Page', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.login(user, password)

    cy.url()
      .should('include', '/inventory.html')

  })

  it('should show 1 product added to the cart', () => {          
    const productNames = ['Sauce Labs Backpack']

    cy.addProductToCartByID('add-to-cart-sauce-labs-backpack')

    cy.checkCartBadgeQuantity('1')

    cy.visitCartPage()

    cy.checkItemsOnCart(productNames)
  })

  it('should show 3 products added to the cart', () => {          
    const productNames = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt']

    cy.addProductToCartByID('add-to-cart-sauce-labs-backpack')
    cy.addProductToCartByID('add-to-cart-sauce-labs-bike-light')
    cy.addProductToCartByID('add-to-cart-sauce-labs-bolt-t-shirt')

    cy.checkCartBadgeQuantity('3')
    
    cy.visitCartPage()

    cy.checkItemsOnCart(productNames)
  })

  it('should remove items from cart', () => {          
    const productNames = ['Sauce Labs Backpack', 'Sauce Labs Bike Light']

    cy.addProductToCartByID('add-to-cart-sauce-labs-backpack')
    cy.addProductToCartByID('add-to-cart-sauce-labs-bike-light')

    cy.checkCartBadgeQuantity('2')

    cy.visitCartPage()

    cy.checkItemsOnCart(productNames)

    cy.removeProductFromCartByID('remove-sauce-labs-backpack')

    cy.checkItemsOnCart([productNames[1]])

    cy.removeProductFromCartByID('remove-sauce-labs-bike-light')

    cy.checkCartIsEmpty()

  })

 })


