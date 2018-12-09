## Star Wars Character Search - Duco Javscript Test

To tackle the technical challenge I used `create-react-app` to boostrap the project.
Given the taks I decided to just use React without any external state managment, in a real world example (or if the task was more complex) I would have added Redux and probably either Redux-Saga or Redux-Observable to handle complex async operations.
My approach to the challenge was to first design the project structure, dividing the views in containers / components.
I've then started to code the components and added axios for the API calls, in particular for the films I wanted to avoid unnecesary calls for every character, so I decided to fetch the films list on startup, sort them by release date (which is the actual index criteria that the API uses) and use these data to retrive the films a character appeared in via some utility functions.
When the application was working as intended I styled that using `styled-components` and then added some more details like the Star Wars logo, backgorund and Spinner component to give a visual feedback to the user while fetching data from the API.
I've added then the infinite scrolling to handle the pagination of multiple results.
Afterwards I moved the actual axios call from AppContainer to an external file and used the funcional state to do the same for the state (its both cleaner and easier to test this way).
The latest add was axios-cancel to handle race conditions (I'm using the same requestId for every API call so when a new call is invoked the old one, if not already resolved, is cancelled).
I've then added tests using Jest and Enzyme.
After cloning the repo a simple `yarn && yarn start` should run the application.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
