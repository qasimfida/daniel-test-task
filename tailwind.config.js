/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        custom: ['Druk', 'sans'], // 'sans' is a fallback font if your custom font is unavailable
      },
    },
    colors: {
      navyblue: "var(--additional-navyblue, #2B2D42)",
      primaryBlue: "var(--primary-blue, #0083FE)",
      title: "var(--primary-white, #FFF)",
      button: "var(--primary-orange, #FF632C)",
      trans: "var(--primary-blue, #0083FE)"
    },
  },
  plugins: [],
}
