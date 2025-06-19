# Task Management App MVP

A SaaS Task Management App Minimum Viable Product (MVP) built with **React.js** (JavaScript), **Firebase Authentication**, and **Cypress** for end-to-end testing. This app enables users to sign up, log in, create boards, lists, and tasks, and manage tasks with drag-and-drop functionality, due dates, and labels. The project includes a robust QA infrastructure with integrations for **TestRail**, **Jira**, and **GitHub Projects**, and a **GitHub Actions** CI/CD pipeline for automated testing and linting.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the App Locally](#running-the-app-locally)
- [Testing](#testing)
- [CI/CD Pipeline](#cicd-pipeline)
- [Integrations](#integrations)
  - [TestRail](#testrail)
  - [Jira](#jira)
  - [GitHub Projects](#github-projects)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview
The Task Management App MVP is a web-based application designed for small to medium-sized teams to manage tasks efficiently. It provides core functionalities for user authentication and task organization using a Kanban-style interface. The project emphasizes **test-driven development** with a comprehensive QA infrastructure to ensure reliability and maintainability. The app is configured for production use with linting, formatting, automated testing, and CI/CD pipelines.

This MVP serves as a foundation for a scalable SaaS product, with Firebase Authentication handling secure user management and a modular React.js front-end for easy feature expansion.

## Features
- **User Authentication** (via Firebase):
  - Sign-up with email, password, and name.
  - Login with email and password.
  - Logout functionality.
- **Board Management**:
  - Create boards to organize tasks.
  - View all boards in a dashboard.
- **List and Task Management**:
  - Create tasks within lists (e.g., To Do, Done).
  - Drag-and-drop tasks between lists.
  - Set due dates for tasks.
  - Add labels to tasks for categorization.
- **QA Infrastructure**:
  - End-to-end tests with Cypress covering all user stories.
  - Test case management with TestRail.
  - Bug tracking with Jira.
  - Project management with GitHub Projects (Kanban board).
- **CI/CD**:
  - Automated testing and linting via GitHub Actions.
- **Code Quality**:
  - ESLint for linting JavaScript and React code.
  - Prettier for consistent code formatting.

## Tech Stack
- **Front-End**: React.js (v18.2.0), JavaScript, React Router (v6.14.2), React DnD (v16.0.1)
- **Authentication**: Firebase Authentication (v10.14.1)
- **Testing**: Cypress (v12.17.3), @4tw/cypress-drag-drop (v2.2.3)
- **HTTP Client**: Axios (v1.7.2)
- **Build Tools**: Create React App (react-v5.0.1)
- **Code Quality**: ESLint (v8.57.0), Prettier (v3.0.3)
- **CI/CD**: GitHub Actions
- **Integrations**: TestRail, Jira, GitHub Projects

## Prerequisites
- **Node.js**: v18 or later ([Download](https://nodejs.org))
- **npm**: v8 or later (included with Node.js)
- **Firebase Account**: Create a project at [Firebase Console](https://console.firebase.google.com)
- **Git**: For version control ([Download](https://git-scm.com))
- **GitHub Account**: For CI/CD and project management
- **TestRail Account**: For test case management (optional)
- **Jira Account**: For bug tracking (optional)

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Florence-nyokabi/taskmaster-pro.git
   cd task-management-app

2. **Install Dependencies**:
    ```bash
    npm install

3. **Set Up Firebase**:
- Create a Firebase project in the Firebase Console.
- Enable Email/Password authentication under Authentication > Sign-in method.
- Copy your Firebase SDK configuration from Project settings > General.
- Create a `.env` file in the project root:
    ```bash
    REACT_APP_FIREBASE_API_KEY=your-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
    REACT_APP_FIREBASE_APP_ID=your-app-id

4. **Initialize Cypress**
    ```bash
    npx cypress open

    - This generates the `cypress/` folder structure.


## Environment Variables
The app uses environment variables for Firebase configuration. Ensure `.env` is set up as shown above and never commit `.env` to version control (it's included in .gitignore). For `CI/CD`, add these variables to GitHub Secrets in your repository settings under Secrets > Actions.

Example GitHub Secrets:
- `REACT_APP_FIREBASE_API_KEY`
- `REACT_APP_FIREBASE_AUTH_DOMAIN`
- `REACT_APP_FIREBASE_PROJECT_ID`
- `REACT_APP_FIREBASE_STORAGE_BUCKET`
- `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
- `REACT_APP_FIREBASE_APP_ID`

## Running the App Locally
- Start the Development Server:
    ```bash
    npm start

- Opens the app at `http://localhost:3000`.

- Run Linting:
    ```bash
    npm run lint

- Run Formatting:
    ```bash
    npm run format

- Run Cypress Tests:
    - Open Cypress Test Runner
    ```bash
    npx cypress open
        - Select E2E testing and run all `.cy.js` files.

- Run tests headlessly:
    ```bash
    npx cypress run

## Testing
The project uses **Cypress** for end-to-end testing, covering all MVP features:
- **Authentication**: Sign-up, login, invalid credentials.
- **Boards**: Board creation.
- **Tasks**: Drag-and-drop, due dates, labels.

### Test Files
- `cypress/e2e/auth/signup.cy.js`: Tests sign-up functionality.
- `cypress/e2e/auth/login.cy.js`: Tests login functionality.
- `cypress/e2e/boards/createBoard.cy.js`: Tests board creation.
- `cypress/e2e/tasks/dragDrop.cy.js`: Tests task drag-and-drop.
- `cypress/e2e/tasks/dueDatesLabels.cy.js`: Tests due dates and labels.

### Test Data
Test data is stored in `cypress/fixtures/testData.json`. Unique email addresses are generated for Firebase Authentication tests to avoid conflicts.

### Cross-Browser Testing
Run tests in different browsers:
```bash
npx cypress run --browser firefox
npx cypress run --browser chrome



## Mobile Testing
Tests include mobile viewport simulation:
```javascript
cy.viewport('iphone-xr');


## CI/CD Pipeline
The project uses **GitHub Actions** for continuous integration and deployment. The pipeline is defined in `.github/workflows/test.yml` and runs on every push or pull request to the `main` branch. It performs:
- **Cypress Tests**: Runs all E2E tests headlessly.
- **Linting**: Checks code quality with ESLint.

To set up:
1. Add Firebase environment variables to GitHub Secrets (see [Environment Variables](#environment-variables)).
2. Push changes to trigger the pipeline:
   ```bash
   git add .
   git commit -m "Update codebase"
   git push
   
3. View pipeline results in the GitHub Actions tab.












