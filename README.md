# Ryan and Brigitte's Wedding Website

Website to showcase our wedding :)

## Tools

Using the following frameworks/libraries/tools:

- _React.js_ - React 16, React Router 5
- _Redux.js_ - Redux saga and Reselect -> Equipped but found no use for it :/
- _Babel_ - ES6, ESNext, Airbnb and React/Recommended config
- _Webpack_ - Webpack 4, Hot Reloading, Code Splitting, Optimized Prod Build
- _Test_ - Jest with Enzyme -> I should really write tests :)
- _Lint_ - ESlint
- _Styles_ - SCSS Styling

## Getting Started

### Node.js Runtime

This application will run on the Node.js runtime and NPM.

##### Windows User

1. Download Windows installer of Node.js: https://nodejs.org/en/ <br />
   a) Select the version that is “Recommended for Most Users” <br />
2. Run the installer <br />
   b) Allow for all things to be installed (Node.js runtime environemnt, NPM, and allow the setup to add them to your PATH)

##### Mac User

1.  Install xcode if it is not already installed: <br />
    a) Open terminal <br />
    b) Type: <br />
    >       xcode-select --install
2.  Install Homebrew if it is not already installed: <br />
    a) Open terminal <br />
    b) Type: <br />
    >       ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
3.  Install Node.js <br />
    a) Open terminal <br />
    b) Type: <br />
    >       brew install node

### IntelliJ Configurations

1. Verify that you have your language level set to React JSX

   a) Preferences / Language & Frameworks / JavaScript

   b) Set JavaScript language level to React JSX in the dropdown

2. Set up IntelliJ to run the app locally:

   a) Edit Run Configurations

   b) Add new configuration (plus button in top right)

   c) Select 'npm'

   d) Verify that the 'package.json' points to the file of the same name within the root of our project space

   e) set the command to 'run'

   f) set the scripts to 'start'

## Running Locally

1.  The following are NPM commands for installing module dependencies in the package.json
    and for compiling/executing modules. Run these commands from project root directory.
    a) Install dependent modules: > npm install

        b) Run the UI (which runs webpack server, transpiles JS, compiles SCSS files,
        and watches for any changes so that they can be reflected in the running
        application): <br />
        >       npm start

        c) Currently the application runs on port 8080; navigate to:
        >       http://localhost:8080

## Testing

##### Creating Tests

1.  Tests for each component are in:

    >       [component directory]/tests/[component name].test.js

2.  Running tests with locally:

    a) For a single test run which also generates coverage reports where that
    outputs to the <i>/coverage</i> directory. In coverage directory,
    open <i><b>index.html</b></i> in a browser for optimal viewing.

    >       npm run test

    b) The local test environment provides the ability for tests to run
    on demand as they are updated and a CLI to execute some or all tests
    at any given time when using.

    >       npm run test:watch

## Production Build

##### Creating a Production Optimized Build

1.  A build optimized for production can be transpiled. This build will be
    output to the <b><i>/build</i></b> directory. To create a production
    build, run the following command:

    >       npm run build
