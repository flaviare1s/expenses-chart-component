/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'dm': ['DM Sans', 'sans-serif'],
      },
      colors: {
        soft_red: 'hsl(10, 79%, 65%)',
        cyan: 'hsl(186, 34%, 60%)',
        dark_brown: 'hsl(25, 47%, 15%)',
        medium_brown: 'hsl(28, 10%, 53%)',
        cream: 'hsl(27, 66%, 92%)',
        very_pale_orange: 'hsl(33, 100%, 98%)',
      },
    },
  },
  plugins: [],
}

