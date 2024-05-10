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

    it('successful login with a valid user and password for problem_user', () => {      
      const { user, password } = users['problem']

      cy.login(user, password)
  
      cy.url()
        .should('include', '/inventory.html')

      cy.contains('Products')
        .should('be.visible')
    })

    it('successful login with a valid user and password for performance_glitch_user', () => {      
      const { user, password } = users['performance_glitch']

      cy.login(user, password)
  
      cy.url()
        .should('include', '/inventory.html')

      cy.contains('Products')
        .should('be.visible')
    })

    it('login should fail with a invalid password', () => {      
      const { user } = users['standard']

      cy.login(user, 'invalid_pass')
  
      cy.checkError('Epic sadface: Username and password do not match any user in this service')
    })

    it('locked out user should not logging in', () => {
      const { user, password } = users['locked_out']

      cy.login(user, password)

      cy.checkError('Epic sadface: Sorry, this user has been locked out.')
    })
  })