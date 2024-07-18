import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      backgroundImage: {
        "fullpage-gradient":
          "linear-gradient(to bottom right, #2C2A4A, #907AD6)",
      },
      backgroundClip: {
        text: "text",
      },
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    colors: {
      transparent: "transparent",
      white: "#F9FBF2",
      black: "#1A1D1A",
      mauve: {
        100: "#DABFFF",
        200: "#907AD6",
        300: "#4F518C",
        400: "#2C2A4A",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".gradient-text": {
          "@apply bg-gradient-to-r from-mauve-400 via-mauve-100 to-mauve-200 bg-clip-text text-transparent":
            {},
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
