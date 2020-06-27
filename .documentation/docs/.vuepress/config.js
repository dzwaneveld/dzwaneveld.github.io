module.exports = {
  title: 'LaTeX Templates for Delft University of Technology',
  description: 'Documentation for the unofficial TU Delft LaTeX report/thesis and article template, last updated on June 27, 2020',
  themeConfig: {
    nav: [
      { text: 'Report/Thesis Template', link: '/report/' },
      { text: 'Article Template', link: '/article/' },
      {
        text: 'Learn More',
        ariaLabel: 'Learn More Menu',
        items: [
          { text: 'About', link: '/about/' },
          { text: 'Changelog', link: '/changelog/' },
          { text: 'LaTeX Shortcuts', link: '/latex-shortcuts/' },
          { text: 'Report Issues', link: 'https://github.com/dzwaneveld/dzwaneveld.github.io' }
        ]
      }
    ],
    sidebar: {
      '/report/': [
        '',
        'getting-started',
        'changelog',
      ],
      '/article/': [
        '',
        'getting-started',
        'changelog',
      ]
    },
    search: true,
    searchMaxSuggestions: 10
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-164114553-1' // UA-00000000-0
      }
    ]
  ]
}
