/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        fontFamily: {
          'montserrat': ['Montserrat'],
        },
        backgroundImage: {
          'card-background': "url('/src/assets/images/backgroundCard.jpg')",
        },
        gridTemplateColumns: {
          'shopping': 'repeat(9, minmax(50px, 1fr))',
        },
        screens: {
          'laptop': {'max': '1024px'},
          'tablet': {'max': '868px'},
        },
    },
    plugins: []
  }
}