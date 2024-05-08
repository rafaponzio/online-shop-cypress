// <reference types="cypress"/>

const users = require('../../fixtures/users.json')

describe('User Login', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('successful login with a valid user and password', () => {
      
      const { user, password } = users['standard']

      cy.getByDataTest('username')
        .type(user)
  
      cy.getByDataTest('password')
        .type(password, {log: false})
  
      cy.getByDataTest('login-button')
        .click()
  
      cy.url()
        .should('include', '/inventory.html')

      cy.contains('Products')
        .should('be.visible')
  
    })
  })