///<reference types = "cypress"/>

describe('verify the contact us form', function(){

    it('validate the sucessfull submission of form', function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('pratiksha')
        cy.get('input[name="last_name"]').type('kharade')
        cy.get('input[name="email"]').type('patu@gmail.com')
        cy.get('textarea[name="message"]').type('learning js')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })

    it('validate the form with incorrect email address', function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('pratiksha')
        cy.get('input[name="last_name"]').type('kharade')
        cy.get('input[name="email"]').type('patugmail.com')
        cy.get('textarea[name="message"]').type('learning js')
        cy.get('input[type="submit"]').click()
        cy.get('body').should('contain','Invalid email address')
    })

    it('validate the form with click on reset button', function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('pratiksha')
        cy.get('input[name="last_name"]').type('kharade')
        cy.get('input[name="email"]').type('patugmail.com')
        cy.get('textarea[name="message"]').type('learning js')  
        cy.get('input[type="reset"]').click()  

        cy.get('input[name="first_name"]').should('have.text','')
        cy.get('input[name="last_name"]').should('have.text','')
        cy.get('input[name="email"]').should('have.text','')
        cy.get('textarea[name="message"]').should('have.text','')
    })

    it('validate the heading', function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('have.text','CONTACT US')
    })

    it('validate the heading',function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').as('headingC')
        cy.get('@headingC').should('be.visible')
        cy.get('@headingC').should('have.text','CONTACT US')
    })

})