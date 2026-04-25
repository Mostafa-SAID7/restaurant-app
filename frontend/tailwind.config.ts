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
      fontSize: {
        xs:   ['0.75rem',  { lineHeight: '1rem' }],
        sm:   ['0.85rem',  { lineHeight: '1.25rem' }],
        base: ['0.95rem',  { lineHeight: '1.5rem' }],
        lg:   ['1.15rem',  { lineHeight: '1.75rem' }],
        xl:   ['1.3rem',   { lineHeight: '1.85rem' }],
        '2xl': ['1.5rem',  { lineHeight: '2rem' }],
        '3xl': ['2rem',    { lineHeight: '2.25rem' }],
        '4xl': ['2.5rem',  { lineHeight: '2.75rem' }],
        '5xl': ['3rem',    { lineHeight: '1' }],
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
        sm:     '0 1px 3px rgba(0,0,0,0.5)',
        md:     '0 4px 16px rgba(0,0,0,0.4)',
        lg:     '0 8px 32px rgba(0,0,0,0.5)',
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
      screens: {
        'xs':   '480px',
        'sm':   '600px',
        'md':   '768px',
        'lg':  '900px',
        'xl':  '1024px',
        '2xl': '1280px',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(230,126,34,0.3)' },
          '50%':       { boxShadow: '0 0 20px rgba(230,126,34,0.6)' },
        },
        floatPulse: {
          from: { transform: 'scale(1.2) translateY(-2px)', filter: 'drop-shadow(0 3px 6px rgba(230,126,34,0.45))' },
          to:   { transform: 'scale(1.3) translateY(-4px)', filter: 'drop-shadow(0 5px 10px rgba(230,126,34,0.6))' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up':    'fadeInUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.4s ease forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float':      'floatPulse 2s ease-in-out infinite alternate',
        'spin-slow':  'spin 0.8s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
