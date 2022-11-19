///<reference types = "cypress"/>

describe('verify the functionality of table by cypress', function(){
it('verify the first table',function(){
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    let sum = 0
    cy.get('#t01').find('tr').each(function(el,index){
        if(index != 0){
            //cy.log(el.children('td').last().text())
          sum = sum + Number(el.children('td').last().text())

        }
        //cy.log(sum)
    }).then(function(){
        expect(sum).to.eq(159)
    })
    
})

it('verify the first table',function(){
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    let sum = 0
    cy.get('#t02').find('tr').each(function(el,index){
        if(index != 0){
            //cy.log(el.children('td').last().text())
          sum = sum + Number(el.children('td').last().text())

        }
        cy.log(sum)
    }).then(function(){
        expect(sum).to.eq(163)
    })
    
})

it.only('verify the table via utility', function(){
cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
cy.validateTable(1,159)
cy.validateTable(2,163)

})

})