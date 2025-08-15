import type { Config } from 'tailwindcss';

/
 * Tailwind CSS configuration for CleanSSR
 * A minimal design for a technology cleaning company with a purple and white color scheme.
 * This configuration defines custom colors and animations to enhance the user experience.
 */
const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: '#6B5BFF', // Purple
        secondary: '#FFFFFF', // White
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideIn: 'slideIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};

export default config;