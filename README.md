# We're [OAK'S LAB](https://oaks-lab.com)

The creative ecosystem specializing in building businesses, architecting software and educating the future leaders in tech.

# What's this?

These are configs we use on our projects.

- [Common](./common) - common for each project
- [Frontend](./frontend) - frontend specific
- [Backend](./backend) - backend specific
- [Mobile](./mobile) - mobile specific
- [Devops](./devops) - devops specific
- [QA](./qa) - qa specific

## Install

```sh
$ yarn add @oakslab/ooo-config --dev
```

or

```sh
$ npm install --save-dev @oakslab/ooo-config
```

## Usage

`tsconfig.json`

```js
{
  "extends": "@oakslab/ooo-config/common/tsconfig.json",
  // It's also possible to override the rules
  "compilerOptions": {
    "outDir": "dist",
    "lib": ["es2018"]
  },
  "exclude": ["node_modules", "example-folder"]
}
```

`tslint.json`

```js
{
  "extends": "@oakslab/ooo-config/common/tslint.json",
  // It's also possible to override the rules
  "linterOptions": {
    "exclude": ["example.js"]
  }
}
```

`.prettierrc.js`

Name a configuration file `.prettierrc.js` and import default config from this package.

```js
module.exports = require("@oakslab/ooo-config/common/.prettierrc");
```

`.jest.config.js`

```js
module.exports = require("@oakslab/ooo-config/common/jest.config");
```
