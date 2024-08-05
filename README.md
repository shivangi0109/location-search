# React + TypeScript + Vite Overview

This TypeScript-focused web application integrates a map interface similar to Google Maps. It displays a map on the right and a search panel on the left. Users can type a location name, such as "New York," and press Enter to search for matching locations via an external API. The search results list the city and country of each location, along with a "Go" button. Clicking "Go" centers the map on the selected location. Built with Vite and plain React, this project emphasizes TypeScript usage without Redux.

## Final Product

**Homepage:**

!["View of homepage"]()

**Search for Specific Location:**

!["View of searching for specific location"]()

**Specific Location in USA:**

!["View of specific location in USA"]()

**Specific Location in Philippines:**

!["View of specific location in Philippines"]()

## Features
* Search for locations using an external API
* Display search results with city and country information
* Center map on selected location from search results

## Tech Stack
* **Frontend:** React, TypeScript
* **Tooling:** Vite

## Installation

### Clone the repository:

```
git clone <repository-url>
cd <repository-folder>
```

### Install dependencies:

```
npm install
```

### Start the application:

```
npm run dev
```

## Usage
* Type a location name in the search panel and press Enter.
* View search results listing city and country information.
* Click the "Go" button to center the map on the selected location.

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

### Direction for Installing Tailwind CSS with Vite

- ### Here is the link to follow - [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)
- ### Install Tailwind CSS
  Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

  ```
  npm install -D tailwindcss postcss autoprefixer
  ```

  ```
  npx tailwindcss init -p
  ```
- ### Configure your template paths
  Add the paths to all of your template files in your tailwind.config.js file.

  ```
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  ```
- ### Add the Tailwind directives to your CSS
  Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- ### Start your build process
  Run your build process with npm run dev.

  ```
  npm run dev
  ```