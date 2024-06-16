import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff8a65",
      },
      fontSize: {
        "xl-bold": [
          "20px",
          {
            lineHeight: "38px",
            fontWeight: "700",
          },
        ],
        "lg-bold": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "700",
          },
        ],
        "sm-bold": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "700",
          },
        ],
      },
      fontFamily: {
        yekan: ["IranYekan"],
      },
    },
  },
  plugins: [],
};
export default config;
