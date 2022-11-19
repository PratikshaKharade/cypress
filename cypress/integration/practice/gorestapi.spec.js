
///<reference types = "cypress"/>

describe('verofy API of gorest', function () {

    let accessToken = `705903ab317409295d66e2a95195e34e6fa1aaac78ef50478c968e2d0e78e767`
    it('verify GET API', function () {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            Headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(function (response) {
            //cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.body?.length).to.eq(10)
            expect(response.duration).to.be.lessThan(700)

            response.body.forEach(element => {

                expect(element).to.have.keys(['id', 'name', 'email', 'status', 'gender'])

            });

            response.body.forEach(el => {
                expect(el.id).not.to.null
                expect(el.name).not.to.null
                expect(el.email).not.to.null
                expect(el.status).not.to.null
                expect(el.gender).not.to.null
            })
        })
    })
    // create user
    it('verify POST API', function () {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: "tqwsa.ramakrishna@15ce.com",
                status: "active"
            }

        }).then(function ({ status, body, duration }) {
            //cy.log(status,body,duration)
            expect(status).to.eq(201)
            expect(body).to.have.keys(['id', 'name', 'email', 'status', 'gender'])
            expect(duration).to.have.lessThan(1000)

        })

    })

    // update
    it.only('verify PUT API', function () {
        cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/33",
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            body: {
                name: "Allasani Peddana",
                email: "aa.peddana@15ce.com",
                status: "active"
            }
        }).then(function (response) {
            cy.log(response)

        })

    })

})