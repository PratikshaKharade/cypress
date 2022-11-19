///<reference types = "cypress"/>

describe('verify gprest API', function () {

    let accessToken = `Bearer 705903ab317409295d66e2a95195e34e6fa1aaac78ef50478c968e2d0e78e767`

    it.skip('verify GET API', function () {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {

                Authorization: accessToken
            }
        }).then(function (response) {
            //        cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.duration).to.have.lessThan(2000)
            response.body.forEach(el => {
                expect(el.id).not.to.null
                expect(el.name).not.to.null
                expect(el.email).not.to.null
                expect(el.status).not.to.null
                expect(el.gender).not.to.null

            });

        })
        it.only('verify POST API', function () {
            cy.request({
                method: "POST",
                url: "https://gorest.co.in/public/v2/users",
                headers: {
                    Authorization: accessToken
                },
                body: {
                    "name": "Tenali Ramakrishna",
                    "gender": "male",
                    "email": "tenali.ramakrishna@15ce.com",
                    "status": "active"
                }

            }).then(function(response){
                cy.log(response)

            })


        })


    })









})