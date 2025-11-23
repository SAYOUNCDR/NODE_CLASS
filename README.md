# Node.js Modules — Examples

This repository contains a tiny set of example files that demonstrate how Node.js modules work: core (built-in) modules, local modules (files you create), and third-party modules installed from npm.

## Files in this repository

- `first.js` — example entry script. Runs one of the examples that demonstrate requiring/importing modules.
- `Module.js` — a small local module (exports a function/object) used by the example scripts.
- `ModImport.js` — demonstrates importing/using the local module (`Module.js`).
- `package.json` — project metadata and (optionally) scripts and dependencies.
- `README.md` — this file.

> Note: These files show common patterns for working with modules. The exact exports in `Module.js` and how they're consumed by `first.js` / `ModImport.js` are intentionally small and educational.

## Module types

- Core modules: built into Node.js (examples: `fs`, `path`, `http`). You don't install these — require/import them directly.
- Local modules: your own files (example: `./Module.js`). Use a relative path when requiring/importing (for example `require('./Module')` or `import something from './Module.js'`).
- Third-party modules: packages from npm (example: `lodash`, `express`). Install with `npm install <pkg>` and then `require` or `import` them.

## How to run (Windows `cmd`)

Open a Windows command prompt and run these commands from the project root (where this README is located):

```cmd
cd /d E:\INT222-NodeJs
node first.js
```

To run the other example directly:

```cmd
cd /d E:\INT222-NodeJs
node ModImport.js
```

If you want to experiment with a third-party package (example: `lodash`):

```cmd
cd /d E:\INT222-NodeJs
npm install lodash
node -e "console.log(require('lodash').kebabCase('Hello World'))"
```

If `package.json` defines a start script, you can also run:

```cmd
cd /d E:\INT222-NodeJs
npm start
```

## Common issues / troubleshooting

- Error: Cannot find module './Module' — make sure the file exists and you used the correct relative path (include `./` when importing local files).
- SyntaxError: Cannot use import statement outside a module — Node treats files as CommonJS by default; either use `require()` or enable ES modules by adding "type": "module" to `package.json` and using `.js` import syntax.
- If you install packages, ensure `node` and `npm` are installed and on your PATH. Check with `node -v` and `npm -v`.

## Next steps / learning

- Try editing `Module.js` to export a different function or value and update `ModImport.js` to use it.
- Read the Node.js docs on modules: https://nodejs.org/api/modules.html

Enjoy experimenting with Node modules!
