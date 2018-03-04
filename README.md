[![CircleCI](https://circleci.com/gh/chingu-voyage4/Bears-Team-18.svg?style=svg)](https://circleci.com/gh/chingu-voyage4/Bears-Team-18)
[![Codebeat](https://codebeat.co/badges/3f9a7060-9573-4ba4-9c2f-3374b47f8509)](https://codebeat.co/projects/github-com-chingu-voyage4-bears-team-18-develop)
[![Codecov](https://codecov.io/gh/chingu-voyage4/Bears-Team-18/branch/develop/graph/badge.svg)](https://codecov.io/gh/chingu-voyage4/Bears-Team-18)

# Bears-Team-18

Voyage-4

## Application Stack

The application consists of several components, a rough outline:

### Backend

The backend consists of the following pieces:

* [MongoDB](https://www.mongodb.com/) as a database, this servers as our persistant storage layer.
* [NodeJS](https://nodejs.org/en/) as the server side runtime(Javascript).
* [Express](https://github.com/expressjs/express) as the web framework to handle incoming requests
* [GraphQL Server](http://graphql.org/learn/) as the data endpoint for the frontend application.
  * The GraphQL endpoint will be responsible to present our MongoDB to our frontend in a convenient matter.
  * There will only be a single endpoint and the frontend will not have to worry about where all the data is coming from or how to combine things.
  * GraphQL can also aggregate the external API's and route to the client side app in a friendly manner.
  * It sits inbetween our database + external information sources and the frontend app.

This will be the bulk of the backend application. There will be a small part in the serverside code that will be reponsible to bootup [NextJS](https://github.com/zeit/next.js/). More on NextJS in the Frontend section.

### Frontend

Frontend consists of the following pieces:

* [NextJS](https://github.com/zeit/next.js/) as a framework for a server-side rendered React Application.
  * NextJS solves a lot of the setup and boilerplate that you'd need to get a serverside rendered react application going.
  * It provides an extendable webpack and babel configuration and takes care of the regular boilerplate.
  * It's similar to create-react-app, in the sense that it tries to simplify the development experience.
  * The benefit of using NextJS is a server-side rendered application, built in codesplitting which leads to a fast bootup and following navigation experience for end users.
* [React](https://reactjs.org/) as a view library to build composible UI's in a declaritive manner.
* GraphQL Client to interact with the GraphQL server and feed the data to our React Application.

## GitHub Workflow

This workflow is based on the [Git Flow](http://danielkummer.github.io/git-flow-cheatsheet/) method.

We have 2 main branches, namely `develop` and `master`.

Master is meant as the **release** branch and our goal should be to push something meaningful to this branch that **works** after every sprint.

This branch is also protected from direct pushes and you always need to make changes to it via a Pull Request (PR).

The main branch you'll be using will be the `develop` branch.
When you create a specific feature branch, you choose develop as the starter and target it for the merge as well. You can use [certain keywords](https://help.github.com/articles/closing-issues-using-keywords/) to automatically close issues if your PR solves those issues.

For clarity we can add the issue number in the branch name or PR, followed by a short description. For example:
`1/document-github-workflow`.

So in short:

* `master` -> For release, so one PR with all the changes from last week from `develop`
* `develop` -> Accumulator branch for active development, here all the features will get merged.
* `Feature branches` -> Your own dev branch based from `develop` to complete your tickets!

## Useful links

### NextJS:

* [Learn NextJS (tutorial)](https://learnnextjs.com/)
* [Github repo (docs)](https://github.com/zeit/next.js/)
* [Examples directory](https://github.com/zeit/next.js/tree/canary/examples)

### GraphQL

* [How to GraphQL (tutorial)](https://www.howtographql.com/)
* [GraphQL Documentation](http://graphql.org/learn/)

### React

* [Official React Tutorial](https://reactjs.org/tutorial/tutorial.html)
* [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
