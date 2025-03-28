/// <reference types='cypress'/>
describe('Teste Nubank', ()=>{
    it('Teste de login', function(){
        cy.visit('https://www.nubank.com.br/')
        cy.wait(5000)
        cy.get('.css-wl6yh0').click()
        cy.get('.chakra-stack > :nth-child(1) > .chakra-input__group > #cpf').type('54161043848')
        cy.get('#name').type('Gabriel Flash code')
        cy.get('#phone').type('11999948888')
        cy.get('#email').type('gabrielflashcodetest@gmail.com')
        cy.get('#emailConfirmation').type('gabrielflashcodetest@gmail.com')
        cy.get('.chakra-checkbox__control').click()
        })

        it('Login com erros', function(){
            cy.visit('https://www.nubank.com.br/')
            cy.wait(5000)
            cy.get('.css-wl6yh0').click()
            cy.get('.chakra-stack > :nth-child(1) > .chakra-input__group > #cpf').type('54161043848')
            cy.get('#name').type('GabrielFlashcode')
            cy.get('#phone').type('1199994888')
            cy.get('#email').type('gabrielflashcodetest@gmail.com')
            cy.get('#emailConfirmation').type('gabrielflashcodetest@gmai.com')
            cy.get('.chakra-checkbox__control').click()

        })
})
