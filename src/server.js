import sirv from "sirv";
import polka from "polka";
import redirect from("@polka/redirect");
import compression from "compression";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

polka()
  .get("/feed.xml", (req, res) => {
    redirect(res, "https://g8qwn1.podcaster.de/expect-exception.rss");
  })
  .get("static/feed.xml", (req, res) => {
    redirect(res, "https://g8qwn1.podcaster.de/expect-exception.rss");
  })
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
