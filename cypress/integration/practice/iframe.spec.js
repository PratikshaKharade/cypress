///<reference types = "cypress"/>

describe('verify the iframe in cypress', function () {

    

    const getIframeBody = (id)=>{
        return cy.get(`#${id}`).its('0.contentDocument.body').then(cy.wrap)
    }


    it('verify the iframe via jQuery', function () {

        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function ($el) {
            let body = $el.contents().find('body')
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('a[href="index.html"]').should('have.text', 'Home')

        })



    })

    it('verify the iframe via javascript', function () {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')

        cy.get('#frame').then(function (el) {
            //cy.log(el[0].contentDocument.body)
            let body = el[0].contentDocument.body
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('a[href="index.html"]').should('have.text', 'Home')



        })
    })

    it.only('verify the ifram via javascript',function(){

        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        getIframeBody('frame').find('a[href="index.html"]').should('have.text','Home')

    })

})