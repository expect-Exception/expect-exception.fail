const tailwindcss = require("tailwindcss");

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.svelte", "./src/**/*.html"],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  whitelist: ["h-4", "h-8", "h-16", "h-32", "h-64"],
});

module.exports = {
  plugins: [
    require("autoprefixer"),
    tailwindcss("./tailwind.config.js"),

    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),

    require("cssnano")({
      preset: "default",
    }),
  ],
};
