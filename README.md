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
module.exports = require("@oakslab/ooo-config/common/.jest.config");
```

## Package publishing

1. Bump the version in `package.json` and commit the changes. For example `0.0.3` --> `0.0.4`. This package should follow [Semantic Versioning 2.0.0](https://semver.org/).
2. Go to [Release page](https://github.com/oakslab/ooo-config-examples/releases) and create a new release from the master branch. Provide the same tag version you specified in the previous step. Title and description are also important, let your team members know what has been done in this release.
3. Publish release and Travis CI does the rest.
