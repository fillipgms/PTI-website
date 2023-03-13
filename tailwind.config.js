module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        fontFamily: {
            display: ["Manrope", "sans-serif"],
            body: ["Manrope", "sans-serif"],
        },
        extend: {
            fontSize: {
                14: "14px",
            },
            backgroundSize: {
                "size-200": "200% 200%",
            },
            backgroundPosition: {
                "pos-0": "0% 0%",
                "pos-100": "100% 100%",
            },
            backgroundColor: {
                "main-bg": "#FAFBFB",
                "main-dark-bg": "#131128",
                "secondary-dark-bg": "#1E1B3E",
                "light-gray": "#F7F7F7",
                "half-transparent": "rgba(0, 0, 0, 0.5)",
            },
            borderWidth: {
                1: "1px",
            },
            borderColor: {
                color: "rgba(0, 0, 0, 0.1)",
            },
            width: {
                400: "400px",
                760: "760px",
                780: "780px",
                800: "800px",
                1000: "1000px",
                1200: "1200px",
                1400: "1400px",
            },
            colors: {
                dark: "#1E1B3E",
                "dark-secondary": "#131128",
            },
            minHeight: {
                590: "590px",
            },

            maxHeight: {
                33: "33rem",
            },
        },
    },
    plugins: [],
};
