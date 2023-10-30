# Redmine Playwright Project

![Node.js Version](https://img.shields.io/badge/Node.js-v16%5E-brightgreen)
![Visual Studio Code Version](https://img.shields.io/badge/VS%20Code-v1.83.1-blue)

A Playwright test project for automating tests on Redmine.

## Prerequisites

- Node.js (v16^)
- Visual Studio Code (v1.83.1)

## Installation

1. Clone this repository
2. Go to the project root
3. Install dependencies:
   `npm install`

## Usage

- To install Playwright Browsers:
`npx playwright install --with-dep`

- To run tests in headless mode:
`npm run test`

- To run tests in headed mode:
`npm run test:debug`

- To run tests with Allure reporting:
`npm run allure:test`

- To generate Allure reports:
`npm run allure:generate`

- To open Allure reports in your browser:
`npm run allure:open`


## Test Scripts

- `account.spec.js`: Contains test scenarios related to account settings.
- `activity.spec.js`: Contains test scenarios related to user activity.
- `login.spec.js`: Contains test scenarios related to the login process.

## Dependencies

- **Playwright**: Testing framework for web applications.
- **Faker.js**: Generate random test data.
- **Allure Command Line**: Generate interactive test reports.
- **Allure Playwright**: Allure integration for Playwright.

## Author

- Mariana Zaozirna








