# Countui

## Overview

This is a Terminal UI (TUI) app built to learn about how those kinds of things work. The aim is to have a counter, respond to key presses, and think about things like terminal rendering, event loops and put some Typescript into practice.

## Stack

I want this to be super-portable to work on.

- Node (latest at time of writing)
- Typescript
- TDD for actual components
- Functional programming where suitable

Development:
- Docker container for the actual "production" build
- Remote devcontainer for development, that I can spin up in a Github Codespace

## Outline

I'm a strong believer in the "walking skeleton" approach, and would like to see what Behaviour-driven-development (BDD) looks like in Typescript, node, terminal UI etc.

With that in mind, the rough outline I have is:
1. Walking skeleton (dev) - I can spin up a codespace, that runs a termnial app that prints to the screen then exits.
2. Walking skeleton (prod) - I can run a script, wrapping a docker command, that runs the "production" version of above
3. User input - print a message about waiting for "q" press, then quit
4. Counter - print 0
5. Counter - wait for increment and decrement key presses
6. Rendering - draw a border around the terminal, and display the counter in the middle
7. Add a key shortcut bar to the bottom that outlines the keys
8. Respond to terminal resize and re-render
9. Github actions for running tests