<h1 align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="24" />
  </a>
  <span>
    Custom Gatsby Project Starter
  </span>
</h1>

This starter ships with the main Gatsby configuration files customized for the usage of TypeScript, TDD approach and linting experience which encourages to follow the best coding practices.

## 🚀 Quick start

### Install dependencies

Navigate into project’s directory and execute the following command.

```shell
npm install
```

All dependent npm packages will be installed in `/node_modules` directory.

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

After building the site you can deploy it to hosting service using files from `public` folder.

## 🧐 What's inside?

Below graph presents the top-level files and directories you'll see in this starter.

    .
    ├── /__mocks__
    ├── /.cache
    ├── /config
    ├── /node_modules
    ├── /public
    ├── /src
    ├── /tests
    |
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

- **/\_\_mocks\_\_**: This directory contains all module mocks for the usage in tests. For start there is only a single file containing gatsby module mock.

- **/.cache**: This directory contains plugins cache data as JSON objects which are retrieved on consecutive builds. Cache data can be cleared using `npm run gatsby:clean` command.

- **/config**: This directory contains some additional configuration data for used packages. For start there are some files related to jest configuration.

- **/node_modules**: This directory contains all of the modules of code (npm packages) that your project depends on. These modules are automatically installed using `npm install` command.

- **/public**: This directory contains ...

- **/src**: This directory contains files with front-end source code of the site such as pages, components and templates. The main development of new functionalities happens here.

- **/tests**: This directory contains ...

- **.gitignore**: This file tells git which files it should not track / not maintain a version history for.

- **.prettierrc**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

- **gatsby-browser.js**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

- **gatsby-config.js**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

- **gatsby-node.js**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

- **gatsby-ssr.js**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

- **LICENSE**: Gatsby is licensed under the MIT license.

- **package-lock.json** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

- **package.json**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

- **README.md**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/gatsbyjs/gatsby-starter-default)
