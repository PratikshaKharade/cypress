///<reference types = "cypress"/>

describe('gorest GET,POST,PUT API', function () {

    let accessToken = "705903ab317409295d66e2a95195e34e6fa1aaac78ef50478c968e2d0e78e767"

    it('POST,PUT,DELETE', function () {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `patu.ramakrishna${Math.floor(Math.random() * 100000)}@gmail.com`,
                status: "active"
            }
        }).then(function (res) {
            //cy.log(res.body.id)
            return res.body.id
        }).then(function (id) {
            // cy.log(id)
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
                body: {
                    name: "pratiksha kharade",
                    gender: "female",
                    email: `pratu.34xyz5@gmail.com`,
                    status: "active"
                }

            }).then(function (res) {
                //cy.log(res)
                expect(res.status).to.eq(200)
                return res.body.id
            }).then(function (id) {

                cy.request({
                    method: "DELETE",
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }

                }).then(function(res){
                    //expect(res.status).to.eq(204)
                    cy.log(res)
                })

            })


        })

    })



})