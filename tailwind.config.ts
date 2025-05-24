/** @format */

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/client/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mdx: '928px',
      },
      keyframes: {
        slideDown: {
          '0%': {
            opacity: '0',
            height: '0px',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            height: 'auto',
            transform: 'translateY(0)', 
          },
        },
      },
      colors: {
        purpleLigth: '#9E6DC2',
        purpleInput: '#170027',
        purpleDark: '#290742',
        green: '#00e963',
        greenHover: '#0cc058',
        greenGray: '#3e4943',
        white: '#FBF6FF',
        whiteDark: '#e6fff0',
        black: '#000',
      },
    },
  },
  plugins: [],
};
export default config;
