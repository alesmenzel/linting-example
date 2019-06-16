# Linting example

Check the [airbnb styleguide](https://github.com/airbnb/javascript) to see what the code will look like.

## Installation

Install `airbnb` eslint config:

```bash
npx install-peerdeps --dev eslint-config-airbnb
```

Install `prettier` and `prettier config + plugin` for eslint:

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

Install `husky` and `lint-staged` for adding git hooks and linting files when commiting or pushing them. This command will automatically add a **pre-commit** hook to your package.json.

```bash
npx mrm lint-staged
```

Now create a `.eslintrc` file with the following content. We will use airbnb config, but let prettier do the formatting for us (it will disable the conflicting rules in airbnb/prettier).

```json
{
  "extends": ["airbnb", "plugin:prettier/recommended"]
}
```

Then create a `.prettierrc` file. I recommend to set the **printWidth** (line length) to something bigger than 80, e.g. a **100** (or 120 is also a common option).

```json
{
  "trailingComma": "es5",
  "semi": false,
  "singleQuote": true,
  "printWidth": 100
}
```

Now the final touches. Add a `pre-push` git hook to our package.json. We will be running our test suite.

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm test"
    }
  }
}
```

Then add a script that will run our linter and formatter. We will also change the `test` script to run the linter.

```json
{
  "scripts": {
    "lint": "eslint .",
    "format": "eslint --fix .",
    "test": "npm run lint"
  }
}
```

Prettier can also format other file types besides just javascript. We will add `.json` and `.md`.

```json
{
  "lint-staged": {
    "*.{js,md,json}": [
      "eslint --fix",
      "git add"
    ]
  }
}
```

## Usage

Now whenever you create a commit, the code will be auto formatted with prettier.

```bash
$ npm run lint

> linting-example@1.0.0 lint C:\Projects\linting-example
> eslint .


C:\Projects\linting-example\index.js
   7:10  error    'doSomething' is defined but never used  no-unused-vars
   7:22  error    'arg1' is defined but never used         no-unused-vars
   7:28  error    'next' is defined but never used         no-unused-vars
  28:1   warning  Unexpected console statement             no-console
  29:1   warning  Unexpected console statement             no-console
  30:1   warning  Unexpected console statement             no-console
  31:1   warning  Unexpected console statement             no-console
  32:1   warning  Unexpected console statement             no-console
  33:1   warning  Unexpected console statement             no-console
  34:1   warning  Unexpected console statement             no-console
  35:1   warning  Unexpected console statement             no-console
  36:1   warning  Unexpected console statement             no-console
  37:1   warning  Unexpected console statement             no-console
  38:1   warning  Unexpected console statement             no-console
  39:1   warning  Unexpected console statement             no-console
  40:1   warning  Unexpected console statement             no-console

✖ 16 problems (3 errors, 13 warnings)
```

## Ignoring stuff

In case you need for some odd reason to disable linting, you can add a `/* eslint-disable */` comment to the top of your file.

```js
/* eslint-disable */
```

If you want to disable a single line:

```js
// this will disable all rules
/* eslint-disable-next-line */
function(a,b,c,d) {}

// this will disable a specific rule
/* eslint-disable-next-line no-console */
console.log('log me something')
```

To disable a rule (or linting completely) for a block, use:

```js
/* eslint-disable no-console */
console.log('log')
console.log('me')
console.log('something')
/* eslint-enable no-console */
```
