import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:    '#0a1628',
          dark:    '#0f2040',
          blue:    '#1e3a5f',
          mid:     '#2563eb',
          accent:  '#3b82f6',
          light:   '#60a5fa',
          glow:    '#93c5fd',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0a1628 0%, #0f2040 40%, #1a3260 70%, #0a1628 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(37,99,235,0.1) 0%, rgba(30,58,95,0.2) 100%)',
        'cta-gradient':  'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.4s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow':    '0 0 40px rgba(37,99,235,0.3)',
        'glow-lg': '0 0 80px rgba(37,99,235,0.2)',
        'card':    '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}

export default config
