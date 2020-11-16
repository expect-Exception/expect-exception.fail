const name = "expect(Exception)";
const summary =
  "Conversations about Frontend Testing. Every single line of code that is tested is a win for us. Unit, Integration, E2E, Snapshot, Visual Regression. Expect Exceptional Discussions about Frameworks, Tools, Libraries and Techniques. Frontend Testing is such an optionated topic and hosts Vanessa Böhner, Mirjam Bäuerlein, Markus Wolf, David Müllerchen, Nikolaus Rademacher and Roman Kuba will dive deep into it to answer all your... or their questions. The web develops quickly. It's time that the testing evolves with it.";

module.exports = (
  items
) => `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
<channel>
  <title>${name}</title>
  <copyright>All rights reserved</copyright>
  <link>https://expect-exception.fail/podcast</link>
  <atom:link href="https://expect-exception.fail/podcast" rel="alternate" type="text/html"/>
  <language>en-us</language>
  <description>${summary}</description>
  <itunes:author>${name}</itunes:author>
  <itunes:summary>${summary}</itunes:summary>
  <itunes:explicit>no</itunes:explicit>
  <itunes:image href="https://expect-exception.fail/logo-3000.png"/>
  <itunes:keywords>expect exception, testing, frontend, software, web development, programming, code, coding, software engineering</itunes:keywords>
  <itunes:owner>
    <itunes:name>${name}</itunes:name>
    <itunes:email>boehner.vanessa@gmail.com</itunes:email>
  </itunes:owner>
  <itunes:category text="Technology">
    <itunes:category text="Software How-To"/>
    <itunes:category text="Tech News"/>
  </itunes:category>
	${items
    .map(
      (item) => `
		<item>
			<title>${item.title}</title>
			<link>https://expect-exception.fail/podcast/${item.id}</link>
      <description>${item.subtitle} ${item.description}</description>
      <content:encoded><![CDATA[<p>${item.description}</p>${
        item.links && item.links.length > 0
          ? "<p>Links</p><ul>" +
            item.links
              .map(
                (link) => `<li><a href="${link.href}">${link.label}</a></li>`
              )
              .join("") +
            "</ul>"
          : ""
      }${
        item.hosts && item.hosts.length > 0
          ? "<p>Hosts</p><ul>" +
            item.hosts
              .map(
                (host) =>
                  `<li>${host.name}` +
                  host.socials
                    .map(
                      (social, index) =>
                        `
                      ${index === 0 ? " &ndash; " : ""}<a href="${
                          social.href
                        }">${social.label}</a>`
                    )
                    .join(",") +
                  "</li>"
              )
              .join("") +
            "</ul>"
          : ""
      }${
        item.sponsors && item.sponsors.length > 0
          ? "<p>Sponsors</p><ul>" +
            item.sponsors
              .map(
                (sponsor) =>
                  `<a href="${sponsor.href}">${sponsor.label}</a> &ndash; ${sponsor.detail}.`
              )
              .join("") +
            "</ul>"
          : ""
      }

      </p>]]></content:encoded>
      <pubDate>${new Date(item.time * 1000).toUTCString()}</pubDate>
      <enclosure url="${
        item.link
      }" type="audio/mpeg"/>
      <itunes:episodeType>full</itunes:episodeType>
      <itunes:episode>${item.id}</itunes:episode>
      <itunes:image href="https://expect-exception.fail/logo-3000.png"/>
      <itunes:explicit>no</itunes:explicit>
      <itunes:subtitle>${item.subtitle}</itunes:subtitle>
      <itunes:summary>${item.description}</itunes:summary>
      <dc:creator>${name}</dc:creator>
      <itunes:author>${name}</itunes:author>
		</item>
	`
    )
    .join("\n")}
    </channel>
  </rss>`;
