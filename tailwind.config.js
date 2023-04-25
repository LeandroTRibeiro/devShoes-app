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
      animation: {
        'ping-first': 'ping .5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-second': 'ping .7s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-third': 'ping .9s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      gridTemplateColumns: {
        'shopping': 'repeat(9, minmax(96px, 1fr))',
      }
  },
  plugins: [],
}
}