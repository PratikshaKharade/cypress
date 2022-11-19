
 import personobj from '../../fixtures/contactus.json'
 import multiuser from '../../fixtures/multiUser.json'

///<reference types = "cypress"/>

describe('verify contactUs form', function () {

    let obj;
    before(() => {
        cy.fixture('contactus').then(function (data) {
            obj = data
        })

    })

    // first way
    let person = {
        firstName: "pratiksha",
        lastName: "kharade",
        email: "patu@gmail.com",
        Comment: "welcome to js !"
    }

    it('verify contact us form with object', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(person.firstName)
        cy.get('input[name="last_name"]').type(person.lastName)
        cy.get('input[name="email"]').type(person.email)
        cy.get('textarea[name="message"]').type(person.Comment)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')



    })

    //second way

    it('verify contact us form with fixture', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(obj.firstName)
        cy.get('input[name="last_name"]').type(obj.lastName)
        cy.get('input[name="email"]').type(obj.email)
        cy.get('textarea[name="message"]').type(obj.Comment)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    //third way
    it('verify contact us form by import fixture file', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(personobj.firstName)
        cy.get('input[name="last_name"]').type(personobj.lastName)
        cy.get('input[name="email"]').type(personobj.email)
        cy.get('textarea[name="message"]').type(personobj.Comment)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    //forth way
    it('verify contact us form by import fixture file', function () {
        cy.log(multiuser)
        multiuser.forEach(function(el){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(el.firstName)
        cy.get('input[name="last_name"]').type(el.lastName)
        cy.get('input[name="email"]').type(el.email)
        cy.get('textarea[name="message"]').type(el.Comment)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    
     })

     // fifth way

     multiuser.forEach(function(el){
        it.only('verify contact us form by import fixture file', function () {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.Comment)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
     })

})