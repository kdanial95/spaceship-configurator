module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            'space-blue': '#051544',
            'space-green': '#7BF762',
            'green-light': '#5A8F4F',
            'green-dark': '#1C3C16',
            'sky': '#6BE4FF',
            'volcano': '#FF7A00',
        },
        fontFamily: {
            'roboto-mono': ['Roboto Mono', 'monospace']
        },
        boxShadow: {
            'green': '0px 0px 10px rgba(123, 247, 98, 0.5)',
        }
      },
    },
    plugins: [],
}
