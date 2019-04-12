# Sprint Challenge: Testing - TDD Video Games

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored Testing. During this Sprint, you studied Introduction to Automated Testing, Testing React Applications & Testing Web APIs. In your challenge this week, you will demonstrate proficiency by creating an application that follows the TDD pattern to create a simple Web API using Node.js and Express.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Testing and your command of the concepts and techniques in the Introduction to Automated Testing, Testing React Applications & Testing Web APIs modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge use `Test Driven Development` to build a RESTful API using Node.js and Express to create and list _games_. **Data can be stored in memory using a simple JS array**. No need to keep track of incrementing `id`s for this project's MVP, that is part of the Stretch Problem.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. In Jest, what are the differences between describe() and it() globals, and what are good uses for them?

   I'm not familiar with the term _globals_ in this context, but describe() and it() are functions that are used to organize the tests one writes in Jest. describe() accepts a string and a callback function as its parameters. The string is used to _describe_ what component, function, or feature is being tested - for example, 'GET /' would describe a set of tests for making a GET request to the root URL an API. The callback function for describe() usually contains a set of it() functions, which are the actual tests. An it() function also takes a string and a callback as its parameters. The string describes the expected outcome of the test - for example 'should return status code 200', and the callback contains the code that actually tests the component, function, or feature. To build on the GET example, we would use the library Supertest to simulate a server call to the **.get('/',** endpoint, then compare the response to the expected 200 status. The test runner would then move to the other it() functions in the describe() block, all of which should relate to the 'GET /' endpoint. Both describe() and it() can also be used for their scope to declare variables or perform actions that pertain only to that set of tests.

2. What is the point of Test Driven Development? What do you think about this approach?

   Test-Driven Development (TDD) is an approach to development in which tests are written **before** writing the actual code for an app. Writing the tests first forces a coder to formalize what the function/component/feature is supposed to do, and the resulting tests will then automatically hold the coder to those expectations. The tests will fail at first, and then code is written to pass the tests - usually the most basic code that will pass. After the tests are passed, the code can be refactored or tweaked slowly to improve readability and performance, all the while keeping an eye on the tests, and taking heed when a code change results in a failing test. If the tests are well-written, the resulting code should perform well outside the testing environment.

   I see the value in TDD, and I'm prepared to adopt the approach if I'm hired at a company that uses it. I'm not sure I would use it in a personal project unless maybe it was to demonstrate that I am familiar with TDD. One problem I see with TDD is that the tests have to be very well-written in the first place, or the TDD concept kind of breaks down. If I write a test with improper syntax, then write flawless code, and my code fails my test, it won't be long before I figure out that the test is wrong, not the code. At that point I'm rewriting the test to get the code to pass, since I "know" that the code is flawless. At this point, I've circumvented the whole purpose of TDD. Perhaps in a TDD job environment, however, well-written tests are provided(?), in which case TDD is would be much more feasible in my estimation.

3. Mention three types of automated tests.

   **unit tests**: Unit tests test the basic logic of an app. For our purposes, we used unit testing to test our basic Javascript functions. A pure function is easiest to test since its output can be predicted based on the function itself plus its input.

   **component tests**: Component tests test React components by first rendering a component virtually, then searching the virtual render for the expected elements. The component can be passed in specific props to be sure it behaves as expected in different conditions. When a function that is called from a component is not available during a test because the component is isolated, a mock function can be used instead.

   **integration tests**: Even if an app passes all its unit tests, and (assuming it's a React app) its component tests, it still may not work properly as a whole. Integration testing is used to make sure that all parts of an app work together and behave as expected. If an app passes its unit and component tests but fails one or more integration tests (and assuming all tests are well-written), the problem is likely due to how the different parts of the app communicate with one another.

## Project Set Up

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you downloaded the repository.
- [ ] run `yarn` or `npm i` to download all dependencies.
- [ ] type `yarn test` or `npm test` to run the tests. The `test` script is already configured.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] use `jest` and `supertest` to write the tests.
- [ ] Write the **tests BEFORE** writing the route handlers.
- [ ] Your API must be have `POST` and `GET` endpoints for `/games`.
- [ ] Write a **minimum** of three tests per endpoint.

Below is a product specification covering the requirements for your endpoints.

### POST /games

- [ ] The `POST /games` endpoint should take in an object that looks like this

  ```js
  {
    title: 'Pacman', // required
    genre: 'Arcade', // required
    releaseYear: 1980 // not required
  }
  ```

- [ ] In the route handler, validate that the required fields are included inside the body. If the information is incomplete, return a `422` status code.
- [ ] Write tests to verify that the endpoint returns the correct HTTP status code when receiving correct and incorrect game data.

### GET /games

- [ ] The `GET /games` endpoint should return the list of games and HTTP status code 200.
- [ ] Write a test to make sure this endpoint always returns an array, even if there are no games stored. If there are no games to return, the endpoint should return an empty array.

## Stretch Problems

The following exercises are optional, but we suggest that you tackle them if you finish the MVP early.

- validate that the game `title` is unique. If the client tries to create a duplicate game, return a status code 405 (Not Allowed). Write a test that checks for this.
- add an `id` property to the game schema and write code in the server to increment it automatically. After implementing this functionality work on the following:
  - Write a `GET /games/:id` endpoint that returns the information about a single game. Respond with a 404 status code when a game is not found for the provided `id`. Add the corresponding tests for it.
  - add a `DELETE /games/:id` endpoint that can remove the corresponding game. If the game does not exists return a 404 status code. Write tests for this endpoint.

**Remember you can use any resources you want to solve these problems, but avoid copying/pasting solutions you've previously written. Also if you don't finish all of the challenges, that's fine! Just do what you can and submit your challenges in the end! HAVE FUN!**
