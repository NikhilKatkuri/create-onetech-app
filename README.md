

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
npx create-onetech-app my-app --[base]-[template]-[stack]@latest
```

## Usage

### Syntax

```bash
create-onetech-app [project-name] --[base]-[template]-[stack]@version
```

**Example:**

```bash
create-onetech-app my-app --react-vite-tailwind@latest
```

This creates a React project using Vite and Tailwind CSS.

### Supported Frameworks and Templates

The CLI supports a variety of frameworks, templates, and stacks. Combine them to scaffold your project.

#### 🟦 React
- **Templates**: `vite`, `cra`, `webpack`, `parcel`
- **Stacks**: `tailwind`, `firebase`, `auth`, `zustand`, `react-router-dom`, `axios`, `tanstack-query`, `redux-toolkit`, `i18next`
- **Example**:
  ```bash
  create-onetech-app my-app --react-vite-tailwind@latest
  → React + Vite + Tailwind CSS
  ```

#### ⏭️ Next.js
- **Templates**: `app-router`, `pages-router`
- **Stacks**: `tailwind`, `firebase`, `auth`, `prisma`, `clerk`, `next-auth`, `trpc`, `zustand`, `shadcn-ui`, `drizzle`, `uploadthing`, `mongodb`, `supabase`
- **Example**:
  ```bash
  create-onetech-app my-app --nextjs-app-router-shadcn-ui@latest
  → Next.js (App Router) + Shadcn UI
  ```

#### 📱 React Native
- **Templates**: `bare-typescript`, `bare-javascript`
- **Stacks**: `redux`, `react-navigation`, `tailwind`, `axios`, `firebase`, `react-native-maps`, `reanimated`, `zustand`, `sqlite`
- **Example**:
  ```bash
  create-onetech-app mobile-app --react-native-bare-typescript-react-navigation@latest
  → React Native (TypeScript) + React Navigation
  ```

#### 📱 Expo
- **Templates**: `blank`, `tabs`, `drawer`
- **Stacks**: `tailwind`, `firebase`, `auth`, `nativewind`, `react-navigation`, `expo-camera`, `expo-location`, `redux`, `axios`
- **Example**:
  ```bash
  create-onetech-app mobile-app --expo-blank-expo-camera@latest
  → Expo (Blank) + Expo Camera
  ```

#### ⚡ Electron
- **Templates**: `react`, `nextjs`, `vue`, `vite`, `vanilla`
- **Stacks**: `tailwind`, `sqlite`, `firebase`, `electron-builder`, `electron-updater`
- **Example**:
  ```bash
  create-onetech-app desktop-app --electron-react-tailwind@latest
  → Electron + React + Tailwind CSS
  ```

#### 🟩 Vue
- **Templates**: `vite`, `vue-cli`, `webpack`
- **Stacks**: `pinia`, `tailwind`, `vue-router`, `axios`, `firebase`, `i18next`, `vite-plugin-pages`
- **Example**:
  ```bash
  create-onetech-app vue-app --vue-vite-pinia@latest
  → Vue + Vite + Pinia
  ```

#### 🧡 Svelte
- **Templates**: `vite`, `sveltekit`
- **Stacks**: `tailwind`, `firebase`, `sveltekit-routing`, `axios`, `i18next`
- **Example**:
  ```bash
  create-onetech-app svelte-app --svelte-sveltekit-tailwind@latest
  → SvelteKit + Tailwind CSS
  ```

#### 🧊 Vanilla
- **Templates**: `vite`, `webpack`, `parcel`, `basic`
- **Stacks**: `tailwind`, `firebase`, `axios`, `auth`
- **Example**:
  ```bash
  create-onetech-app js-app --vanilla-vite-tailwind@latest
  → Vanilla JS + Vite + Tailwind CSS
  ```

#### 🅰️ Angular
- **Templates**: `angular-cli`, `nx`
- **Stacks**: `ngrx`, `angular-material`, `rxjs`, `tailwind`, `firebase`, `auth`, `angular-router`, `axios`, `i18next`
- **Example**:
  ```bash
  create-onetech-app angular-app --angular-angular-cli-ngrx@latest
  → Angular + Angular CLI + NgRx
  ```

## Getting Started
 
 - *will be added soon*

## Features

- **Framework Support**: React, Next.js, Vue, Svelte, Angular, Electron, React Native, and Expo.
- **Bundlers**: Vite, Webpack, Parcel, and more.
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
