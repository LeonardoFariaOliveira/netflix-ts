/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,tsx, ts}", "./components/**/*.{html,tsx, ts}"],
  theme: {
    maxWidth:{
      '9xl': '120rem',
    },
    colors:{
      'accent': '#E50914',
      'white': '#fff',
      'black': '#111',
      'font-footer': '#626262'
    },
    fontFamily: {
      'body': ['"Poppins"'],
    }
  },
  plugins: [],
}
