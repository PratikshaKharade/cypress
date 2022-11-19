
///<reference types = "cypress"/>

//const { should } = require("chai")

//test scenario

describe('ts_1 verify the login functionality', function () {
    this.beforeEach('before each testcase',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.login('Admin','admin123')
        
        
    })
    it('tc_1 validate the any elememt on dashbord', function () {

        
        cy.get('img[alt="client brand banner"]').should('be.visible')

    })
    it.only('tc_2 verify the default tab to be PIM', function () {
        cy.url().should('contain','pim')
        cy.get('h6').should('have.text','PIM')
        
    })
})
