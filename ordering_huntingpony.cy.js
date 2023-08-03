describe('Проверка сайта на оформление заказа', function () {
   it('оформление заказа', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="1"] > .header__collections-controls > .header__collections-link').click();
       cy.get('[data-product-id="338933592"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
       cy.wait(3000);
        cy.get('.add-cart-counter__btn').click();
        cy.wait(2000);
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.header__cart > .icon > .header__control-bage').should('be.visible');
        cy.get('.header__control-text').should('be.visible');
        cy.get('.header__cart > .icon').click();
        cy.wait(3000);
        cy.get('.cart-item').should('be.visible');
        cy.wait(2000);
        cy.get('.total-amount').should('be.visible').contains('21 000');
        cy.get('.cart-controls > .button').click();
                   })
})