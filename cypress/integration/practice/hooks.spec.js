///<reference types = "cypress"/>

describe('verify consept of hooks in js', function(){

    before('befor everything', function(){
        cy.log('befor everything')
    })
    after('after everythig', function(){
        cy.log('after everything')
    })
     
    beforeEach('before each testcase', function(){
        cy.log('I am befor each testcase')
    })
    afterEach('after each testcase', function(){
        cy.log('I am after each testcase')
    })

    it('testcase one',function(){
        cy.log('first testcase')
    })
    it('second testcase',function(){
        cy.log('second testcase')
    })


})
