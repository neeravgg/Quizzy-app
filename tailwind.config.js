function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heebo: "'Heebo', sans-serif",
        raleway: "'Raleway', sans-serif",
      },

      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          muted: withOpacity("--color-text-muted"),
          accent: withOpacity("--color-text-accent"),
          inverted: withOpacity("--color-text-inverted"),
          "svg-accent": withOpacity("--color-svg-accent"),
          "svg-muted": withOpacity("--color-svg-accent-muted"),
          "svg-hover": withOpacity("--color-svg-hover"),
          "svg-hover-muted": withOpacity("--color-svg-hover-muted"),
        },
      },
      backgroundColor: {
        skin: {
          base: withOpacity("--color-base"),
          muted: withOpacity("--color-muted"),
          hue: withOpacity("--color-green-hue"),
          "hue-hover": withOpacity("--color-green-hover"),
          gold: withOpacity("--color-gold-hue"),
          "gold-hover": withOpacity("--color-gold-hover"),
          dull: withOpacity("--color-dull"),
          inverted: withOpacity("--color-inverted"),
          highlight: withOpacity("--color-highlight-base"),
          "btn-accent": withOpacity("--color-button-accent"),
          "btn-hover": withOpacity("--color-button-hover"),
          "btn-mt": withOpacity("--color-button-muted"),
          "btn-mt-hover": withOpacity("--color-button-muted-hover"),
        },
      },
      borderColor: {
        skin: {
          base: withOpacity(" --color-border-base"),
          muted: withOpacity(" --color-border-muted"),
        },
      },
      gradientColorStops: {
        skin: {
          base1: withOpacity("--color-gradient-base1 "),
          base2: withOpacity("--color-gradient-base2"),
          complete1: withOpacity("--color-gradient-completed1"),
          complete2: withOpacity("--color-gradient-completed2"),
          wrong1: withOpacity("--color-gradient-wrong1"),
          wrong2: withOpacity("--color-gradient-wrong2"),
          locked1: withOpacity("--color-gradient-locked1"),
          locked2: withOpacity("--color-gradient-locked2"),
          login1: withOpacity("--color-gradient-login1"),
          login2: withOpacity("--color-gradient-login2"),
        },
      },
    },
  },
  plugins: [],
};
