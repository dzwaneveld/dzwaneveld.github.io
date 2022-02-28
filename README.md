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

## Changelog

### 28/02/2022

* Updated report/thesis template to version 1.4.2
* Fixed some typos

### 10/12/2021

* Migrated from VuePress v1 to VuePress v2
* Reduced size of images to save some bandwidth
* Reworded some sentences to make them more concise
* Changed the home page, because I was too lazy to adjust the theme when migrating and this looks fine as well
* Added a few typos probably

### 16/05/2021

* Updated report/thesis template to version 1.4.1

### 17/04/2021

* Updated report/thesis template to version 1.4.0
* Added 'How do I get more authors on the cover (while staying organized)?' to FAQ
* Made the report changelog much more extensive
* Fixed some more issues and typos

### 10/04/2021

* Cleaned up some of the text and fixed some typos

### 09/04/2021

* Changed some of the setup & updated README.md
* Simplified & refined parts of the documentation

### 12/02/2021

* Added 'How do I get as little/much text as possible on a single page?' to FAQ

### 07/02/2021

* Added FAQ to report template documentation
* Refined some of the documentation

### 27/06/2020

* Added documentation for the report/thesis template
* Restructured the documentation for the article template
* Switched to [VuePress](https://vuepress.vuejs.org/) to generate the static webpages

### 21/04/2020

* Added documentation for the article template
