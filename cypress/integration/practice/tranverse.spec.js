///<reference types = "cypress"/>


describe('Tranverse methods in cypress',function(){

beforeEach(function(){
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
})
    it('To get children of DOM elements, use the .children() command.',function(){
        cy.get('.traversal-button-states').children().should('have.length',4)
        cy.get('.traversal-drinks-list').children().should('have.length',5)
    })
    
    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.get('.traversal-button-states').children().first().should('have.text','Danger')
    })

    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.get('.traversal-button-states').children().last().should('have.text','Alert')

    })

    it('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.get('.traversal-drinks-list').children().eq(3).should('have.text','Espresso')
    })


    //sibling
    it('To get the next sibling DOM element within elements, use the .next() command.',function(){
        cy.get('#tea').next().should('have.text','Milk')
    })

    it('To get the next sibling DOM element within elements, use the .prev() command.',function(){
        cy.get('#tea').prev().should('have.text','Coffee')
        cy.get('#tea').prev().should('have.attr','id','coffee')

    })
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',function(){
        cy.get('#tea').nextUntil('#sugar').should('have.length',2)
        cy.get('#tea').nextUntil().should('have.length',3)


    })

    it('To get all of the next sibling DOM elements within elements until another element, use the .prevUntil() command.',function(){
        cy.get('#sugar').prevUntil('#tea').should('have.length',2)
        cy.get('#sugar').prevUntil().should('have.length',4)
    })

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
        cy.get('#sugar').prevAll().should('have.length',4)
    })
    it('To get all previous sibling DOM elements within elements, use the .nextAll() command.',function(){
        cy.get('#coffee').nextAll().should('have.length',4)
    })

    it('To get descendant DOM elements of the selector, use the .find() command.', function(){
        cy.get('.traversal-buttons').find('a').should('have.text','Link')
        //cy.get('.traversal-button-states').find('.btn-outline-info')
    })

    it('To get DOM elements that match a specific selector, use the .filter() command.',function(){
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text','Warning')
    })
        it('To remove DOM element(s) from the set of elements, use the .not() command.',function(){
            cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)

        })

        it('To get parent DOM element of elements, use the .parent() command.',function(){
            cy.get('.btn-outline-danger').parent().should('have.class','traversal-button-states')

        })

        it('To get parents DOM element of elements, use the .parents() command.',function(){

            cy.get('.btn-outline-danger').parents().should('have.class','thumbnail')
        })

        it('To get parents DOM element of elements until other element, use the .parentsUntil() command.',function(){
            cy.get('.btn-outline-danger').parentsUntil('.col-sm-12').should('have.length',2)
            
        })
        it.only('To get the closest ancestor DOM element, use the .closest() command.', function () {
            cy.get('#veggie').closest('div').should('have.class','thumbnail')
        })
})

