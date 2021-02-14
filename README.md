# problem-solving-env &middot;

Simple environment for solving coding challenges.

## Table of content

[Stack](#Stack)
[Prerequisites](#Prerequisites)
[Setup](#Setup)
[Scripts](#Scripts)
[Contributing](#Contributing)

## Stack

- [TypeScript](https://www.typescriptlang.org/) - typed language build on top of JavaScript

## Tools

- [uvu](https://webpack.js.org) - test runner for Node.js and browser
- [eslint](https://eslint.org) - static code analysis
- [prettier](https://prettier.io) - code formatter
- [husky](https://github.com/typicode/husky) - git hooks

## Prerequisites

- [Node](https://nodejs.org/en/) - version specified in [.node-version](/.node-version) file.
- [npm](https://www.npmjs.com/) - usually comes with node.

_It's recommended to use node version manger (ie. [fnm](https://github.com/Schniz/fnm)), for easier switching between different projects._

## Setup

```sh
# Install dependencies
npm ci

# Start tests in watch mode
npm run test:watch
```

## Scripts

Summary of defined npm scripts.

### Test

| Script        | Description               |
| ------------- | ------------------------- |
| `test`        | run tests                 |
| `test:watch`  | run tests in watch mode   |
| `test:types`  | validates TS types        |
| `test:format` | validates code formatting |
| `test:lint`   | validates linting rules   |

### Fix

| Script       | Description                |
| ------------ | -------------------------- |
| `fix:format` | tries to fix formatting    |
| `fix:lint`   | tries to fix linter issues |
