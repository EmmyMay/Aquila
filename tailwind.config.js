module.exports = {
   purge: [
    './public/**/*.html',
    './src/**/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       colors: {
        'aquiladark': '#BD0F4D',
        'aquilalight': '#C62861',
         
         
      },
        fontFamily: {
        'display': ['Montserrat'],
        'display2': ['Segoe UI']
      },
       screens: {
        lt: '960px'
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
