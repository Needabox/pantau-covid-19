module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat\\ Alternates', 'sans-serif'],
        'open-sans': ['Open\\ Sans', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
