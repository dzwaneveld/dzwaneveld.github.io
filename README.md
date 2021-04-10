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
  + [2.2.1 (10/04/2021)](#220-10042021)
  + [2.2.0 (09/04/2021)](#220-09042021)
  + [2.1.1 (12/02/2021)](#211-12022021)
  + [2.1.0 (07/02/2021)](#210-07022021)
  + [2.0.0 (27/06/2020)](#200-27062020)
  + [1.0.0 (21/04/2020)](#100-21042020)

## Maintaining & Deploying

As the time between maintenance is often a few months, I have written down some of the steps as a reminder for myself. I am still getting familiar with git and VuePress. As such, this is definitely not a 'manual' to create your own Github pages. For simplicity, I have changed the configuration to build the site from `/docs`.

### Prerequisites

- Node.js v12+
- Yarn v1 classic

### Installing VuePress locally (with Google Analytics)

````
yarn add -D vuepress
yarn add -D @vuepress/plugin-google-analytics
````

### Serving in local server / building static pages

````
yarn docs:dev
yarn docs:build
````

## Changelog

### 2.2.1 (10/04/2021)

* Cleaned up some of the text and fixed some typos

### 2.2.0 (09/04/2021)

* Changed some of the setup & updated README.md
* Simplified & refined parts of the documentation

### 2.1.1 (12/02/2021)

* Added 'How do I get as little/much text as possible on a single page?' to FAQ

### 2.1.0 (07/02/2021)

* Added FAQ to report template documentation
* Refined some of the documentation

### 2.0.0 (27/06/2020)

* Added documentation for the report/thesis template
* Restructured the documentation for the article template
* Switched to [VuePress](https://vuepress.vuejs.org/) to generate the static webpages

### 1.0.0 (21/04/2020)

* Added documentation for the article template
