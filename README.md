# LaTeX Templates for Delft University of Technology

All the code related to the documentation can be found here. Feel free to send me an email (see [here](https://dzwaneveld.github.io/contact.html)) or create an issue in the appropriate repository if you have questions, suggestions or encounter issues:

- **Documentation**: https://github.com/dzwaneveld/dzwaneveld.github.io/issues
- **Report/Thesis Template**: https://github.com/dzwaneveld/TU-Delft-Unofficial-Report-Template/issues
- **Article Template**: https://github.com/dzwaneveld/TU-Delft-Unofficial-Article-Template/issues

## Maintaining & Deploying

As the time between maintenance is often a few months, I have written down some of the steps as a reminder for myself. I simply do not update the website every day and I cannot be bothered to Google the steps every time.

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
