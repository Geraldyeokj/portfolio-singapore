/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'orange-doggo': "url('/src/imgs/orange-texture.jpg')",
        'brown-wood-1': "url('/src/imgs/brown-wooden-floor.jpg')",
        'white-marble-1': "url('/src/imgs/white-marble.jpg')",
        'gastimater': "url('/src/imgs/gastimater-background-2.jpg')",
        'red-portal': "url('/src/imgs/red-portal.jpg')"
      }, 
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'card-lg': '50px',

      }
    },
  },
  plugins: [],
}

