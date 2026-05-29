/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans:      ['Geist', 'sans-serif'],
                geist:     ['Geist', 'sans-serif'],
                headline:  ['Lora', 'serif'],
                lora:      ['Lora', 'serif'],
                grimblade: ['Grimblade', 'serif'],
                mono:      ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
            },
            colors: {
                brand: {
                    50:  '#FDF0E8',
                    100: '#F9D9C4',
                    200: '#F2B898',
                    300: '#E8926A',
                    400: '#D96E42',
                    500: '#C24B18',
                    600: '#A33D12',
                    700: '#85300D',
                    800: '#692509',
                    900: '#461806',
                },
                forest: {
                    DEFAULT: '#09332C',
                    mid:     '#2E4B3C',
                    dark:    '#003B17',
                    light:   '#EDF5E3',
                },
                cream: {
                    DEFAULT: '#F6F5EB',
                    warm:    '#F7EDDA',
                    mid:     '#F7DFBA',
                    peach:   '#FABF7A',
                },
                sage:  '#ABB28A',
                teal: {
                    DEFAULT: '#185053',
                    light:   '#4A8FA8',
                },
                primary:                  '#C24B18',
                'on-primary':             '#FFFFFF',
                'primary-container':      '#FFF3E8',
                surface:                  '#F6F5EB',
                'on-surface':             '#1C2320',
                'on-surface-variant':     '#3D4A45',
                'surface-container-low':  '#F0EFE5',
                'outline-variant':        '#D4D2C8',
                outline:                  '#9E9C92',
            },
            boxShadow: {
                ambient: '0 12px 40px -12px rgba(9, 51, 44, 0.10)',
                warm:    '0 4px 24px -4px rgba(194, 75, 24, 0.15)',
                forest:  '0 8px 32px -8px rgba(9, 51, 44, 0.20)',
            },
            animation: {
                'wave-drift': 'waveDrift 8s ease-in-out infinite',
                'fade-up':    'fadeUp 0.6s ease-out forwards',
                'float':      'float 6s ease-in-out infinite',
            },
            keyframes: {
                waveDrift: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%':      { transform: 'translateY(-8px)' },
                },
                fadeUp: {
                    '0%':   { opacity: '0', transform: 'translateY(24px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%':      { transform: 'translateY(-12px)' },
                },
            },
        },
    },
    plugins: [],
};
