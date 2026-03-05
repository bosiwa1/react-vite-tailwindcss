# React + Vite
when you clome this prlect and you run it if you get this error ; 
(base) didierlokambababosiwa@didiers-iMac react-vite-tailwindcss % npm run dev

> react-vite-tailwindcss@0.0.0 dev
> vite

/Users/didierlokambababosiwa/Desktop/react-vite-tailwindcss/node_modules/rollup/dist/native.js:86
                throw new Error(
                      ^

Error: Cannot find module @rollup/rollup-darwin-x64. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.
    at requireWithFriendlyError (/Users/didierlokambababosiwa/Desktop/react-vite-tailwindcss/node_modules/rollup/dist/native.js:86:9)
    at Object.<anonymous> (/Users/didierlokambababosiwa/Desktop/react-vite-tailwindcss/node_modules/rollup/dist/native.js:95:76)
    at Module._compile (node:internal/modules/cjs/loader:1554:14)
    at Object..js (node:internal/modules/cjs/loader:1706:10)
    at Module.load (node:internal/modules/cjs/loader:1289:32)
    at Function._load (node:internal/modules/cjs/loader:1108:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)
    at cjsLoader (node:internal/modules/esm/translators:262:5)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:196:7) {
  [cause]: Error: Cannot find module '@rollup/rollup-darwin-x64'
  Require stack:

  Solution: type this line by one on your terminal windows 
rm -rf node_modules
rm package-lock.json
npm install
npm run dev
























## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
