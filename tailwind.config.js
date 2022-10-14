/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#e298df",
                
        "secondary": "#9e1e26",
                
        "accent": "#efa5b9",
                
        "neutral": "#221A23",
                
        "base-100": "#EAE3D2",
                
        "info": "#61B6CC",
                
        "success": "#115A37",
                
        "warning": "#EFB94D",
                
        "error": "#FB6260",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
