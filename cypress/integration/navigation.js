describe('Navigation', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('navigates to /about', () => {
		cy.get('nav a').contains('Exceptional Crew').click();
		cy.url().should('include', '/about');
	});

	it('navigates to /episodes', () => {
		cy.get('nav a').contains('Episodes').click();
		cy.url().should('include', '/episodes');
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
