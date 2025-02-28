import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,ts,js,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
     
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        marquee: "marquee 55s linear infinite", // 15s para velocidad moderada
      },

      fontSize: {
        h1: ['30px', '1.2'], // Para móvil (base)
        'h1-md': ['50px', '1.2'], // Para tablet
        'h1-lg': ['64px', '1.2'], // Para desktop
        h2: ['23px', '1.2'], // Para móvil (base)
        'h2-md': ['30px', '1.2'], // Para tablet
        'h2-lg': ['50px', '1.2'], // Para desktop
        h3: ['15px', '1.2'], // Para móvil (base)
        'h3-md': ['18px', '1.2'], // Para tablet
        'h3-lg': ['20px', '1.2'], // Para desktop
        p: ['14px', '1.5'], // Para móvil (base)
        'p-md': ['18px', '1.5'], // Para tablet
        'p-lg': ['23px', '1.5'], // Para desktop
        p1: ['14px', '1.5'], // Para móvil (base)
        'p1-md': ['15px', '1.5'], // Para tablet
        'p1-lg': ['18px', '1.5'], // Para desktop
      },
    },
  },
  plugins: [],

  
};

export default config;

{/*
   fontSize: {
        "custom-base-title": "72px", // Define el tamaño de fuente por defecto
      }, 
       */}
