///<reference types = "cypress"/>



describe('traverse method incypress',function(){
    beforeEach('before each it block',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })
    it('To get children of DOM elements, use the .children() command.',function(){
        cy.get('.traversal-drinks-list').children().should('have.length',5)
    })

    it('To get children of DOM elements, use the .eq() command.',function(){
        cy.get('.traversal-drinks-list').children().eq(2).should('have.text','Milk')
    })

    it('To get children of DOM elements, use the .first() command.',function(){
        cy.get('.traversal-drinks-list').children().first().should('have.text','Coffee')
    })

    it('To get children of DOM elements, use the .last() command.',function(){
        cy.get('.traversal-drinks-list').children().last().should('have.text','Sugar')
    })

    //siblings method
    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.get('#tea').prev().should('have.text','Coffee')
    })

    it('To get the previous sibling DOM element within elements, use the .next() command.',function(){
        cy.get('#tea').next().should('have.text','Milk')
    })

    it('To get the previous sibling DOM element within elements, use the .siblings() command.',function(){
        cy.get('#tea').siblings().should('have.length',4)
    })

    it('To get the previous sibling DOM element within elements, use the .nextAll() command.',function(){
        cy.get('#tea').nextAll().should('have.length',3)
    })


    it('To get the previous sibling DOM element within elements, use the .prevtAll() command.',function(){
        cy.get('#sugar').prevAll().should('have.length',4)
    })

    it('To get the previous sibling DOM element within elements, use the .nextuntil() command.',function(){
        cy.get('#coffee').nextUntil('#sugar').should('have.length',3)
    })
    
    it('To get the previous sibling DOM element within elements, use the .prevuntil() command.',function(){
        cy.get('#sugar').prevUntil('#coffee').should('have.length',3)
    })



})