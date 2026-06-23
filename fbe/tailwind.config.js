/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('nativewind/preset')],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        fbe: {
          bg: '#fafaf7',
          ink: '#1e1e1e',
          muted: '#72726c',
          primary: '#4a635d',
          active: '#dde7e1',
          tan: '#d7cfc4',
          white: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
