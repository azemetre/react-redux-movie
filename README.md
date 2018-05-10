### Running

After cloning the repo install the needed dependencies with the following command: ```npm install```

Once dependencies have been installed the following npm command will run a local server and start the react app: ```npm run dev```

You can now view the app on a browser located at: `http://localhost:3000/`

### Server

React app is statically hosted using Express.js. The movies json file is displayed on the `/movies` url through an endpoint hosted locally. This endpoint can be view at `localhost:3000/movies`

### React
#### Styles
CSS styling is done directly on the components by loading the class names from the appropriate `component.css` file.

#### Router
React router was used to create a hierarchy of components per browser location.

#### Redux
##### Combining Reducers

Let's say in the future, we need to introduce additional parts of our store to supplement new features. Features like creating user accounts, selecting favorite movies, or adding new movies. Using Redux we could create infinitely many distinct parts of the store as needed.

By determining how we combine our reducers now, we could easily structure our app that in the future we can effortlessly add additional reducers.

This method is called **splitting reducers**. [citation 1](https://redux.js.org/basics/reducers#splitting-reducers) [citation 2](https://redux.js.org/recipes/structuring-reducers/splitting-reducer-logic)

Simply stated, each reducer can change the data in the store AND we want to make operations safe, we divide the application state into separate parts and then combine them back into a single store.

`./src/modules/index.js` is the central location of future reducers for the App to consume

### Webpack

There were some issues between using the correct versions of packages, and some dependencies did not play nice with webpack v4. Using an older version of webpack resolved many of these issues.

### Testing
#### Integration
Basic integration test checking the GET request for the movies endpoint. Joi was used to verify if the properties were correct.

Use the following command to run the integration test: `npm run test:api`

#### E2E
Two test cases were created to verify user actions (mapping cases to user stories in the planning process). Verifying that Ronald, a user, would like to view the synopsis for `12 Angry Men` and the release date for `The Truman Show`.

Use the following command to run the E2E tests: `npm run test:e2e`

Selenium will default to your choosen browser when running the webdriver.

In the future E2E tests can easily be isolated into a docker container and run real browsers (read not headless) using XVFB to decrease test execution time (one of the methods used by paid services like [Cypress.io](https://www.cypress.io/)) to minimize build times in CI/CD practices.

I have a personal preference to using E2E tests over snapshot tests due to snapshots not being a real representation of how different browsers implement and render DOM elements along with varying specification implementations between Firefox, Chrome, Edge, and Safari. Snapshot testing seems more akin to static analysis of the frontend world, but not a thorough method of testing functionality.