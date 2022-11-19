
///<reference types = "cypress"/>

describe('window command in cypress', function(){
it.skip('window URL properies',function(){
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.window().should((win)=>{
    //    console.log(win.location.host)
    //    console.log(win.location.pathname)
    //    console.log(win.location.protocol)
    //    console.log(win.location.hash)

    expect(win.location.host).to.eqls('www.webdriveruniversity.com')
    expect(win.location.pathname).to.eqls('/Contact-Us/contactus.html')
    expect(win.location.protocol).to.eqls('http:')
    expect(win.location.hash).to.eqls('')

    })
   
   
   })

   it.skip('Window reload and with cypress',function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.window().should(function(win){

        win.location.reload()
    })
   })

    it('Window reload and with cypress',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('p[class]').eq(2).click()
        cy.window().should(function(win){

            // win.history.back()
            // win.history.forward()
            // win.history.go(-1)
            // win.history.go()

        cy.go(-1)
        cy.go(1)
        cy.go('back')
        cy.go('forward')

        })


    })


})

 

