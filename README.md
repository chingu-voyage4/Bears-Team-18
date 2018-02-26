# Bears-Team-18

Voyage-4

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
