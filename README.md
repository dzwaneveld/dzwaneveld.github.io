# LaTeX Templates for Delft University of Technology

All the code related to the documentation can be found here. Feel free to send me an e-mail (see [here](https://dzwaneveld.github.io/about.html)) or create an issue in the appropriate repository if you have suggestions or encounter issues:

- **Documentation**: https://github.com/dzwaneveld/dzwaneveld.github.io/issues
- **Report/Thesis Template**: https://github.com/dzwaneveld/TU-Delft-Unofficial-Report-Template/issues
- **Article Template**: https://github.com/dzwaneveld/TU-Delft-Unofficial-Article-Template/issues

## Maintaining & Deploying

As the time between maintenance is often a few months, I have written down some of the steps as a reminder for myself. I am still getting familiar with git and VuePress. As such, this is definitely not a 'manual' to create your own Github pages.

### Prerequisites

- Node.js v12+
- Yarn v1 classic

### Installing VuePress locally

````
yarn add -D vuepress
````

Adding Google Analytics to the installation:

````
yarn add -D @vuepress/plugin-google-analytics
````

### Serving in local server and building static pages

````
yarn docs:dev
yarn docs:build
````

### Deploying to 'gh-pages' branch

````
git add docs/.vuepress/dist && git commit -m "Deploying to gh-pages"
git subtree push --prefix docs/.vuepress/dist origin gh-pages
````
