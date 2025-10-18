/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#f4f1f7',
          100: '#e8e2ef',
          200: '#d1c5df',
          300: '#cba8cb',
          400: '#b18bb1',
          500: '#976e97',
          600: '#7d517d',
          700: '#633463',
          800: '#4a1749',
          900: '#2f0a2f',
          950: '#0e0425',
        },
        'secondary': {
          50: '#faf9fc',
          100: '#f5f3f9',
          200: '#ebe7f3',
          300: '#e0dbed',
          400: '#d5cfe7',
          500: '#cba8cb',
          600: '#a387a3',
          700: '#7b667b',
          800: '#534553',
          900: '#2b242b',
        },
        'accent': {
          light: '#e8d5f0',
          DEFAULT: '#cba8cb',
          dark: '#8b6b8b',
        },
        'surface': {
          light: 'rgba(203, 168, 203, 0.08)',
          DEFAULT: 'rgba(203, 168, 203, 0.15)',
          medium: 'rgba(203, 168, 203, 0.25)',
          strong: 'rgba(203, 168, 203, 0.45)',
        },
        'text': {
          primary: '#ffffff',
          secondary: 'rgba(255, 255, 255, 0.8)',
          muted: 'rgba(255, 255, 255, 0.6)',
          accent: '#cba8cb',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0e0425 0%, #cba8cb 100%)',
        'gradient-reverse': 'linear-gradient(315deg, #0e0425 0%, #cba8cb 100%)',
        'gradient-soft': 'linear-gradient(135deg, rgba(14,4,37,0.8) 0%, rgba(203,168,203,0.8) 100%)',
        'gradient-overlay': 'linear-gradient(135deg, rgba(14,4,37,0.6) 0%, rgba(203,168,203,0.6) 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(14,4,37,0.25) 0%, rgba(203,168,203,0.25) 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(203, 168, 203, 0.3)',
        'glow-strong': '0 0 30px rgba(203, 168, 203, 0.5)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
  },
  plugins: [],
};
