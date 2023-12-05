/// <reference types= "cypress" />
import EnderecoPage from '../support/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereço, Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Helena', 'Souza', 'Google', 'Brasil', 'Av São João', '100', 'Araçatuba', 'São Paulo', '00000001','900000009', 'emai@dominio.com')
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso')

    });

    
    it('Deve fazer cadastro de faturamento com sucesso - Usando Arquivo de Dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[2].nome,
            dadosEndereco[2].sobrenome,
            dadosEndereco[2].empresa,
            dadosEndereco[2].endereco,
            dadosEndereco[2].numero,
            dadosEndereco[2].pais,
            dadosEndereco[2].cidade,
            dadosEndereco[2].estado,
            dadosEndereco[2].cep,
            dadosEndereco[2].telefone,
            dadosEndereco[2].email
        )
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso')
    })
})