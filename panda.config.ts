import { defineConfig, defineTextStyles } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      textStyles: defineTextStyles({
        body: {
          description: "The body text style - used in paragraphs",
          value: {
            fontFamily: "Inter",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0",
            textDecoration: "None",
            textTransform: "None",
          },
          
        },
        title: {
          description: "Title text style",
          value: {
            fontFamily: "Inter",
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "32px",
            letterSpacing: "0",
            textDecoration: "None",
            textTransform: "None",
          },
        },
      }),
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
