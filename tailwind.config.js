export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
      },
      screens: {
        xs: "480px", // Extra small devices
        sm: "640px", // Small devices
        md: "880px", // Medium devices
        lg: "1310px", // Large devices
        xl: "1580px", // Extra large devices
      },
    },
  },
  plugins: [],
};
