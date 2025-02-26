/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Jedira-Regular', 'sans-serif'],
        ppmori: ['PPMori-Extralight', 'sans-serif'],
        ppmoriRegular: ['PPMori-Regular', 'sans-serif'],
        ppmoriSemiBold: ['PPMori-SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
