
describe('LogIn functionality', () => { 

    it('Visit LogIn page', () => {
        cy.visit('/practice')
        cy.get('a').contains('Test Login Page')
    });
    
    it('Verify Test Login Page button', () =>{
        cy.visit('/practice')
        cy.get('a').contains('Test Login Page').click()
        cy.get('#username').should('exist')
    });
    
    it('verify that Pratice title is visible', () =>{
        cy.visit('/practice')
        cy.get('h1').contains('Practice').should('exist')
    
    });
    });