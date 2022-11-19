///<reference types = "cypress"/>

describe('verify kitchen api', function(){

    it('GET request', function(){
        cy.request({
            method : 'GET',
            url : 'https://jsonplaceholder.cypress.io/comments/1'
        }).then (function(res){
            cy.log(res)
        })
    })
    
    })