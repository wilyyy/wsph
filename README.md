# WSPH (WIP)

"work smart play hard"

**Purpose**

After completing a rigorous 2-year program at BCIT through daily 18-hour coding sessions, I craved a better work-life balance without compromising growth. This collection of scripts optimizes my allocated learning hours by eliminating repetitive small tasks.

**Built using**

- Node.js
- OpenAI API

## Initialization

Create a .env file and add appropriate keys using the .env.template

Install node modules

```
yarn
```

## Scripts

### Create Docs (In progress)

Takes files from the folder [files/create-docs](./src/create-doc-from-js/files) and exports documentation, generated by ChatGPT, into the folder [exports/docs](./exports/docs/) under a subfolder name and file type determined by [the script's configurations](./src/create-doc-from-js/config.ts)

Todo:

- figure out how to make a consistent doc format (better prompt? compare with sample md file?)
- try using other types of documentation file types (pdf, etc)

```
yarn createDocs
```
