///<reference types = "cypress"/>

describe('verify the login functionality',function(){

beforeEach('befor each testcase',function(){
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})
it('login with valid credential',function(){
    cy.login('Admin','admin123')
    cy.get('img[alt="client brand banner"]').should('be.visible')
})
it('login with invalid credential',function(){
    cy.login('admin','admin1234')
    cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')
    .should('have.text','Invalid credentials')
})

})