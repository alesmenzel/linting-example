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
