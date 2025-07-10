/** @type {import('tailwindcss').Config} */

const safeHeights = {};
for (let i = 0; i <= 100; i += 1) {
  safeHeights[`${i}-vh-safe`] = `calc(var(--vh) * ${i})`;
}
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      custum_first: "1130px",
      custum_second: "1000px",
      custum_third: "655px",
      custum_fourth: "350px",
      custum_fiveth: "900px",
      fix: "500px",
      fix_e: "430px",
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
    extend: {
      fontSize: {
        nav: "16px",
        span: "64px",
        sub_title: "26px",
        intro_description: "20px",
        button: "16px",
        grid_title: "36px",
        grid_text: "18px",
      },

      height: safeHeights,
      minHeight: safeHeights,
      maxHeight: safeHeights,
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          100: "#d0f0e6", // lightest tint
          200: "#a3e1cd",
          300: "#75d1b4",
          400: "#48c29b",
          500: "#047857", // main accent color
          600: "#03654a",
          700: "#02533d",
          800: "#014230",
          900: "#003123", // darkest shade
        },        
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        purple: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407",
        },
        cyan: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344",
        },
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        sans: ["Source Sans Pro", "sans-serif"],
        sora: ["Sora"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slideInFromRight: {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        wiggle: {
          "0%": { transform: "translate(-8.5px)" },
          "50%": { transform: "translate(3.5px)" },
          "100%": { transform: "translate(-8.5px)" },
        },
        bounce1: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25px)" },
        },
        bounce2: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        bounce3: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" },
        },
        bounce4: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-35px)" },
        },
        bounce5: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25px)" },
        },
        bounce6: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-40px)" },
        },
        bounce7: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        bounce8: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        bounce9: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        bounce10: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        borderPulse: {
          "0%, 100%": { borderColor: "#65c9b5" },
          "50%": { borderColor: "#329682" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in-right": "slideInFromRight 0.8s ease-out forwards",
        bounce1: "bounce1 1s ease-in-out infinite",
        bounce2: "bounce2 1s ease-in-out infinite",
        bounce3: "bounce3 1s ease-in-out infinite",
        bounce4: "bounce4 1s ease-in-out infinite",
        bounce5: "bounce5 1s ease-in-out infinite",
        bounce6: "bounce6 1s ease-in-out infinite",
        bounce7: "bounce7 1s ease-in-out infinite",
        bounce8: "bounce8 1s ease-in-out infinite",
        bounce9: "bounce9 1s ease-in-out infinite",
        bounce10: "bounce10 1s ease-in-out infinite",
        "border-pulse": "borderPulse 1s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
