///<reference types = "cypress"/>



describe('multiple way to select element',function(){
it('verify the login functionality', function(){
//arrange
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//action
cy.get('input[name="username"]').type('Admin')
cy.get('input[name="password"]').type('admin123')
cy.get('button[type="submit"]').click()
//assert
cy.get('img[alt="client brand banner"]').should('be.visible')
})

it('verify the login functionality', function(){
    //arrange
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //action
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.contains('button','Login').click()
    //assert
    cy.get('img[alt="client brand banner"]').should('be.visible')
    })
    
    it('verify the login functionality', function(){
        //arrange
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //action
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.contains('button','Login').click()
        //assert
        cy.get('h5[class]').should('be.visible').and('have.text','Employee Information')
        //
        //
        cy.get('h5[class]').then(function(el){
            expect(el.text()).to.equal('Employee Information')
        })

        })
        
        it('verify the  mutiple check box with checked() by passing array parameter',function(){
            cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
            cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4'])

        })
        it('verify the select functionality via text', function () {
            cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
            cy.get('#dropdowm-menu-1').select('Python').should('have.value','python')
    
        })
        it.only('verify the select functionality via value attribute', function () {
            cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
            cy.get('#dropdowm-menu-1').select('python').should('contain','Python')
    
        })
    

})
