import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import { defineConfig } from 'vitepress'

const links = []

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LaTeX × TU Delft",
  description: "Simple and extensive report/thesis and article LaTeX templates. Easy-to-use. Ideal for complex documents.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Report/Thesis Template', link: '/report/' },
      { text: 'Article Template', link: '/article/' },
      {
        text: 'Learn',
        items: [
          {
            text: 'Essentials',
            items: [
              { text: 'Setting Up a Document', link: '/learn/setting-up-a-document.html' },
              { text: 'Chapters, Sections and Text', link: '/learn/chapters-sections-and-text.html' },
              { text: 'Mathematical Expressions', link: '/learn/mathematical-expressions.html' },
              { text: 'Lists, Figures and Tables', link: '/learn/lists-figures-and-tables.html' },
              { text: 'Bibliography and Citing', link: '/learn/bibliography-and-citing.html' }
            ]
          },
          {
            text: 'Packages',
            items: [
              { text: "Cross-referencing with 'cleveref'", link: '/learn/cleveref.html' },
              { text: "Including Code with 'listings'", link: '/learn/listings.html' },
              { text: "Including PDFs with 'pdfpages'", link: '/learn/pdfpages.html' }
            ]
          }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'Contact & Donate', link: '/contact.html' },
          { text: 'License & Legal', link: '/license.html' }
        ]
      }
    ],

    sidebar: {
      '/report/': [
        { text: 'Report/Thesis Template', link: '/report/' }, 
        { text: 'FAQ', link: '/report/faq' },
        { text: 'Changelog', link: '/report/changelog' },
      ],
      '/article/': [
        { text: 'Article Template', link: '/article/' }, 
        { text: 'FAQ', link: '/article/faq' },
        { text: 'Changelog', link: '/article/changelog' },
      ],
      '/learn/': [
        {
          text: 'Essentials',
          items: [
            { text: 'Setting Up a Document', link: '/learn/setting-up-a-document' },
            { text: 'Chapters, Sections and Text', link: '/learn/chapters-sections-and-text' },
            { text: 'Mathematical Expressions', link: '/learn/mathematical-expressions' },
            { text: 'Lists, Figures and Tables', link: '/learn/lists-figures-and-tables' },
            { text: 'Bibliography and Citing', link: '/learn/bibliography-and-citing' }
          ],
        },
        {
          text: 'Package-specific',
          items: [
            { text: "Cross-referencing with 'cleveref'", link: '/learn/cleveref' },
            { text: "Including Code with 'listings'", link: '/learn/listings' },
            { text: "Including PDFs with 'pdfpages'", link: '/learn/pdfpages' }
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dzwaneveld' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/dzwaneveld/'}
    ],

    footer: {
      copyright: 'Copyright © 2020-present Daan Zwaneveld'
    },

    search: {
      provider: 'local'
    },
  },

  head: [
    ['script', {async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=G-1BZK48KS3W'}],
    ['script', {}, "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-1BZK48KS3W');"]
  ],

  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        url: pageData.relativePath.replace(/\/index\.md$/, '/').replace(/\.md$/, '.html'),
        lastmod: pageData.lastUpdated
      })
  },

  buildEnd: ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: 'https://dzwaneveld.github.io/' })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
  }
})
