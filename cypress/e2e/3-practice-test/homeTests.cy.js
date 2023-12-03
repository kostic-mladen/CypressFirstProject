describe('Home page check up', () => {
  
it('Visit home page', () => {
    cy.visit('/')
    cy.get('h1').contains('Hello')
});

it('Verify that Logo is visible', () => {
    cy.visit('/')
    cy.get('.custom-logo').should('be.visible')
});

it('Verify that Logo is clickable', () => {
    cy.visit('/')
    cy.get('.custom-logo-link').click()
});

});
