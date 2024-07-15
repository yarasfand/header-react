/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        transitionProperty: {
            'transform': 'transform'
        },
        transitionDuration: {
            '300': '300ms'
        },
        transitionTimingFunction: {
            'in-out': 'ease-in-out'
        }
    }
},
variants: {
    extend: {
        transform: ['responsive', 'hover', 'focus']
    }
},
  plugins: [],
}

