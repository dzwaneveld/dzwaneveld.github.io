const { defaultTheme } = require('@vuepress/theme-default')
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
const { sitemapPlugin } = require("vuepress-plugin-sitemap2")

module.exports = {
  title: 'LaTeX × TU Delft',
  description: 'Improved TU Delft LaTeX report/thesis and article templates. Easy-to-use thanks to their simplicity, complex enough for extensive documents.',
  theme: defaultTheme({
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
        text: 'Learn',
        children: [
          {
            text: 'Essentials',
            children: [
              {
                text: 'Setting Up a Document',
                link: '/learn/setting-up-a-document.html',
              },
              {
                text: 'Chapters, Sections and Text',
                link: '/learn/chapters-sections-and-text.html',
              },
              {
                text: 'Mathematical Expressions',
                link: '/learn/mathematical-expressions.html',
              },
              {
                text: 'Lists, Figures and Tables',
                link: '/learn/lists-figures-and-tables.html'
              },
              {
                text: 'Bibliography and Citing',
                link: '/learn/bibliography-and-citing.html'
              }
            ]
          },
          {
            text: 'Package-specific',
            children: [
              {
                text: "Cross-referencing with 'cleveref'",
                link: '/learn/cleveref.html',
              },
              {
                text: "Including Code with 'listings'",
                link: '/learn/listings.html',
              },
              {
                text: "Including PDFs with 'pdfpages'",
                link: '/learn/pdfpages.html'
              }
            ]
          }
        ]
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
      '/learn/': [
        {
          text: 'Essentials',
          children: [
            'setting-up-a-document',
            'chapters-sections-and-text',
            'mathematical-expressions',
            'lists-figures-and-tables',
            'bibliography-and-citing',
          ],
        },
        {
          text: 'Package-specific',
          children: [
            'cleveref',
            'listings',
            'pdfpages',
          ],
        },
      ],
    },
    sidebarDepth: 1,
    contributors: false,
    lastUpdated: false,
  }),
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-1BZK48KS3W',
    }),
    sitemapPlugin({
      hostname: 'https://dzwaneveld.github.io'
    }),
  ],
}
