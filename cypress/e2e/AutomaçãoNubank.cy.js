/// <reference types='cypress'/>
describe('Teste Nubank', ()=>{
    it('Teste de login', function(){
        cy.visit('https://www.nubank.com.br/')
        cy.wait(5000)
        cy.get('.css-wl6yh0').click()
        })
})