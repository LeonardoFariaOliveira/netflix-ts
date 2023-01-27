/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,tsx, ts}", "./components/**/*.{html,tsx, ts}"],
  theme: {
    maxWidth:{
      'full': '100%',
      '8xl': '60rem',
      '9xl': '120rem',
    },
    colors:{
      'accent': '#E50914',
      'white': '#fff',
      'black': {
        300: "#000",
        400: '#111',
        500: "#222"
      },
      'font-footer': '#626262'
    },
    fontFamily: {
      'body': ['"Poppins"'],
    }
  },
  plugins: [],
}
