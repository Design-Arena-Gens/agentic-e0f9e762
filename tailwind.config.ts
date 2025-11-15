import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0B132B',
          ink: '#0B132B',
          gold: '#C6A15B',
          stone: '#1C2541',
          mist: '#3A506B'
        }
      },
      boxShadow: {
        subtle: '0 1px 2px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.06)'
      },
      animation: {
        'slow-spin': 'spin 40s linear infinite'
      }
    }
  },
  plugins: []
}
export default config
