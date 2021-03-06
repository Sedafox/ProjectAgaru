import InfiniteScrollPage from "../Integration/PageObject/infiniteScrollPage";

const infiniteScrollPage = new InfiniteScrollPage()

describe('Tests infinite scrolling', () => {
    beforeEach('refreshes page', () => {
        infiniteScrollPage.visitInfiniteScrollTesting()
    })

    it('Scrolls for about 20 seconds, gets tired, and gives up. Ensures the div is still visible at the end', () => {
        cy.scrollTo('bottom', {duration: 20000})
        infiniteScrollPage.findDiv().should('be.visible')
    })
})