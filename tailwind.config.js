/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "moderate-violet": 'hsl(263, 55%, 52%)',
        "light-violet": "#A775F2",
        "very-dark-grayish-blue": "hsl(217, 19%, 35%)",
        "very-dark-blackish-blue": "hsl(219, 29%, 14%)",
        white: "hsl(0, 0%, 100%)",
        "light-gray": "hsl(0, 0%, 81%)",
        "light-grayish-blue": "hsl(213, 44%, 95%)"
      },
      fontFamily: {
        "barlow": ['Barlow Semi Condensed', 'sans-serif']
      }
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px'
    }
  },
  plugins: []
}
