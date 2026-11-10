/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        signature: ['"Mr Dafoe"', '"Brush Script MT"', 'cursive'],
      },
      colors: {
        ink: { 950: '#07090d', 900: '#0b0f16', 800: '#111722', 700: '#1a2230' },
        accent: { DEFAULT: '#2dd4bf', soft: '#5eead4' },
      },
    },
  },
  plugins: [],
};
