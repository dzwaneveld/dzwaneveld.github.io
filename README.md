# LaTeX × TU Delft

All documentation website files can be found in this repository. As the time between maintenance is often a few months, I have written down some steps below as a reminder for myself. A workflow will automatically build the static website with every push to the `master` branch.

## Maintaining & Deploying

- Prerequisites: Node.js v16+

- Install required packages:

````
npm ci
````

- Serve in local server / build static pages:

````
npm run docs:dev
npm run docs:build
````
