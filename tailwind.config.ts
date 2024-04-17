import { url } from "inspector";
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
        dark_blue_gray: "#666CA3",
        yankees_blue: "#13183F",
        roman_silver: "#83869A",
        sasquatch_socks: "#F74780",
        carnation_pink: "#FFA7C3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-1": "linear-gradient(to bottom, #FF6F48 0%, #F02AA6 100%)",
        "gradient-2": "linear-gradient(to bottom, #4851FF 0%, #F02AA6 100%)",
        "gradient-3": "linear-gradient(to bottom, #FFFFFF 0%, #F0F1FF 100%)",
        "hero-image-mobile": `url("/images/image-hero-mobile@2x.webp")`,
        "hero-image-tablet": `url("/images/image-hero-tablet@2x.webp")`,
        "hero-image-desktop": `url("/images/image-hero-desktop@2x.webp")`,
      },
    },
  },
  plugins: [],
};
export default config;
