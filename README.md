# Valtech Frontend End code challenge

This project was bootstrapped with Create React App

## Available Scripts

In the project directory, you can run:

### `yarn`

To install depencencies

### `yarn storybook`

To start the Storybook component explorer on port 6006 where you can also view the results of the tests and the accessibility check.

Storybook runs alongside your app in development mode. It helps you build UI components isolated from the business logic and context of your app.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Data mocking

Mock Service Worker was used to request data, simulating a fetch from a webservice.

Specific endpoints have been defined through a Request handler which is a function that determines whether an outgoing request should be mocked, and specifies its mocked response.

### Browser

Mock Service Worker operates client-side by registering a Service Worker responsible for requests interception on http://localhost:3030.

### Node

One of the most common usages of Mock Service Worker in Node is utilizing the request handlers for integration tests. We are going to use Jest as a test runner. Following the same principle, it is possible integrate mocking into any Node process.