/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'photo1': "url('/public/photo-1.jpg')",
        'photo2': "url('/public/photo-2.jpg')",
        'photo4': "url('/public/photo-4.jpg')",
        'photo5': "url('/public/photo-5.jpg')",
        'photo6': "url('/public/photo-6.jpg')",
        'photo7': "url('/public/photo-6-a.jpg')",
        'photo8': "url('/public/photo-7.jpg')",
        'photo9': "url('/public/photo-8.jpg')"
      }
    },
  },
  plugins: [],
}