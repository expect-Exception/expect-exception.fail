describe("Landingpage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has the correct <h1>", () => {
    cy.contains("h1", "expect(Exception)");
  });

  describe("Podcast", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("links to podcast when clicking on the card", () => {
      cy.get("section h3").contains("Podcast").click();
      cy.url().should("include", "/podcast");
    });
  });
});
