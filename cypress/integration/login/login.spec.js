// <reference types="cypress"/>

const users = require('../../fixtures/users.json')

describe('User Login', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('successful login with a valid user and password', () => {
      
      const { user, password } = users['standard']

      cy.login(user, password)
  
      cy.url()
        .should('include', '/inventory.html')

      cy.contains('Products')
        .should('be.visible')
  
    })
  })