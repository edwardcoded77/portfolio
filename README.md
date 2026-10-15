# My Portfolio

A React site that shows the projects I built in Level 2.


## Components

| Component | What it shows | Where its values come from | What it remembers |
| --- | --- | --- | --- |
| `Hero` | my hero photo | `heroPhoto`, which calls `imageUrl` | whether the photo is in color |
| `Header` | my name and a line about me | typed into the JSX |
| `Fortune` | a random fortune | a list and `randomNumber` |
| `Footer` | &copy; and the current year | the year the page is opened |
| `DataPlaylistPortfolioCard` | one project: Data Playlist, | A playlist page that loads its songs from my own data API |
| `GreetingCardGeneratorPortfolioCard` |  Greeting Card Generator | An interactive web application that turns user input into a personalized greeting card. |
| `CapstonePortfolioCard` | Global Life Expectancy | An interactive web application that lets users explore life expectancy data across countries. |




## What I'm adding next
- Color and Black and White buttons on my hero
- a New Fortune button
- a Like button on every card


## Built with

React, Vite, Bun, and Pico CSS.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
