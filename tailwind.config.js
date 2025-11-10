export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1976D2", // TaxBuddy blue
        secondary: "#1565C0", // darker blue
      },
      screens:{
        'md-lg':{'min':'1020px','max':'1244px'},
      }
    },
  },
  plugins: [],
};
