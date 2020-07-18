function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

describe("Podcas Slug", () => {
  let randomEpisodeNum;
  let episode;

  beforeEach(() => {
    cy.readFile("static/episodes.json").then((episodes) => {
      randomEpisodeNum = getRandomInt(episodes.length);
      episode = episodes[randomEpisodeNum];
      cy.visit(`/podcast/${randomEpisodeNum + 1}`);
    });
  });

  it("displays the id and title of the slug episode", () => {
    cy.contains("h1", `#${episode.id} ${episode.title}`);
  });

  it("renders the audio element", () => {
    cy.get("audio")
      .find("source")
      .should("have.attr", "src")
      .should(
        "include",
        `https://vannsl.io/expect-exception/expect-exception-${episode.id}.mp3`
      );
  });
});
