describe('Landingpage', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'expect(Exception)')
	});

	it('navigates to /about', () => {
		cy.get('nav a').contains('Exceptional Crew').click();
		cy.url().should('include', '/about');
	});

	it('navigates to /sponsorships', () => {
		cy.get('nav a').contains('Sponsorships').click();
		cy.url().should('include', '/sponsorships');
	});
});