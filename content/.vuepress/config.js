module.exports = {
  title: 'LaTeX Templates for Delft University of Technology',
  description: 'Improved TU Delft LaTeX report/thesis and article templates. Easy-to-use thanks to their simplicity, complex enough for extensive documents.',
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
        text: 'About',
        children: [
          {
            text: 'Contact',
            link: '/contact.html',
          },
          {
            text: 'License',
            link: '/license.html',
          },
          {
            text: 'Changelog',
            link: '/changelog.html'
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
    contributors: false,
    lastUpdated: false,
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
