# Workflow repo for the CA

This project is a forked from [NoroffFEU/workflow-repo-ca](https://github.com/NoroffFEU/workflow-repo-ca) .
It was a vanila JavaScript project which by help of API call make it possible for a user to register, then login. Also it provide list of Venues dinamically in the home page.
The goals for this fork is :

- Imporving test coverage by adding
  - Unit test
  - End to End test
- Improve for code quality
  - Eslint and prettier
  - Hook

## Test coverage

### Unit test

- install vitest
  - npm init -y
  - npm install -D vitest
  - Add a test script to package.json
  - Mocking
    - jsdom
    - npm install -D jsdom @vitest/browser

### End-To-End test

- Setting up Playwright
  - npm init playwright@latest
  - Using Environment Variables
  - cerate .env file

    TEST_USER_EMAIL

    TEST_USER_PASSWORD

  - Setting Up baseURL

## Running tests

- npm run test
- npx playwright test --headed

## Available Scripts

- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## Improve quality of code

- Prettier : code formatting
- Eslint : fix errors
- Husky : pre-commit hook

## How to run

using live server with help of VS code extention
