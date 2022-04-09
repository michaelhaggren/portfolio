const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './firebase/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      zIndex: {
        0: 0,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        25: 25,
        50: 50,
        75: 75,
        100: 100,
        auto: 'auto',
      },
      transitionProperty: {
        width: 'width',
      },
      animation: {
        menuSlide: 'fadeIn 500ms ease-in-out',
        menuSlideClose: 'fadeOut 500ms ease-in-out',
        closeSlide: 'opacityFadeIn 500ms ease-in-out',
      },

      keyframes: () => ({
        fadeIn: {
          '0%': { width: 0 },
          '100%': { width: '75%' },
        },
        fadeOut: {
          '0%': { width: '75%' },
          '100%': { width: 0 },
        },
        opacityFadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
      }),
    },
    fontSize: {
      xxs: '.6rem',
      xs: '.75rem',
      tiny: '.8rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontFamily: {
      oswald: 'Oswald, sans-serif;',
      montserrat: 'Montserrat, sans-serif',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      orange: {
        orangePrimary: '#ffb612',
      },
      mint: {
        mintPrimary: '#FDF5E6',
      },
      green: {
        greenPrimary: '#203731',
      },
      white: '#FFFFFF',
      black: '#000000',
      indigo: colors.indigo,
      red: '#ff0033',
      yellow: colors.amber,
      blue: colors.blue,
    },
  },
  variants: {
    extend: {
      filter: ['hover', 'focus'],
    },
  },
  plugins: [],
};
