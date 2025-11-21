// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta customizada baseada em 'SAUDE'
        'brand': {
          'light': '#5DC8F0',  // Azul Claro (Action-Light)
          'DEFAULT': '#004CCC', // Azul Escuro (Primary-Brand)
        },
        'neutral': {
          'light': '#FCFCF7', // Fundo Quase Branco (Primary-Light)
          'dark': '#1C0C09', // Texto Escuro (Neutral-Dark)
        },
        // Cor de alerta/emergência (mantendo um vermelho forte para o tema Dengue)
        'danger': '#B91C1C', 
      },
    },
  },
  plugins: [],
}