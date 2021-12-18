module.exports = {
  content: ["./src/**/*.{html,js}"],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    // purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontFamily: {
        display: ['ballinger-mono', 'monospace'],
        bold: ['ballinger-mono-bold', 'monospace'],
        body: ['Open Sans', 'sans-serif']
      },
      extend: {
        colors: {
          blue: '#291beb',
          bright: '#f36ef5'
        }, 
        height: {
          '128': '38rem',
        },
        cursor: {
          'fancy': "url('/src/images/arrow.png')",
        },
        backgroundImage: {
          'browserPattern': "url('/src/components/Projects/assets/browserBrush.png')",
          'muskyTweets-pattern': "url('/src/components/Projects/assets/newNewsStock.jpg')",
          'profile-MacOS': "url('/src/components/About/assets/about-mac-os9ui.jpg')",
          'budget-tracker': "url('/src/components/Projects/assets/budgetTracker.jpg')",
          'company-cms': "url('/src/components/Projects/assets/companyCms.jpg')",
          'ecommerce': "url('/src/components/Projects/assets/eCommerce.jpg')",
          'spotify-api': "url('/src/components/Projects/assets/spotifyApi.jpg')",
          'fitness-tracker': "url('/src/components/Projects/assets/fitness-tracker.jpg')",
          'book-search': "url('/src/components/Projects/assets/bookSearch.jpg')",
          'dnd': "url('/src/components/Projects/assets/dnd.jpg')",
          // 'password-Pattern': "url('/public/passWordGenerator.jpg')",
          // 'todo-pattern': "url('/public/localStorageTodoList.jpg')",
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  
