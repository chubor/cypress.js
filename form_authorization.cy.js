describe('Форма авторизации', function () {
   it('Авторизация при вводе валидных данных', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина').should('be.visible');
    })
})

describe('Кнопка "Забыли пароль"', function () {
   it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.visible'); //задизейблина ли кнопка "войти"
        cy.get('#forgotEmailButton').click(); //клик по кнопке "Забыли пароль"
        cy.contains('Восстановите пароль').should('be.visible');
        cy.get('#restoreEmailButton').should('be.visible');
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').should('be.enabled');
        cy.get('#exitRestoreButton > .exitIcon').click();
        cy.contains('Форма логина').should('be.visible');
    })
})

describe('Форма авторизации', function () {
   it('Авторизация при вводе не верного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.visible');//задизейблина ли кнопка "войти"
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.visible') //задизейблина ли кнопка "войти"
        cy.get('#pass').type('falce_password'); //неверный пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка "войти" должна раздизейблиться
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина').should('be.visible');
    })
})

describe('Форма авторизации', function () {
   it('Авторизация при вводе не верного логина', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.visible');//задизейблина ли кнопка "войти"
        cy.get('#mail').type('ggggguang@mail.ru');
        cy.get('#loginButton').should('be.visible') //задизейблина ли кнопка "войти"
        cy.get('#pass').type('iLoveqastudio1'); //верный пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка "войти" должна раздизейблиться
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина').should('be.visible');
    })
})

describe('Форма авторизации', function () {
   it('Ввести логин без @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.visible');//задизейблина ли кнопка "войти"
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#loginButton').should('be.visible') //задизейблина ли кнопка "войти"
        cy.get('#pass').type('iLoveqastudio1'); //верный пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка "войти" должна раздизейблиться
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина').should('be.visible');

    })
})

describe('Форма авторизации', function () {
   it('Проеврка на приведение заглавных букв в строчные', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.visible');//задизейблина ли кнопка "войти"
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#loginButton').should('be.visible') //задизейблина ли кнопка "войти"
        cy.get('#pass').type('iLoveqastudio1'); //верный пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка "войти" должна раздизейблиться
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина').should('be.visible')

     })

})
