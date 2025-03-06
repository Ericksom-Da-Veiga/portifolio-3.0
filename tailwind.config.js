/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "1050px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1920px",
      "4k": "2160px",
    },
    extend: {
      colors: {
        background: "#000",
        // foreground: "hsl(var(--foreground))",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#000",
        primary: "#00FF00",
        yellow: "#FBB040",
        blue: "#4831d4",
        "blue-dark": "#141c3a",
        green: "#5BE9B9;",
        // "body-color": "#788293",
        // "body-color-dark": "#959CB1",
        "gray-dark": "#7d7d7d",
        "gray-light": "#F0F2F9",
        stroke: "#E3E8EF",
        "stroke-dark": "#353943",
        "bg-color-dark": "#171C28",
        "body-text": "#FFFF",
        light: "#FFDCDC",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        "title-lg": ["39px", "49px"],
        "title-md": ["30px", "36px"],
        "title-sm": ["24px", "30px"],
      },
      fontFamily: {
        title: ["Merriweather", "serif"], // Fonte para títulos
        body: ["Georgia", "sans-serif"], // Fonte para textos
        signature: ["Playfair Display", "serif"], // Fonte para nomes
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  corePlugins: {
    scrollBehavior: true, // Ativa scroll suave no Tailwind
  },
};
