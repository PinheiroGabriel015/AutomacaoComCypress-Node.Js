///<reference types="cypress"/>
describe('aprendendo cypress', () => {
    it('Gabriel Pinheiro', function () {
        cy.visit('https://www.inter.co')



        //Valida se realmente é igual

        cy.title().should('be.equal',"Inter - O Super App da sua vida financeira")

        //Valida se contem 
        cy.title().should('contains' , "financeira")

        cy.get('#onetrust-accept-btn-handler').click()
    })
})