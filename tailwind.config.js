/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'orange-doggo': "url('/src/imgs/orange-texture.jpg')",
        'brown-wood-1': "url('/src/imgs/brown-wooden-floor.jpg')",
        'white-marble-1': "url('/src/imgs/white-marble.jpg')"
      }
    },
  },
  plugins: [],
}

