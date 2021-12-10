module.exports = {
  title: 'LaTeX Templates for Delft University of Technology',
  description: 'Documentation for the improved TU Delft LaTeX report/thesis and article template. The design principle of these templates is to be simple and extensive.',
  dest: 'docs',
  themeConfig: {
    navbar: [
      {
        text: 'Report/Thesis Template',
        link: '/report/',
      },
      {
        text: 'Article Template',
        link: '/article/',
      },
      {
        text: 'Learn More',
        children: [
          {
            text: 'About',
            link: '/about.html',
          },
          {
            text: 'Report on Github',
            link: 'https://github.com/dzwaneveld/TU-Delft-Unofficial-Report-Template'
          },
          {
            text: 'Article on Github',
            link: 'https://github.com/dzwaneveld/TU-Delft-Unofficial-Article-Template'
          },
          {
            text: 'Website Changelog',
            link: 'https://github.com/dzwaneveld/dzwaneveld.github.io#changelog'
          },
        ]
      },
    ],
    sidebar: {
      '/report/': [
        './',
        'faq',
        'changelog',
      ],
      '/article/': [
        './',
        'faq',
        'changelog',
      ],
    },
    sidebarDepth: 1,
  },
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-1BZK48KS3W',
      },
    ],
  ],
}
