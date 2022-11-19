///<reference types = "cypress"/>

describe('my first test scenario',function(){

    it('to visit the page',function(){
        cy.visit('https://www.wikipedia.org')
        cy.get('input[name="search"]').type('salman khan')
        cy.get('button[type="submit"]').click()
        cy.get('span[class="mw-page-title-main"]').should('have.text','Salman Khan')

    })

    it.only('my first testcase',function(){
        cy.visit('https://zapier.com/blog/inspect-element-tutorial/')
        

    })
    
})

