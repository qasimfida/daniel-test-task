/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
       
      },
      fontFamily: {
        custom: ["Druk", "sans"], // 'sans' is a fallback font if your custom font is unavailable
      },
      backgroundImage: theme => ({
        'gradient-to-right-bottom': 'linear-gradient(to right bottom, rgb(0 131 254 / 80%), rgb(43 45 66 / 80%), rgb(109 111 132 / 80%))',
        'gradient-radial': 'radial-gradient(circle at 33% -40%, rgb(0 131 254 / 100%), rgb(43 45 66 / 80%), rgb(109 111 132 / 80%))'
      }),
    },
    colors: {
      navyblue: "var(--additional-navyblue, #2B2D42)",
      gradient:
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      primaryBlue: "var(--primary-blue, #0083FE)",
      title: "var(--primary-white, #FFF)",
      button: "var(--primary-orange, #FF632C)",
      trans: "var(--primary-blue, #0083FE)",
    },
  },
  plugins: [],
};
