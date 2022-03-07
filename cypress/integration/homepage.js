describe("renders the home page", () => {
    beforeEach(() => {
        cy.visit("/")
    })
    it("renders correctly",()=>{
        cy.get("#header").should("exist")
        cy.get("#form").should("exist")
    })

    it("test characters api response",()=>{
        cy.request('https://rickandmortyapi.com/api/character/')
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.results).to.have.property('length').and.be.greaterThan(0)
          expect(response.body).to.have.property('info')
        })
    })

    it("test search character by name",()=>{
        cy.request('https://rickandmortyapi.com/api/character/?name=Alexander')
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.results).to.have.property('length').and.be.greaterThan(0)
          expect(response.body).to.have.property('info')
        })
    })

    it("test search character by wrong name",()=>{
        cy.request({url:'https://rickandmortyapi.com/api/character/?name=Anas',failOnStatusCode:false})
        .then((error) => {
            expect(error.body).to.have.property('error')
          })
    })

    it("Search Character By Adding Value and Click on Search Button",()=>{
        cy.get('.form-field').clear();
        cy.get('.form-field').type('Alexander');
        cy.get('.submit-button').click();
    })

    it("Reset Search Record by click on reset button",()=>{
        cy.get('.form-field').clear();
        cy.get('.form-field').type('Alexander');
        cy.get('.submit-button').click();
        cy.get('#resetSearch').click();
    })

    it("View Character Detail",()=>{
        cy.get(':nth-child(2) > .character-list-Details > .view-btn').click();
    })

    it("View Character Detail and Close the character details",()=>{
        cy.get(':nth-child(2) > .character-list-Details > .view-btn').click();
        cy.get('.header > img').click();
    })

    it("View Characters and Load More",()=>{
        cy.get('.load-more-btn').click();
    })

    it("Search Correct with wrong name",()=>{
        cy.get('.form-field').clear();
        cy.get('.form-field').type('Anas');
        cy.get('.submit-button').click();
    })

    // it("View Characters List and load more until the last records", () => {
    //     setInterval(async()=>{     
    //     cy.get("[data-testid=total-records]").then(($span) => {
    //         console.log($span.text())
    //         let totalRecords = $span.text();

    //         cy.get("[data-testid=fetch-records]").then(($span) => {
    //             let fetchRecords = $span.text();
    //             console.log(totalRecords)
    //             console.log(fetchRecords)
    //             console.log(totalRecords > Number(fetchRecords))
    //             if (totalRecords > Number(fetchRecords)) {
    //                     cy.get('.load-more-btn').click();                    
    //             }
    //         })           

    //     })
    // },500)
    //     /* ==== Generated with Cypress Studio ==== */
    //     cy.get('[data-testid="fetch-records"]').;
    //     /* ==== End Cypress Studio ==== */
    // })
})