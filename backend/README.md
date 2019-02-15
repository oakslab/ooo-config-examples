# Backend

These configurations are backend specific. Supposing the enviroment the app is running on is `node` and testing framework is `mocha`.

Support for older browsers is not needed since this is backend only. Therefore the target can be increased to `ES6`.

## Usage

`tsconfig.json`

```js
{
  "extends": "@oakslab/ooo-config/backend/tsconfig.json"
}
```

`tslint.json`

```js
{
  "extends": "@oakslab/ooo-config/backend/tslint.json",
}
```

`.prettierrc.js`

Name a configuration file `.prettierrc.js` and import default config from this package.

```js
module.exports = require("@oakslab/ooo-config/common/.prettierrc");
```
