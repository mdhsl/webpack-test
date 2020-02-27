# Setup

Run npm to install base package:

```bash
npm install
```

Then run dev mode:

```bash
npm run dev
```

In dev mode, the file are stored in-memory. The dev mode will automatically open a new window
serving a demo page running index.js. We can also setup an index.html to show up a map
for example to be sure that every components have been built.

The dev mode support sourcemap and debugging directly in the browser(which supports the sourcemap).

or production mode:

```bash
npm run prod
```
The command will build and minify the dist files. The files will be stored into the dist directory.
The libs directory is used for workers (to be used with importScripts)

