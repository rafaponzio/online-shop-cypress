// <reference types="cypress"/>

const users = require('../../fixtures/users.json')

const { user, password } = users['standard']

describe('Sort products', () => {
    before(() => {      

      cy.visit('/')
      cy.login(user, password)
      
      cy.url()
        .should('include', '/inventory.html')
    })
  
    it('should sort products for Name(A to Z)', () => {            

      cy.getByDataTest('product-sort-container').select('az')
      cy.get('.inventory_item_name').first().should('have.text', 'Sauce Labs Backpack')

    })

    it('should sort products for Name (Z to A)', () => {            

      cy.getByDataTest('product-sort-container').select('za')
      cy.get('.inventory_item_name').first().should('have.text', 'Test.allTheThings() T-Shirt (Red)')
      
    })

    it('should sort products for Price (low to high)', () => {            

      cy.getByDataTest('product-sort-container').select('lohi')
      cy.get('.inventory_item_price').first().should('have.text', '$7.99')
      
    })

    it('should sort products for Price (high to low)', () => {            

      cy.getByDataTest('product-sort-container').select('hilo')
      cy.get('.inventory_item_price').first().should('have.text', '$49.99')
      
    })
  })

  