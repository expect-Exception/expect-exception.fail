const _ = require("lodash");

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  variants: {
    scale: ["hover", "group-hover"],
    opacity: ["group-hover"],
  },
  theme: {
    extend: {
      colors: {
        "primary-dark": "#303F9F",
        accent: "#9495fb",
        "primary-light": "#D1D1E9",
        "primary-text": "#212121",
        primary: "#2B2C34",
        "accent-text": "#757575",
        text: "#FFFFFF",
        divider: "#BDBDBD",
        tertiary: "#e45858",
        link: "#6246EA",
      },
    },
    gradients: (theme) => ({
      "dark-to-primary": [theme("colors.accent"), theme("colors.primary-dark")],
    }),
  },
  plugins: [
    function ({ addUtilities, e, theme }) {
      const gradients = theme("gradients", {});

      const utilities = _.map(gradients, ([start, end], name) => ({
        [`.bg-gradient-${e(name)}`]: {
          backgroundImage: `linear-gradient(to right bottom, ${start}, ${end})`,
        },
      }));

      addUtilities(utilities);
    },
  ],
};
