/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js,svelte,ts}"],
   theme: {
      extend: {
         fontFamily: {
            space: ["Space Grotesk", "sans-serif"],
         },
         boxShadow: {
            "neubrut-2": "2px 2px 0px #000000;",
            "neubrut-4": "4px 4px 0px #000000;",
            "neubrut-6": "6px 6px 0px #000000;",
         },
      },
   },
   plugins: [],
};
