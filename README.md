<h1 align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="24" />
  </a>
  <span>
    Gatsby Custom Project Starter
  </span>
</h1>

Default Gatsby Starter customized for the usage of TypeScript, TDD approach and linting experience which encourages to follow the best coding practices.

## 🚀 Quick start

### Install dependencies

Navigate into project’s directory and execute the following command.

```shell
npm install
```

All dependent npm packages will be installed in `node_modules` directory.

### Initialize new project

This starter consists of some sample files which can be used as a reference.

For starting brand new project navigate into project’s directory and execute the following command.

```shell
npm run project:new
```

All sample files will be removed leaving only empty directories structure in `src` folder.

### Start developing

Navigate into project’s directory and execute the following command.

```shell
npm start
```

The site will run at http://localhost:8000. All applied changes will update in the browser in real time.

To create and test GraphQL queries use GraphiQL IDE at http://localhost:8000/___graphql.

### Create production build

Navigate into project’s directory and execute the following command.

```shell
npm run build
```

The site will be served at http://localhost:9000.

After building the site it can deployed to hosting service using files from `public` folder.

## 📂 Project structure

Below graph presents the top-level files and directories used in this starter.

    .
    ├── /__mocks__
    ├── /.cache
    ├── /config
    ├── /node_modules
    ├── /public
    ├── /src
        ├── /components
        ├── /pages
        ├── /templates
    ├── /tests
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

### Folders

- **/\_\_mocks\_\_**: This directory contains all module mocks for the usage in tests. For start there is only a single file containing gatsby module mock.

- **/.cache**: This directory contains plugins cache data as JSON objects which are retrieved on consecutive builds. Cache data can be cleared using `npm run gatsby:clean` command.

- **/config**: This directory contains some additional configuration data for used packages. For start there are some files related to jest configuration.

- **/node_modules**: This directory contains all of the modules of code (npm packages) that the project depends on. These modules are automatically installed using `npm install` command.

- **/public**: This directory contains all the output files from the build process. These files are automatically created using `npm run build` command.

- **/src**: This directory contains files with front-end source code of the site such as pages, components and templates. The main development of new functionalities happens here.

  - **/components**: This directory contains standard components which can be used on pages or in other components.

  - **/pages**: This directory contains components which will automatically become pages with paths based on their file name.

  - **/templates**: This directory contains templates for programmatically creating pages.

- **/tests**: This directory contains all of the test files for separating tests from main project files approach. This folder can also be skipped and test files can be created in the location of the main files as well.

### Files

- **.env**: This file is used for declaring environment variables storing some personal authentication data like `GOOGLE_TAGMANAGER_ID` for the specific plugin usage.

- **.eslint**: This is a configuration file for [ESLint](https://eslint.org/). ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

- **.gitignore**: This file tells git which files it should not track / not maintain a version history for.

- **.prettierrc**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of the project's code consistent.

- **.stylelintrc**: This is a configuration file for [stylelint](https://stylelint.io/). Stylelint is a tool that helps to avoid errors and enforce conventions in project styles.

- **gatsby-browser.js**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

- **gatsby-config.js**: This is [the main configuration file for a Gatsby site](https://www.gatsbyjs.org/docs/gatsby-config/). In this file specific information about the site (metadata) can be provided (like the site title and description) as well as the information about Gatsby's plugins used in this project.

- **gatsby-node.js**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

- **gatsby-ssr.js**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

- **jest.config.js**: This is a configuration file for [Jest](https://jestjs.io/). Jest is a JavaScript Testing Framework with a focus on simplicity.

- **LICENSE**: Gatsby is licensed under the MIT license.

- **package-lock.json**: This is an automatically generated file based on the exact versions of the npm dependencies that were installed for the project.

- **package.json**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for the project.

- **README.md**: A text file containing useful reference information about the project.

- **tsconfig.json**: This is a configuration file for [TypeScript](https://www.typescriptlang.org/). TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
