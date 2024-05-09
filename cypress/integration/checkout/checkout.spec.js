// <reference types="cypress"/>

const users = require('../../fixtures/users.json')

const { user, password } = users['standard']

describe('Checkout', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.login(user, password)

    cy.url()
      .should('include', '/inventory.html')

  })

  it('should checkout 2 items and finish successfully', () => {
    const productNames = ['Sauce Labs Backpack', 'Sauce Labs Bike Light']

    cy.addProductToCartByID('add-to-cart-sauce-labs-backpack')
    cy.addProductToCartByID('add-to-cart-sauce-labs-bike-light')

    cy.checkCartBadgeQuantity('2')

    cy.visitCartPage()

    cy.checkItemsOnCart(productNames)

    cy.getByDataTest('checkout')
      .click()

    cy.url()
      .should('include', '/checkout-step-one.html')

    cy.fillCheckoutInformation('Jason', 'Momoa', '0000-0000')
   
    cy.getByDataTest('continue')
      .click()

    cy.checkItemsOnCart(productNames)

    cy.checkTotalAmount()
  })

  it('should not checkout without fill the first name', () =>{
    cy.addProductToCartByID('add-to-cart-sauce-labs-backpack')
    
    cy.visitCartPage()

    cy.getByDataTest('checkout')
      .click()

    cy.url()
      .should('include', '/checkout-step-one.html')

    cy.fillCheckoutInformation('', 'Momoa', '0000-0000')

    cy.getByDataTest('continue')
      .click()

    cy.checkError('Error: First Name is required')

  })

  it('should not checkout without fill the last name', () =>{
    cy.addProductToCartByID('add-to-cart-sauce-labs-backpack')
    
    cy.visitCartPage()

    cy.getByDataTest('checkout')
      .click()

    cy.url()
      .should('include', '/checkout-step-one.html')

    cy.fillCheckoutInformation('Jason', '', '0000-0000')

    cy.getByDataTest('continue')
      .click()

    cy.checkError('Error: Last Name is required')

  })

  it('should not checkout without fill the zip code', () =>{
    cy.addProductToCartByID('add-to-cart-sauce-labs-backpack')
    
    cy.visitCartPage()

    cy.getByDataTest('checkout')
      .click()

    cy.url()
      .should('include', '/checkout-step-one.html')

    cy.fillCheckoutInformation('Jason', 'Momoa', '')

    cy.getByDataTest('continue')
      .click()

    cy.checkError('Error: Postal Code is required')

  })

})


