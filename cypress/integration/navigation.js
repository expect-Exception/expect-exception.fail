describe('Navigation', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('navigates to /about', () => {
		cy.get('nav a').contains('Exceptional Crew').click();
		cy.url().should('include', '/about');
	});

	it('navigates to /podcast', () => {
		cy.get('nav a').contains('Podcast').click();
		cy.url().should('include', '/podcast');
	});

	it('navigates to /sponsorships', () => {
		cy.get('nav a').contains('Sponsorships').click();
		cy.url().should('include', '/sponsorships');
	});

	it('navigates to /', () => {
		cy.get('nav a').contains('Home').click();
		cy.url().should('include', '/');
	});
});
