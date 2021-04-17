module.exports = {
  title: 'LaTeX Templates for Delft University of Technology',
  description: 'Documentation for the improved TU Delft LaTeX report/thesis and article template. The design principle of these templates is to be simple and extensive.',
  dest: 'docs',
  themeConfig: {
    nav: [
      { text: 'Report/Thesis Template', link: '/report/' },
      { text: 'Article Template', link: '/article/' },
      {
        text: 'Learn More',
        ariaLabel: 'Learn More Menu',
        items: [
          { text: 'About', link: '/about.html' },
          { text: 'Changelog', link: 'https://github.com/dzwaneveld/dzwaneveld.github.io#changelog' },
        ]
      }
    ],
    sidebar: {
      '/report/': [
        '',
        'faq',
        'changelog',
      ],
      '/article/': [
        '',
        'faq',
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
