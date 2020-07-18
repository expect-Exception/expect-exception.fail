#! /usr/bin/env node

"use strict";

const fs = require("fs");
const render = require("./rss.js");
const items = require("./static/episodes.json");

module.exports.transform = () => {
  const xml = render(items);

  fs.writeFile(`static/feed.xml`, xml, (err) => {
    if (err) throw err;
    console.log("Feed JSON written to XML file");
  });
};
