module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'svelte-red': '#ff3e00',
        'svelte-red-dark': '#ff4000c5',
      },
      gap: {
        'vh-small': '0.15vh',
      },
      padding: {
        'vh-small': '0.15vh',
      },
      width: {
        'vh-large': '3.4vh',
        'vh-medium': '3.1vh',
        'vh-small': '3.0vh',
        'vh-xs': '2.5vh',
      },
      height: {
        'vh-large': '3.4vh',
        'vh-medium': '3.1vh',
        'vh-small': '3.0vh',
        'vh-xs': '2.5vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
