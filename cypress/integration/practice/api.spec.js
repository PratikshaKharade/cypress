///<reference types = "cypress"/>

//const { method } = require("cypress/types/bluebird")

describe('validate API by cypress', function(){
it('verify the GET API',function(){
cy.request({
    method : "GET",
    url : "https://reqres.in/api/users?page=1"
}).then(function(res){
    expect(res.status).to.eq(200)
})

})

    it('verify the POST API', function(){
        cy.request({
            method : "POST",
            url: "https://reqres.in/api/users?page=1",
            body : {
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function(res){
            expect(res.status).to.eq(201)

        })
    })

    it('verify PUT API',function(){
        cy.request({
            method : "PUT",
            url : "https://reqres.in/api/users/2",
            body : {
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(function(res){
            expect(res.status).to.eq(200)
        })

    })

    it('verify DELETE API', function(){
        cy.request({
            method : "DELETE",
            url : "https://reqres.in/api/users/2"
        }).then(function(res){
            expect(res.status).to.eq(204)

        })
    })
})