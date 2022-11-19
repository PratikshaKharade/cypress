
///<reference types = "cypress"/>

//const { should } = require("chai")

//test scenario

describe('ts_1 verify the login functionality', function () {
    it('tc_1 check the valid credential', function () {

        //visit the page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //element find (username) and type username
        cy.get('input[name="username"]').type('Admin')

        //element find (password) and type password
        cy.get('input[name="password"]').type("admin123")

        //click on login button
        cy.get('button[type="submit"]').click()

        //validate the any elememt on dashbord
        cy.get('img[alt="client brand banner"]').should('be.visible')

    })
    it('tc_2 check the invalid credential', function () {
        //visit the page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //element find (username) and type incorrect username
        cy.get('input[name="username"]').type('Admin123')

        //element find (password) and type incorrect password
        cy.get('input[name="password"]').type("admin123")

        //click on login button
        cy.get('button[type="submit"]').click()

        //validate the correct allert msg to user
        cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')
        .should('have.text','Invalid credentials')

    })
})
