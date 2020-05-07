# CrapJack


### Start:

```console
$ npm i
$ npm start
```

### Run tests:

```console
$ npm run test
```

### I've used the following technologies on the project:

1. react-create-app for foundation(using hooks and context for state management).
2. prettier for code formatting
3. eslint for error linting.
4. jest and enzyme for testing
5. [http://deckofcardsapi.com/](http://deckofcardsapi.com/) for cards API

### Time breakdown

1. Project planning - 2 hours
2. Researching - 2 hours
3. Project setup and run - 2 hours
4. Coding - 5 hours
5. Testing - 4 hours
6. Documenting - 1 hour

## Task Overview

Your task, should you choose to accept it, is to create a project to be used for a simple web based card game – CrapJack
The game is a simplified version of BlackJack with a single dealing round and score.
The candidate should use modern best practices for the project setup, layout and configuration.
The project front-end can be implemented using the candidate&#39;s technology of choice but should be setup to be reliable, extensible and well documented.
The candidate may want to use a publicly available API such as Deck of Cards, to provide Deck management and card dealing.

[http://deckofcardsapi.com/](http://deckofcardsapi.com/)

Please note that while this document provides the necessary information for developing the app, it is intentionally left open, in some aspects, to the developer&#39;s interpretation.

## CrapJack

The game will load with a start page showing the name of the game, and action buttons to

1. Start a Game – show player and dealer seats, deal first hand and show Reveal button
2. View Rules – show a summary of game rules, as below.

### Rules

Single player vs Dealer
Each player dealt 3 Cards
Dealer Hand will be dealt Face Down
Player hand dealt facing up
When the player clicks the Reveal button, the Dealer Hand will be shown, both hands scored, and a winner declared.

#### Scoring

Each card is scored as follows:
2 =2, 3=3…. 10 = 10,
Picture Cards J / Q / K / A = 10
A hand scoring over 21 = Bust
The player with the hand closest to, but less than or equal to 21 wins

### Game UI

The initial Game Screen will consist of
Dealer Hand
Player Hand
Reveal! Button
When a hand is over the Reveal Button will be replaced with a Deal button to begin a new Hand.
Design of the UI layout is left as an exercise for the candidate.

## Resources

Deck of Cards API:

[http://deckofcardsapi.com/](http://deckofcardsapi.com/)

## Guidance

Given time constraints in place, the candidate is not expected to have a perfect solution.
An advanced candidate may choose to showcase their strength in a particular area by focusing on adding advanced features;

- Card Dealing / Hand Won Animations
- Track game session scores
- Extend game logic to cover basic BlackJack Game – 2 cards, Hit/Stand interaction
- Unit and/or end-to-end testing for core logic and components
- Add a back-end component to manage game instance state
- Add player profiles, hi scores

## General

1. Please provide complete source code with comments for the task as a self-contained zip with all necessary files/dependencies.
2. Please provide brief and clear documentation of the projects and services.
3. Please provide a breakdown of the time it took you to research, design, write and document the implementation.
