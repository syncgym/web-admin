import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(249, 63%, 49%)',
          foreground: 'hsl(210, 40%, 98%)',
        },
        secondary: {
          DEFAULT: 'hsl(249, 100%, 77%)',
          foreground: 'hsl(240, 6%, 10%)',
        },
        card: {
          DEFAULT: 'hsl(0 0% 100%)',
          foreground: 'hsl(222 84% 5%)',
        },
        popover: {
          DEFAULT: 'black',
          foreground: 'hsl(249, 100%, 77%)',
        },
        muted: {
          DEFAULT: 'hsl(249, 100%, 77%)',
          foreground: 'hsl(240, 6%, 60%)',
        },
        accent: {
          DEFAULT: 'hsl(240, 6%, 8%)',
          foreground: 'hsl(249, 100%, 77%)',
        },
        destructive: {
          DEFAULT: 'hsl(0 84% 60%)',
          foreground: 'hsl(210 40% 98%)',
        },
        background: 'zinc-950',
        foreground: 'hsl(247, 73%, 63%)',
        border: 'hsl(240, 6%, 20%)',
        input: 'hsl(249, 100%, 77%)',
        ring: 'hsl(222 84% 5%)',
      },
      borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
