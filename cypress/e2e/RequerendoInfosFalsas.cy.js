///<reference types='cypress'/>

describe('Pegando Infos pessoais Falsas para o teste', ()=>{
    it('Testando automação com json', function(){
        cy.visit('https://www.4devs.com.br/gerador_de_pessoas')
        cy.get('#cookiescript_accept').click()
        cy.get('#bt_gerar_pessoa').click()
        cy.wait(2000)
        cy.get('#nome').should('exist').invoke('text').then((nome)=>{
            const nomeFalso = nome.trim();
            
            cy.get('#cpf > :nth-child(1)').should('exist').invoke('text').then((cpf)=>{
                const cpfFalso = cpf.trim();

                cy.get('#data_nasc > :nth-child(1)').should('exist').invoke('text').then((nasc)=>{
                    const nascFalso = nasc.trim();

                    cy.get('#telefone_fixo > :nth-child(1)').should('exist').invoke('text').then((tel)=>{
                        const telFalso = tel.trim();

                        cy.get('#email > :nth-child(1)').should('exist').invoke('text').then((email)=>{
                            const emailFalso = email.trim();


                              const dadosFalsos ={

                              
                                nome: nomeFalso,
                                cpf:cpfFalso,
                                nasc:nascFalso,
                                tel:telFalso,
                                email: emailFalso
                              }
                              cy.writeFile('cypress/fixtures/dadosFalsos.json', dadosFalsos);
                        })
                    })
                })
            })
        })


    })
})