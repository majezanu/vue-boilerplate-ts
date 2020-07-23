# Vue TypeScript Template

This repository hosts the code that constructs the boilerplate for a Vue application. 
This code uses Vuetify and custom components and uses the data
provided by the different backend services, also uses atom design and dum/smart design.

## Table of Contents
- [Introduction](#introduction)
    - [Project's Structure](#projects-structure)
    - [Component Development](#component-development)
    - [Application's State](#applications-state)
- [Local Installation](#local-installation)
  - [Installing](#installing)
  - [Running the Project Locally](#running-the-project-locally)
- [Tests](#tests)
  - [Unit Tests](#unit-tests)
  - [Linting](#linting)
- [Versions](#versions)
- [License](#license)
- [Further References](#further-references)

## Introduction
The subsections included describe the technology stack, the project's structure, general 
recommendations for Component development, and the management of the application's state.

### Technology Stack

The technologies used include:

- `@vue/cli 4.4.6` for project creation
- `Vue.js` version `^2.6.11`
- `vuetify` version `^2.2.11`
- `typescript` version `~3.9.3`

### Project's Structure

The source code is organized in the following directories:
*   **src:** It contains the source code upon which the build is constructed.
*   **src/assets:** It contains the static files that the application requires,
  for example, images, style sheets, JSON files, and the like.
*   **src/components:** It contains all the (Dumb) components of the application using atom design, 
  so there are more subfolders: atoms, molecules, organisms... Every component must has its
  mocks, test and module index.
*   **src/features:** It contains the features (Smart components) of the application. Every feature
  clusters closely related components, stores, services, and others. This is, a
  feature-based approach is followed rather than a role-based one.
*   **src/shared:** It contains the code that is used by all the project.
*   **src/views:** It contains the components that represent the pages of the
    application. These components are the ones referenced in the router, and they
    construct the required views using the different features and services provided.
*   **src/App.vue:** It is the main component, and contains the rest of the
    application.
*   **src/main.ts:** It is the entry point of the application. This code creates
    the global instance of Vue and configures the plugins used application-wide.
*   **src/router:** It contains the definitions of all the routes or paths of
    the application and their link with the different `views` previously defined.
*   **src/plugins:** It contains the definitions of all plugins used.
*   **src/store:** It is the general store of the application. This code is
    mainly used to import the store modules located in the different `features`
    of the application.
*   **public:** It contains the static files of the web site. All what is stored
    in this directory can be accessed through the URL of the browser.

*   **public/index.html:** It contains the HTML structure of the web application.

This is a tree representation of the project with some of the components.

``` bash
├── README.md
├── babel.config.js
├── cypress.json
├── node_modules
├── package-lock.json
├── package.json
├── public
├── src
│   ├── App.vue
│   ├── assets
│   ├── components
│   │   ├── atoms
│   │   │   ├── header
│   │   │   │   ├── Header.vue
│   │   │   │   └── index.ts
│   │   └── organism
│   ├── main.ts
│   ├── plugins
│   │   └── vuetify.ts
│   ├── shared
│   ├── features
│   ├── registerServiceWorker.ts
│   ├── router
│   │   └── index.ts
│   ├── shims-tsx.d.ts
│   ├── shims-vue.d.ts
│   ├── store
│   │   └── index.ts
│   └── views
│       ├── About.vue
│       └── Home.vue
├── tests
├── tsconfig.json
├── vue.config.js
└── yarn.lock
```
[⇧ back to top](#table-of-contents)

### Component Development

To have both greater flexibility and reusability, as well as easier
maintenance, it is advisable to split your Components into two functional
categories when developing them: `Smart versus Dumb`. The categories are also
known as `Container versus Presentational` or `Supervising versus Supervised`.

You can find additional information on this principle in the links listed
below. The documentation is aimed at `React.js`, but the concepts easily apply
to `Vue.js`.

- https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

- https://alligator.io/react/smart-dumb-components/

Also, the dumb components can be splitted more using atom design. So, in this
project you can see more components, for example the Header is a molecule because
has atoms, an Step on header is an atom, also the group of Steps and so on.

You can find additional information on this pattern in the links listed below.

- https://atomicdesign.bradfrost.com/

- https://dev.to/miladalizadeh/vue-cli-30-plugin-for-creating-apps-using-atomic-design--storybook-42dk

The name of your Components must follow

[UpperCamelCase](https://en.wikipedia.org/wiki/Camel_case) and must be made up
of at least two words. This nomenclature makes it easier to differentiate
Components from native HTML elements. For further information, see the style
guide of `Vue.js`.

[⇧ back to top](#table-of-contents)

### Application's State

The state of the application is managed with `vuex`, which enables you to
maintain a large `state tree`, and at the same time, it allows you to subdivide
it in different subscopes or `modules`.

In this project, when a `feature` needs to register data in the global `state`,
it defines and registers a `store` linked to the feature.

It's advisable to use `stores` only for the features that need to store
information that is shared with the rest of the application, for example, user
data, notifications, alerts, and such.

In the cases in which the information managed by a Component does not need to
be public or shared with the rest of the application, it is advisable to handle
the `state` at Component level. Preferably, setting the functionality between
`Smart` and `Dumb` Components. In this case, the `state` will only be part of
the `Smart` Component. 

[⇧ back to top](#table-of-contents)

## Local Installation

This section describes how to run the project locally, so that you can develop
and test the code. 

### Installing

After installing the prerequisites, open a terminal and follow the next steps
to install the project:

1. Clone the repository:

``` bash
git clone https://github.com/majezanu/vue-boilerplate-ts.git
```

1. Move into the newly created folder:

``` bash
cd vue-boilerplate-ts
```

1. Install the project dependencies:

``` bash
npm install
```

### Running the Project Locally

The following command runs the project in development mode, starts a server,
and configures hot-reload.

``` bash
npm run serve
```

To run the application in production mode, execute the following command:

``` bash
npm run build
```

[⇧ back to top](#table-of-contents)

## Tests

You must perform the following tests.

### Unit Tests

Every component, store, service, or library developed in the application must
have a unit test.

The files for unit testing must comply with the following nomenclature:

 - ComponentName.spec.js
 - service-name.spec.js

Use the following command to run the unit tests:

``` bash
npm run test:unit
```
	
### Linting

The following command helps you to find problems in your code, and at the same
time, it enables you to standardize its format.

``` bash
npm run lint
```

[⇧ back to top](#table-of-contents)

## Versions

TBD.

[⇧ back to top](#table-of-contents)

## License

TBD.

[⇧ back to top](#table-of-contents)

## Further References

- `Vue.js` official documentation: https://vuejs.org/v2/guide/
- `vue-cli` official documentation: https://cli.vuejs.org/.
- `Vue.js` official style guide: https://vuejs.org/v2/style-guide/
- Useful patterns in `Vue.js`: https://learn-vuejs.github.io/vue-patterns/patterns/
- `vue-router` official documentation: https://router.vuejs.org/
- `vuex` official documentation: https://vuex.vuejs.org/
