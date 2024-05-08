// <reference types="cypress"/>

const users = require('../../fixtures/users.json')

describe('Product Images', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should load all product images correctly with', () => {      
    const { user, password } = users['problem']

    cy.login(user, password)

    cy.url()
      .should('include', '/inventory.html')

    cy.get('.inventory_item_img img')
    .should('have.length', 6)
    .each(($el) => {
      cy.wrap($el).should('have.attr', 'src').and('not.include', '/static/media/sl-404.168b1cce.jpg')
    })

  })

 })


