const _ = require('lodash');

module.exports = {
  variants: {
    scale: ['hover', 'group-hover'],
    opacity: ['group-hover'],
  },
  theme: {
    extend: {
      colors: {
        "primary-dark": "#303F9F",
        "accent": "#9495fb",
        "primary-light": "#C5CAE9",
        "primary-text": "#212121",
        "primary": "#3F51B5",
        "accent-text": "#757575",
        "text": "#FFFFFF",
        "divider": "#BDBDBD",
      }
    },
    gradients: theme => ({
      "dark-to-primary": [
        theme("colors.accent"),
        theme("colors.primary-dark")
      ]
    })
  },
  plugins: [
    function({ addUtilities, e, theme }) {
      const gradients = theme("gradients", {});

      const utilities = _.map(
        gradients,
        ([start, end], name) => ({
          [`.bg-gradient-${e(name)}`]: {
            backgroundImage: `linear-gradient(to right bottom, ${start}, ${end})`
          }
        })
      );

      addUtilities(utilities);
    }
  ]
}
