describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'expect(Exception)$')
	});

	it('navigates to /about', () => {
		cy.get('nav a').contains('home').click();
		cy.url().should('include', '/');
	});
});