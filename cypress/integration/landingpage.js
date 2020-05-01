describe('Landingpage', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'expect(Exception)')
	});

	describe('Podcast', () => {
		beforeEach(() => {
			cy.visit('/');
		})

		it('links to episodes when clicking on the headline', () => {
			cy.get('section h3 a').contains('Podcast').click();
			cy.url().should('include', '/episodes');
		});

		it('links to episodes when clicking on the link', () => {
			cy.get('section a').contains('Podcast').click();
			cy.url().should('include', '/episodes');
		});

		it('links to episodes when clicking on the icon', () => {
			cy.get('.fa-podcast').click();
			cy.url().should('include', '/episodes');
		});
	});
});
