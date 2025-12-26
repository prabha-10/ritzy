/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                smart: {
                    base: '#ffffff',
                    bg: '#F7F7F0',
                    text: '#111827',
                    muted: '#6b7280',
                    accent: '#aacc85', // Soft green from reference
                    accentHover: '#95b870',
                    dark: '#1a1a1a',
                    darkgreen: '#001b00', // Deep green for portfolio
                    card: '#ffffff',
                    // Luxury Theme Colors
                    charcoal: '#0a0a0a',   // Deep luxury black/gray
                    charcoalLight: '#171717', // Slightly lighter for cards
                    gold: '#D4AF37',       // Classic luxury gold
                    platinum: '#E5E4E2',   // Premium white/silver
                }
            },
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
                logo: ['Outfit', 'sans-serif'],
                heading: ['"Sohne"', 'sans-serif'],
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
                '4xl': '2.5rem',
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'marquee': 'marquee 40s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        }
    },
    plugins: [],
}
