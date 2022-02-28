module.exports = {
  title: 'LaTeX Templates for Delft University of Technology',
  description: 'Improved TU Delft LaTeX report/thesis and article templates. Easy-to-use templates thanks to their simplicity, complex enough for extensive documents.',
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
            text: 'Changelog',
            link: 'https://github.com/dzwaneveld/dzwaneveld.github.io#changelog'
          },
          {
            text: 'Report on Github',
            link: 'https://github.com/dzwaneveld/TU-Delft-Unofficial-Report-Template'
          },
          {
            text: 'Article on Github',
            link: 'https://github.com/dzwaneveld/TU-Delft-Unofficial-Article-Template'
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
