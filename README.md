# Countui

Countui is a Terminal User Interface (TUI) application designed to explore terminal rendering, event loops, and functional programming concepts using TypeScript. The application is built with portability and simplicity in mind, avoiding external libraries for UI to maximize learning.

## Features
- A counter that responds to key presses.
- Terminal rendering and event loop handling.
- Functional programming practices.
- Behavior-driven development (BDD) approach.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd countui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

## Usage

### Development
To run the application in a development environment:
```bash
npm start
```

### Production
To run the application in a Docker container:
```bash
./run-docker.sh
```

---

## Overview

This is a Terminal UI (TUI) app built to learn about how those kinds of things work. The aim is to have a counter, respond to key presses, and think about things like terminal rendering, event loops and put some Typescript into practice.

## Stack

I want this to be super-portable to work on.

- Node (latest at time of writing)
- Typescript
- TDD for actual components
- Functional programming where suitable
- No libraries for things like UI - as vanilla as possible to learn as much.

Development:
- Docker container for the actual build
- Remote devcontainer for development, that I can spin up in a Github Codespace

## Outline

I'm a strong believer in the "walking skeleton" approach, and would like to see what Behaviour-driven-development (BDD) looks like in Typescript, node, terminal UI etc.

With that in mind, the rough outline I have is:
1. Walking skeleton (dev) - I can spin up a codespace, that runs a terminal app that prints to the screen then exits.
2. Walking skeleton (prod) - I can run a script, wrapping a docker command, that runs the built version of above
3. User input - print a message about waiting for "q" press, then quit
4. Counter - print 0
5. Counter - wait for increment and decrement key presses
6. Rendering - draw a border around the terminal, and display the counter in the middle
7. Add a key shortcut bar to the bottom that outlines the keys
8. Respond to terminal resize and re-render
9. Github actions for running tests

## TODO

- [x] Dist folder
- [x] Dev skeleton
- [x] Gitignore
- [x] Build skeleton
- [ ] Build task in VS Code