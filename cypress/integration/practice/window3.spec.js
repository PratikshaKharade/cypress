///<reference types = "cypress"/>

describe('verify the localstorage gor app', function () {
    this.beforeEach('visit the site', function () {

        cy.visit('https://webdriveruniversity.com/')
    })
    it('local storage using window', function () {
        cy.window().then(function (win) {
            expect(win.localStorage.length).to.eq(0)
            win.localStorage.setItem('ID', 1)
            expect(win.localStorage.length).to.eq(1)
            expect(win.localStorage.getItem('ID')).to.eq('1')


        })

    })
    it('clear localstorage using cypress command', function () {
        cy.clearLocalStorage()
        cy.window().then(function (win) {
            expect(win.localStorage.length).to.eq(0)


        })


    })
    it('VERIFY the title of page', function(){
        cy.document().then(function(doc){
           let titleText = doc.title
           expect(titleText).to.eq('WebDriverUniversity.com')

        })

    })

    it('verify the title by cypress command', function(){
        cy.title().should('eq','WebDriverUniversity.com')

    })
    it('verify the title by cypress command',function(){
        cy.title().then(function(txt){

            expect(txt).to.eq('WebDriverUniversity.com')

        })

    })

})