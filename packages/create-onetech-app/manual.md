Thank you for the clarification. If the `vite` template does not exist in `create-onetech-app` and only `vite-ts` (TypeScript) and `vite-js` (JavaScript) are available, I'll update the relevant sections of the CLI manual to reflect this. Below is the revised manual with the `vite` template replaced by `vite-ts` and `vite-js` where applicable, ensuring the syntax and examples align with the updated structure: `create-onetech-app <project-name> --<base> --<template>-[<optional stacks>]@<version>`.

---

# 📘 CLI Manual — create-onetech-app
A powerful scaffolding CLI to bootstrap modern apps using frameworks like React, Next.js, Vue, Svelte, Angular, Electron, Expo, and more.

---

### Syntax
```bash
create-onetech-app <project-name> --<base> --<template>-[<optional stacks>]@<version>
```

**Example:**
```bash
create-onetech-app my-app --react --vite-ts-tailwind@latest
```

This creates a React project using Vite (TypeScript) and Tailwind CSS.

---

### Available Tech Stacks
The CLI supports the following base frameworks, templates, and optional stacks. Combine them to scaffold your project.

#### 🟦 React
- **Templates**: `vite-ts`, `vite-js`, `cra`, `webpack`, `parcel`
- **Optional Stacks**: `tailwind`, `firebase`, `auth`, `zustand`, `react-router-dom`, `axios`, `tanstack-query`, `redux-toolkit`, `i18next`
- **Examples**:
  ```bash
  create-onetech-app my-app --react --vite-ts-tailwind@latest
  → React + Vite (TypeScript) + Tailwind CSS
  create-onetech-app my-app --react --vite-js-tailwind@latest
  → React + Vite (JavaScript) + Tailwind CSS
  create-onetech-app dashboard --react --cra-redux-toolkit@latest
  → React + Create React App + Redux Toolkit
  create-onetech-app react-app --react --webpack-zustand@latest
  → React + Webpack + Zustand
  ```

#### ⏭️ Next.js
- **Templates**: `app-router`, `pages-router`
- **Optional Stacks**: `tailwind`, `firebase`, `auth`, `prisma`, `clerk`, `next-auth`, `trpc`, `zustand`, `shadcn-ui`, `drizzle`, `uploadthing`, `mongodb`, `supabase`
- **Examples**:
  ```bash
  create-onetech-app my-app --nextjs --app-router-tailwind@latest
  → Next.js (App Router) + Tailwind CSS
  create-onetech-app dashboard --nextjs --pages-router-prisma@latest
  → Next.js (Pages Router) + Prisma
  create-onetech-app next-app --nextjs --app-router-shadcn-ui@latest
  → Next.js (App Router) + Shadcn UI
  ```

#### 📱 React Native
- **Templates**: `bare-typescript`, `bare-javascript`
- **Optional Stacks**: `redux`, `react-navigation`, `tailwind`, `axios`, `firebase`, `react-native-maps`, `reanimated`, `zustand`, `sqlite`
- **Examples**:
  ```bash
  create-onetech-app mobile-app --react-native --bare-typescript-react-navigation@latest
  → React Native (TypeScript) + React Navigation
  create-onetech-app native-app --react-native --bare-javascript-tailwind@latest
  → React Native (JavaScript) + Tailwind CSS
  ```

#### 📱 Expo
- **Templates**: `blank`, `tabs`, `drawer`
- **Optional Stacks**: `tailwind`, `firebase`, `auth`, `nativewind`, `react-navigation`, `expo-camera`, `expo-location`, `redux`, `axios`
- **Examples**:
  ```bash
  create-onetech-app mobile-app --expo --blank-tailwind@latest
  → Expo (Blank) + Tailwind CSS
  create-onetech-app nav-app --expo --drawer-react-navigation@latest
  → Expo (Drawer) + React Navigation
  create-onetech-app camera-app --expo --blank-expo-camera@latest
  → Expo (Blank) + Expo Camera
  ```

#### ⚡ Electron
- **Templates**: `react`, `nextjs`, `vue`, `vite-ts`, `vite-js`, `vanilla`
- **Optional Stacks**: `tailwind`, `sqlite`, `firebase`, `electron-builder`, `electron-updater`
- **Examples**:
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
- **Examples**:
  ```bash
  create-onetech-app vue-app --vue --vite-ts-tailwind@latest
  → Vue + Vite (TypeScript) + Tailwind CSS
  create-onetech-app vue-app --vue --vite-js-tailwind@latest
  → Vue + Vite (JavaScript) + Tailwind CSS
  create-onetech-app vue-dashboard --vue --webpack-pinia@latest
  → Vue + Webpack + Pinia
  create-onetech-app vue-starter --vue --vue-cli-vue-router@latest
  → Vue + Vue CLI + Vue Router
  ```

#### 🧡 Svelte
- **Templates**: `vite-ts`, `vite-js`, `sveltekit`
- **Optional Stacks**: `tailwind`, `firebase`, `sveltekit-routing`, `axios`, `i18next`
- **Examples**:
  ```bash
  create-onetech-app svelte-app --svelte --vite-ts-tailwind@latest
  → Svelte + Vite (TypeScript) + Tailwind CSS
  create-onetech-app svelte-app --svelte --vite-js-tailwind@latest
  → Svelte + Vite (JavaScript) + Tailwind CSS
  create-onetech-app svelte-web --svelte --sveltekit-sveltekit-routing@latest
  → SvelteKit + SvelteKit Routing
  ```

#### 🧊 Vanilla
- **Templates**: `vite-ts`, `vite-js`, `webpack`, `parcel`, `basic`
- **Optional Stacks**: `tailwind`, `firebase`, `axios`, `auth`
- **Examples**:
  ```bash
  create-onetech-app js-app --vanilla --vite-ts-tailwind@latest
  → Vanilla JS + Vite (TypeScript) + Tailwind CSS
  create-onetech-app js-app --vanilla --vite-js-tailwind@latest
  → Vanilla JS + Vite (JavaScript) + Tailwind CSS
  create-onetech-app basic-app --vanilla --basic@latest
  → Vanilla JS + HTML/CSS (no bundler)
  create-onetech-app webpack-app --vanilla --webpack-firebase@latest
  → Vanilla JS + Webpack + Firebase
  ```

#### 🅰️ Angular
- **Templates**: `angular-cli`, `nx`
- **Optional Stacks**: `ngrx`, `angular-material`, `rxjs`, `tailwind`, `firebase`, `auth`, `angular-router`, `axios`, `i18next`
- **Examples**:
  ```bash
  create-onetech-app angular-app --angular --angular-cli-tailwind@latest
  → Angular + Angular CLI + Tailwind CSS
  create-onetech-app nx-app --angular --nx-ngrx@latest
  → Angular + Nx + NgRx
  ```

---

### Overview
The `create-onetech-app` CLI streamlines project setup by providing preconfigured templates for modern web, desktop, and mobile applications. It supports frameworks like React, Next.js, Vue, Svelte, Angular, Electron, React Native, and Expo, with various bundlers (e.g., Vite, Webpack, Parcel) and stacks (e.g., Tailwind CSS, Firebase, Zustand).

- **Purpose**: Simplifies project initialization with automated dependency installation, project structure setup, and environment configuration.
- **Tech**: Built with TypeScript and Node.js for robust and modern JavaScript tooling.
- **Usage**: Combine a base framework, template, and optional stacks to scaffold a project tailored to your needs.

For more details, visit the [create-onetech-app documentation](https://x.ai/create-onetech-app) (placeholder link, replace with actual if available).

---

**Note**: Ensure the version is specified (e.g., `@latest`) to fetch the most recent template. If you encounter issues, check the CLI's official documentation or repository for troubleshooting.

---

This revised manual replaces the `vite` template with `vite-ts` and `vite-js` for the React, Electron, Vue, Svelte, and Vanilla base frameworks, and updates the examples accordingly. Let me know if you need further adjustments or additional details!