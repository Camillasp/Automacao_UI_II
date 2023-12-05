/// <reference types="cypress" />

describe ('Funcionalidade Produtos', () =>{

    beforeEach(() =>{
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () =>{
        cy.get('.product-block').first().click()
        cy.get('.single_add_to_cart_button').click()
    });

    it('Deve adicionar um produto ao carrinho', () =>{
        var quantidade = 3
        cy.get('.product-block')
        .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.quantity').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' x "Abominable Hoodie.”')
    });

    it('Deve adicionar um produto ao carrinho - Usando Comando Customizado', () =>{
        cy.addProdutos('Abominable Hoodie', 'M', 'Blue', 2)

    })

    it('Deve adicionar um produto ao carrinho - Usando Comando Customizado', () =>{
        cy.addProdutos('Abominable Hoodie', 'XS', 'Green', 1)

    })

});