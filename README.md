# Next.js Template Project

Welcome to my Template Project! This is a robust starting point designed to facilitate the initiation of new web projects with a strong foundation and adherence to best practices.

## Overview

This template is curated with the goal of streamlining project setup and promoting collaborative work. It encompasses a carefully selected set of technologies, established guidelines, and project structure to enhance productivity and maintainability.

### Technologies Used

- [Next.js](https://nextjs.org/): A React framework for building server-side rendered and static web applications.
- [TypeScript](https://www.typescriptlang.org) (`.ts` files): A statically typed superset of JavaScript that enhances code quality and developer productivity.
- [Tailwind](https://tailwindcss.com) (In prgress): CSS framework for styling components. It has the ability to [remove unused CSS](https://tailwindcss.com/docs/optimizing-for-production) to optimize file size and CSS processing speed of the project.
- [Storybook](https://storybook.js.org/) (In progress): An open-source tool for developing UI components in isolation for React, Vue, and Angular.
- [Testing Library](https://testing-library.com/) (In progress): A simple and intuitive testing library for React applications.
- [Cypress](https://www.cypress.io/) (In progress): An end-to-end testing framework for web applications.

### Code Quality Tools

- **ESLint**: A pluggable linting utility for JavaScript and TypeScript that identifies and fixes code errors.
- **Prettier**: An opinionated code formatter that ensures consistent code style.
- **Husky (In progress)**: A Git hooks manager that enables running scripts in response to Git events.

## Development

### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

### Pull Request Guideliness

- The main branch is basically a snapshot of the latest production version. All development must be done in dedicated branches.
- When create a new branch we follow the convention `[type/scope]`. `type` can be either `docs`, `fix`, `feat`, `build`, or any other conventional commit `type`. `scope` is just a short id that describes the scope of work. For example `fix/dropdown-hook`
- It is good to have multiple small commits while working on the PR.
- We define and describe what the pull request is meant to change in the PR template.
- We don´t leave development related code like `console.log`
- The automated tests must succeed before merging to main
