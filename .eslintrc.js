module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es6: true
    },
    plugins: ['prettier'],
    parser: "@babel/eslint-parser",
    parserOptions: {
      sourceType: "module",
      requireConfigFile: false,
      ecmaVersion: 2015,
      "babelOptions": {
        "presets": ["@babel/preset-react"]
     },
    },
    extends: [
      'airbnb',
      'prettier',
    ],
    rules: {
      'prettier/prettier': 'error',
    },
    overrides: [
      {
        files: ["**/*.js", "**/*.jsx"],
        rules: {
          "react/prop-types": "off",
          "react/prefer-stateless-function": "off",
          "react/destructuring-assignment": "off",
          "class-methods-use-this": "off",
          "no-class-assign": "off",
          "camelcase": "off"
        }
      }
    ]
  };
  