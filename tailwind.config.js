module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  colors: {
    'Goldenrod': "fdfdd8",
    'Antique White': "fee9d7",
    "Aero Blue": "c3fdde",
    'Celeste': "c3fdfd",
    "Pink Lace": "fdd6fe",
    "Lavender Blue": "c3c4fd",
    "Electric Blue": "4f687f",
    'Onyx': "383a3d",
  },

  backgroundColor: (theme) => ({
    ...theme("colors"),
    'Goldenrod': "fdfdd8",
    "Antique White": "fee9d7",
    "Aero Blue": "c3fdde",
    'Celeste': "c3fdfd",
    "Pink Lace": "fdd6fe",
    "Lavender Blue": "c3c4fd",
    "Electric Blue": "4f687f",
    'Onyx': "383a3d",
  }),
};
