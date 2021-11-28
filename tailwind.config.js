module.exports = {
  purge: [], // Tree shake unused styles by replacing with  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['ballinger-mono', 'monospace'],
      body: ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        blue: '#291beb',
        bright: '#f36ef5'
      }, 
      // backgroundImage: {
      //   'browserPattern': "url('/public/browserBrush.png')",
      //   'muskyTweets-pattern': "url('/public/newNewsStock.jpg')",
      //   'password-Pattern': "url('/public/passWordGenerator.jpg')",
      //   'todo-pattern': "url('/public/localStorageTodoList.jpg')",
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
