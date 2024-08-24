import type { Config } from "tailwindcss";

const config: Config = {
  content: [

    "./src/client/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
      purpleLigth: "#9E6DC2",
      purpleInput: "#170027",
      purpleDark: "#290742",
      green: "#4FFF4B",
      white: "#FBF6FF",
      whiteDark: "#dfdae3",
      black: "#000"
     }
    },
  },
  plugins: [],
};
export default config;
