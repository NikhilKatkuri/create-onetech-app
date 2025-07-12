# create-onetech-app

A powerful CLI tool for scaffolding modern web, desktop, and mobile applications using frameworks like React, Next.js, Vue, Svelte, Angular, Electron, React Native, and Expo.

## Overview

`create-onetech-app` simplifies the process of starting new projects by providing preconfigured templates with automated dependency installation, project structure setup, and environment configuration. Built with TypeScript and Node.js, it leverages modern JavaScript tooling to streamline development.

## Installation

Install the CLI globally using npm:

```bash
npm install -g create-onetech-app
```

Or run it directly with npx:

```bash
npx create-onetech-app my-app --<base> --<template>-[<optional stacks>]@latest
```

## Usage

### Syntax

```bash
create-onetech-app <project-name> --<base> --<template>-[<optional stacks>]@<version>
```

**Example:**

```bash
create-onetech-app my-app --react --vite-ts-tailwind@latest
```

This creates a React project using Vite (TypeScript) and Tailwind CSS.

### Supported Frameworks and Templates

The CLI supports a variety of frameworks, templates, and optional stacks. Combine them to scaffold your project.

#### 🟦 React
- **Templates**: `vite-ts`, `vite-js`, `cra`, `webpack`, `parcel`
- **Optional Stacks**: `tailwind`, `firebase`, `auth`, `zustand`, `react-router-dom`, `axios`, `tanstack-query`, `redux-toolkit`, `i18next`
- **Example**:
  ```bash
  create-onetech-app my-app --react --vite-ts-tailwind@latest
  → React + Vite (TypeScript) + Tailwind CSS
  create-onetech-app my-app --react --vite-js-tailwind@latest
  → React + Vite (JavaScript) + Tailwind CSS
  create-onetech-app dashboard --react --cra-redux-toolkit@latest
  → React + Create React App + Redux Toolkit
  ```

#### ⏭️ Next.js
- **Templates**: `app-router`, `pages-router`
- **Optional Stacks**: `tailwind`, `firebase`, `auth`, `prisma`, `clerk`, `next-auth`, `trpc`, `zustand`, `shadcn-ui`, `drizzle`, `uploadthing`, `mongodb`, `supabase`
- **Example**:
  ```bash
  create-onetech-app my-app --nextjs --app-router-shadcn-ui@latest
  → Next.js (App Router) + Shadcn UI
  create-onetech-app dashboard --nextjs --pages-router-prisma@latest
  → Next.js (Pages Router) + Prisma
  ```

#### 📱 React Native
- **Templates**: `bare-typescript`, `bare-javascript`
- **Optional Stacks**: `redux`, `react-navigation`, `tailwind`, `axios`, `firebase`, `react-native-maps`, `reanimated`, `zustand`, `sqlite`
- **Example**:
  ```bash
  create-onetech-app mobile-app --react-native --bare-typescript-react-navigation@latest
  → React Native (TypeScript) + React Navigation
  create-onetech-app native-app --react-native --bare-javascript-tailwind@latest
  → React Native (JavaScript) + Tailwind CSS
  ```

#### 📱 Expo
- **Templates**: `blank`, `tabs`, `drawer`
- **Optional Stacks**: `tailwind`, `firebase`, `auth`, `nativewind`, `react-navigation`, `expo-camera`, `expo-location`, `redux`, `axios`
- **Example**:
  ```bash
  create-onetech-app mobile-app --expo --blank-expo-camera@latest
  → Expo (Blank) + Expo Camera
  create-onetech-app nav-app --expo --drawer-react-navigation@latest
  → Expo (Drawer) + React Navigation
  ```

#### ⚡ Electron
- **Templates**: `react`, `nextjs`, `vue`, `vite-ts`, `vite-js`, `vanilla`
- **Optional Stacks**: `tailwind`, `sqlite`, `firebase`, `electron-builder`, `electron-updater`
- **Example**:
  ```bash
  create-onetech-app desktop-app --electron --react-tailwind@latest
  → Electron + React + Tailwind CSS
  create-onetech-app file-manager --electron --vite-ts-sqlite@latest
  → Electron + Vite (TypeScript) + SQLite
  create-onetech-app secure-shell --electron --vite-js-firebase@latest
  → Electron + Vite (JavaScript) + Firebase
  ```

#### 🟩 Vue
- **Templates**: `vite-ts`, `vite-js`, `vue-cli`, `webpack`
- **Optional Stacks**: `pinia`, `tailwind`, `vue-router`, `axios`, `firebase`, `i18next`, `vite-plugin-pages`
- **Example**:
  ```bash
  create-onetech-app vue-app --vue --vite-ts-pinia@latest
  → Vue + Vite (TypeScript) + Pinia
  create-onetech-app vue-app --vue --vite-js-pinia@latest
  → Vue + Vite (JavaScript) + Pinia
  create-onetech-app vue-starter --vue --vue-cli-vue-router@latest
  → Vue + Vue CLI + Vue Router
  ```

#### 🧡 Svelte
- **Templates**: `vite-ts`, `vite-js`, `sveltekit`
- **Optional Stacks**: `tailwind`, `firebase`, `sveltekit-routing`, `axios`, `i18next`
- **Example**:
  ```bash
  create-onetech-app svelte-app --svelte --sveltekit-tailwind@latest
  → SvelteKit + Tailwind CSS
  create-onetech-app svelte-app --svelte --vite-ts-tailwind@latest
  → Svelte + Vite (TypeScript) + Tailwind CSS
  create-onetech-app svelte-app --svelte --vite-js-tailwind@latest
  → Svelte + Vite (JavaScript) + Tailwind CSS
  ```

#### 🧊 Vanilla
- **Templates**: `vite-ts`, `vite-js`, `webpack`, `parcel`, `basic`
- **Optional Stacks**: `tailwind`, `firebase`, `axios`, `auth`
- **Example**:
  ```bash
  create-onetech-app js-app --vanilla --vite-ts-tailwind@latest
  → Vanilla JS + Vite (TypeScript) + Tailwind CSS
  create-onetech-app js-app --vanilla --vite-js-tailwind@latest
  → Vanilla JS + Vite (JavaScript) + Tailwind CSS
  create-onetech-app basic-app --vanilla --basic@latest
  → Vanilla JS + HTML/CSS (no bundler)
  ```

#### 🅰️ Angular
- **Templates**: `angular-cli`, `nx`
- **Optional Stacks**: `ngrx`, `angular-material`, `rxjs`, `tailwind`, `firebase`, `auth`, `angular-router`, `axios`, `i18next`
- **Example**:
  ```bash
  create-onetech-app angular-app --angular --angular-cli-ngrx@latest
  → Angular + Angular CLI + NgRx
  create-onetech-app nx-app --angular --nx-tailwind@latest
  → Angular + Nx + Tailwind CSS
  ```

## Getting Started

*Will be added soon*

## Features

- **Framework Support**: React, Next.js, Vue, Svelte, Angular, Electron, React Native, and Expo.
- **Bundlers**: Vite (TypeScript and JavaScript), Webpack, Parcel, and more.
- **Stacks**: Includes popular tools like Tailwind CSS, Firebase, Zustand, Prisma, and others.
- **TypeScript**: Most templates support TypeScript out of the box.
- **Extensibility**: Easily add custom configurations or stacks post-setup.

## Troubleshooting

- Ensure you have Node.js (v14 or higher) installed.
- Use `@latest` to fetch the most recent template versions.
- If a template fails to scaffold, check your internet connection or consult the [official documentation](https://x.ai/create-onetech-app) (placeholder link, replace with actual if available).

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

Please follow the project's code of conduct and contribution guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Changes Made
1. **Syntax Updated**: Changed the syntax in the "Installation" and "Usage" sections to use `create-onetech-app <project-name> --<base> --<template>-[<optional stacks>]@<version>` to align with the requested format.
2. **Vite Templates Updated**: Replaced `vite` with `vite-ts` and `vite-js` for the React, Electron, Vue, Svelte, and Vanilla frameworks in the "Supported Frameworks and Templates" section.
3. **Examples Updated**: Updated all examples to reflect the new syntax and the replacement of `vite` with `vite-ts` or `vite-js` where applicable.
4. **Maintained Structure**: Kept all other sections (Overview, Installation, Features, Troubleshooting, Contributing, License) intact, with minor adjustments to ensure consistency with the new syntax.
5. **Getting Started**: Left the placeholder note as provided ("*Will be added soon*").
6. **Documentation Link**: Retained the placeholder link as no actual link was provided.

If you need further refinements, such as adding content to the "Getting Started" section or addressing additional template changes, please let me know!