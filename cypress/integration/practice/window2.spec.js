///<reference types = "cypress"/>

describe('window test command', function () {

    this.beforeEach(function () {
        cy.visit('http://automationpractice.com/index.php')
    })
    it('Verify the URI properties for window object', function () {
        cy.window().should(function (win) {
            let loc = win.location
            // console.log(loc.hash)
            // console.log(loc.protocol)
            // console.log(loc.hostname)
            // console.log(loc.port)
            // console.log(loc.pathname)
            // console.log(loc.origin)

            expect(loc.hash).to.eqls("")
            expect(loc.protocol).to.eqls("http:")
            expect(loc.hostname).to.eqls("automationpractice.com")
            expect(loc.port).to.eqls("")
            expect(loc.pathname).to.eqls("/index.php")



        })
    })

    it('window-reload', function () {
        cy.window().should(function (win) {
            win.location.reload()

        })
    })

    it.only('cypress-reload', function () {

        cy.reload()

    })

    it('window - navigation command', function () {
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]')

        cy.window().should(function (win) {
            win.history.back()   // win.history.go(-1)
        })


        cy.get("h2[class='title_block']").should('be.visible') //  // win.history.go(1)

    })

    it('cypress - navigation commands', function () {
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
        cy.go('back') // cy.go(-1)
        cy.get('a[class="blockbestsellers"]').should('be.visible')
        cy.go('forward') // cy.go(1)
        cy.get("h2[class='title_block']").should('be.visible')

    })

    it.only('URI properties with cypress', function () {
        cy.hash().should('eq', "")
        cy.location('pathname').should('eq', '/index.php')
        cy.location('host').should('eq', 'automationpractice.com')
        cy.location('origin').should('eq', 'http://automationpractice.com')
        cy.location('protocol').should('eq', 'http:')


    })



})



