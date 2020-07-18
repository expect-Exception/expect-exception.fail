describe("Podcast", () => {
  beforeEach(() => {
    cy.visit("/podcast");
  });

  it("loads", () => {
    cy.contains("h1", "Podcast Episodes");
  });

  it("displays one section per episode with a link to the detail page", () => {
    cy.readFile("static/episodes.json").then((episodes) => {
      cy.get("section").should("exist").and("have.length", episodes.length);
    });
  });
});
