# LaTeX Templates for Delft University of Technology

All the code related to the documentation can be found here. Feel free to send me an e-mail (see [here](https://dzwaneveld.github.io/about.html)) or create an issue in the appropriate repository if you have suggestions or encounter issues:

- **Documentation**: https://github.com/dzwaneveld/dzwaneveld.github.io/issues
- **Report/Thesis Template**: https://github.com/dzwaneveld/TU-Delft-Unofficial-Report-Template/issues
- **Article Template**: https://github.com/dzwaneveld/TU-Delft-Unofficial-Article-Template/issues

## Table of Contents

* [Maintaining & Deploying](#maintaining--deploying)
  + [Prerequisites](#prerequisites)
  + [Installing VuePress locally (with Google Analytics)](#installing-vuepress-locally-with-google-analytics)
  + [Serving in local server / building static pages](#serving-in-local-server--building-static-pages)
* [Changelog](#changelog)

## Maintaining & Deploying

As the time between maintenance is often a few months, I have written down some of the steps as a reminder for myself. I am still getting familiar with git and VuePress. As such, this is definitely not a 'manual' to create your own Github pages. For simplicity, I have changed the configuration to build the site from `/docs`.

### Prerequisites

- Node.js v12+

### Installing VuePress locally (with Google Analytics)

````
npm install -D vuepress@next
npm i -D @vuepress/plugin-google-analytics@next
````

### Serving in local server / building static pages

````
npm run docs:dev
npm run docs:build
````
