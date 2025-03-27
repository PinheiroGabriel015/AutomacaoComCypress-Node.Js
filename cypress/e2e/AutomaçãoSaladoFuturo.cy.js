///<reference types='cypress'/>
describe('Teste Sala do Futuro',()=>{
    it('Teste de Login bem sucedido', function(){
        cy.visit('https://saladofuturo.educacao.sp.gov.br/')
        cy.get('.css-5nrxsk > :nth-child(2)').click()
        cy.get('#input-usuario-sed').type('000113010832')
      
        cy.get('#\\:r1\\:', { timeout: 10000 }).should('be.visible').type('6')
        cy.get('#input-senha').type('Escola123@')
        cy.get('#botao-login').click()
        cy.wait(3000)
        cy.get('[href="/redacoes"] > .MuiButtonBase-root').click()
        cy.get('.css-gg4vpm').trigger('mouseover')
        cy.get('[data-testid="botao-tarefa-sp-62900049"] > .MuiTypography-root').click()
        cy.get('.css-1hilo57').type('Conseguindo cypress')
        cy.get('.css-1p5zh77').type('O termo "síndrome de Frankenstein" tem origem no romance "Frankenstein", escrito por Mary Shelley em 1818. A obra narra a história de Victor Frankenstein, um cientista que cria vida artificial, mas logo passa a ser assombrado e destruído por sua própria criação. Embora Shelley não tenha usado explicitamente o termo “síndrome de Frankenstein”, o livro tornou-se uma metáfora poderosa para os perigos do avanço tecnológico sem controle ético ou moral. A história de Frankenstein reflete o medo de criar algo que escape do controle humano, algo que volte contra o próprio criador. Essa metáfora ganhou força no século XX, especialmente com o desenvolvimento de novas tecnologias como a energia nuclear e a biotecnologia, que levantaram questões sobre os limites do conhecimento e da intervenção humana. Durante a Guerra Fria, por exemplo, o temor das armas nucleares espelhava o medo de uma tecnologia destrutiva e incontrolável. O medo de que a tecnologia se tornasse uma força autônoma, capaz de destruir sem distinção, foi um dos maiores desafios enfrentados pela humanidade ao longo do século passado. Mais recentemente, o conceito de síndrome de Frankenstein tem sido associado à inteligência artificial (IA), uma área de inovação com enormes potencialidades, mas também com riscos inerentes. O avanço acelerado da IA desperta o temor de que, assim como o monstro criado por Frankenstein, ela possa ultrapassar os limites do controle humano e causar consequências indesejadas. Esse receio é alimentado pela falta de regulamentação e pela complexidade crescente desses sistemas, tornando a reflexão ética sobre sua criação e uso cada vez mais urgente.')
      

    })
})