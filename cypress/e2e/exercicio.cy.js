/// <reference types= "cypress" />
const perfil = require('../fixtures/perfil.json')


context('Exercicio - Fluxo de pedido', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
        cy.visit('produtos')
        cy.get('.product-block')
    });
   
    it('Deve adicionar um produto ao carrinho', () => {
        cy.addProdutos('Frankie Sweatshirt', 'L', 'White', 2)
    });
    
    it('Deve adicionar um produto ao carrinho', () => {
        cy.addProdutos('Caesar Warm-Up Pant', '36', 'Gray', 1)
    });
});