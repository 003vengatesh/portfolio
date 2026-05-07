/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
<<<<<<< HEAD
        muted: 'var(--muted)',
        surface: 'var(--surface)',
=======
>>>>>>> b6702caa4f643f23f59edf5e36727cf75dcb04ee
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
<<<<<<< HEAD
};
=======
};
>>>>>>> b6702caa4f643f23f59edf5e36727cf75dcb04ee
