/// <reference types="cypress" />

describe('Validate authentication functioanlity.', () => {
  beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/login')
  })

  it('Verify valid login.', () => {
    cy.contains('Login').click();
  })
})
