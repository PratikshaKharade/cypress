///<reference types = "cypress"/>

describe('verify the functionality fot checkbox',function(){
    this.beforeEach('brfore each testcase', function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })
     
    it('verify the checkbox with click function',function(){
        cy.get('input[value="option-1"]').click().should('be.checked')
        cy.get('input[value="option-1"]').click().should('not.be.checked')
       
        cy.get('input[value="option-3"]').click().should('not.be.checked')
        cy.get('input[value="option-3"]').click().should('be.checked')
        
         
    })

    it('verify the one checkbox with check() and unchecked() function',function(){
        cy.get('input[value="option-3"]').check().should('be.checked')
        cy.get('input[value="option-3"]').uncheck().should('not.be.checked')
    })
    it('verify the  mutiple check box with checked() and unchecked() function',function(){
        cy.get('input[type="checkbox"]').each(function(el){
            cy.log(el)
            cy.wrap(el).as('checkbox')
            cy.get('@checkbox').check().should('be.checked')
            cy.get('@checkbox').uncheck().should('not.be.checked')

        })
    })

    it('verify the  one check radio button with click() function',function(){
        cy.get('input[value="green"]').click().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')

    })

    it('verify the  one check radio button with check() function',function(){
        cy.get('input[value="green"]').check().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')


})
//input[name="color"]
it('verify the all radiobutto with chech()',function(){
    cy.get('input[name="color"]').each(function(el){
        cy.log(el)
        cy.wrap(el).as('radiobutton')
        cy.get('@radiobutton').check().should('be.checked')
        //cy.get('@radiobutton').uncheck().should('not.be.checked')


    })
})

    it('check whether the particular element is disabled',function(){
        cy.get('input[value="cabbage"]').should('be.disabled')
    })

    it.only('check whether the particular element is enaabled',function(){
        cy.get('input[value="lettuce"]').should('be.enabled')
    })

})