# WSPH (WIP)

"work smart play hard"

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

Takes files in [create-docs/files](./src/create-doc-from-js/files) and exports documentation generated by ChatGPT into the [docs exports folder](./exports/docs/) with subfolders categorizing different types of documentation files

Todo:

- Consider changing js file extension to txt and have gpt read that instead b/c errors on random js files
- figure out how to make a consistent doc format (better prompt?)
- try using other types of documentation file types (pdf, etc)

```
yarn createDocs
```
