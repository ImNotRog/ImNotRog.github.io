module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily:{
        content: ['Gelasio', 'serif'],
        title: ['Bebas Neue', 'sans-serif'],
        cursive: ['Yellowtail', 'cursive'],
        fatface: ['Abril Fatface', 'cursive']
      },
      colors: {
        bg1: '#1D1E2C',
        bg2: '#333447',
        primary: '#E5E5E5',
        highlight: '#E0D0A5',
        active: '#DBBA65'
      }
    },
  },
  plugins: [],
}
