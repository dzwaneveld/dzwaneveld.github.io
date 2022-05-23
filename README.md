# LaTeX Templates for Delft University of Technology

Everything related to the documentation of the LaTeX templates can be found here. Feel free to contact me with questions, suggestions or issues related to the templates or this documentation. You can send an email (see [here](https://dzwaneveld.github.io/contact.html)) or create an issue in the appropriate repository:


- **Documentation**: https://github.com/dzwaneveld/dzwaneveld.github.io/issues
- **Report/Thesis Template**: https://github.com/dzwaneveld/TU-Delft-Unofficial-Report-Template/issues
- **Article Template**: https://github.com/dzwaneveld/TU-Delft-Unofficial-Article-Template/issues

## Maintaining & Deploying

As the time between maintenance is often a few months, I have written down some of the steps as a reminder for myself.

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
