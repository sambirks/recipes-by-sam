module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: theme => ({
        'lightImg': "url('/images/light-bg-pic.jpg')",
        'darkImg': "url('/images/dark-bg-pic.jpg')",
      })
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
}
