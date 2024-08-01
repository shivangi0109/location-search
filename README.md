# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Getting Started with Project setup using Vite and Typescript
* npm create vite location-search -- --template react-ts
* cd into location-search
* npm install
* npm run dev

## To check all the versions of Node.js installed on your system and list all the available versions, you can use the following commands:

### List Installed Node.js Versions
If you have nvm installed, you can list all the versions of Node.js that are installed on your system with:

```
nvm ls
```
This will show you the versions of Node.js installed on your system, with the current active version highlighted.

### List Available Node.js Versions
To list all the available versions of Node.js that you can install using nvm, you can run:

```
nvm ls-remote
```
This command will display a list of all the Node.js versions available for installation.

## Additional nvm Commands

### Install a specific version:

```
nvm install <version>
```

### Use a specific version:

```
nvm use <version>
```

### Uninstall a specific version:

```
nvm uninstall <version>
```

By using these commands, you can manage and switch between different Node.js versions easily on your system.
