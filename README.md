# LaTeX × TU Delft

All documentation website files can be found in this repository. As the time between maintenance is often a few months, I have written down some steps below as a reminder for myself. A workflow has been included which will automatically build the static website and push to `gh-pages` with every push in the `master` branch.

## Maintaining & Deploying

- Prerequisites: Node.js v12+

- Install VuePress locally (with Google Analytics):

````
npm install -D vuepress@next
npm i -D @vuepress/plugin-google-analytics@next
````

- Serve in local server / build static pages:

````
npm run docs:dev
npm run docs:build
````
