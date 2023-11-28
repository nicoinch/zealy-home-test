# Zealy Home Test

This repository contains code for the **Zealy Home Test** realised during Zealy recruitment process.

## Tools & libraries used


### Technologies & libraries

- **react.js** to craft the UI.
- **typescript** to ensure typings.
- **tailwindcss** to style the UI.
- **shadcn/ui** to build UI components.
- **tanstack/react-query** to fetch data from the API.

### Tools

- **nx** to manage the monorepo.
- **vite** to serve & build the application.
- **storybook** to develop UI components in isolation.
- **eslint** to lint code.
- **prettier** to format code.
- **testing-library** to test the application.

## Install dependencies

To install dependencies run `npm install` at the project root.

## Start the app

To start the development server run `nx run zealy-home-test:serve:development`.

Open your browser and navigate to http://localhost:4200/.

## Start Storybook

To start storybook, run `nx run zealy-home-test:storybook`.

Open your browser and navigate to http://localhost:4400/.

## Run tests

To run tests, run `nx run zealy-home-test:test`.

## Lint code

To lint code, run `nx run zealy-home-test:lint`.

## Build application

To build the application for production, run `nx run zealy-home-test:build`.
