///<reference types='cypress'/>
describe('Automação Nubank', ()=>{
    it('Gabriel Pinheiro',function(){
        cy.visit('https://www.nubank.com.br/')
        cy.wait(5000)

        cy.get('.css-wl6yh0').click()

        cy.wait(6000)

        cy.get('.chakra-stack > :nth-child(1) > .chakra-input__group > #cpf').type('54161043848')
        cy.get('#name').type('Gabriel Teste FlashCode')
        cy.get('#phone').type('11999998888')
        cy.get('#email').type('testeflashcode@gmail.com.br')
        cy.get('#emailConfirmation').type('testeflashcode@gmail.com.br')
        cy.get('.chakra-checkbox__control').click()

    })
})