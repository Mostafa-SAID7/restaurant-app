import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0A0A0A',
          surface: '#121212',
          'surface-2': '#1E1E1E',
          'surface-3': '#252525',
          hover: 'rgba(255, 255, 255, 0.08)',
          secondary: '#1E1E1E',
        },
        border: '#2E2E2E',
        accent: {
          DEFAULT: '#E67E22',
          hover: '#F39C12',
          muted: 'rgba(230, 126, 34, 0.12)',
          shadow: 'rgba(230, 126, 34, 0.45)',
        },
        text: {
          DEFAULT: '#F5F5F5',
          muted: '#9A9A9A',
          dim: '#666',
          light: '#D0D0D0',
        },
        success: {
          DEFAULT: '#27AE60',
          muted: 'rgba(39, 174, 96, 0.12)',
        },
        error: '#E74C3C',
        warning: '#F39C12',
      },
      fontFamily: {
        serif: ['Caudex', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      spacing: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
      },
      borderRadius: {
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.5)',
        md: '0 4px 16px rgba(0,0,0,0.4)',
        lg: '0 8px 32px rgba(0,0,0,0.5)',
        accent: '0 4px 24px rgba(230,126,34,0.25)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '400ms',
      },
      maxWidth: {
        container: '1280px',
      },
      height: {
        header: '72px',
      },
    },
  },
  plugins: [],
} satisfies Config;
