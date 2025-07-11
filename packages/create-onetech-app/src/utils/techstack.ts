// src/tech/techstack.ts
/**
 * This file defines the technology stacks available for various frameworks and libraries.
 * Each stack includes a base technology, available templates, and a list of common libraries or tools
 * that can be used with that base.
 * The stacks are structured to provide a quick reference for developers looking to set up projects with specific
 * technologies.
   */
  
const techStacks = [
  {
    base: "react",
    templates: ["vite", "cra", "webpack", "parcel"],
    stack: ["tailwind", "firebase", "auth", "zustand", "react-router-dom", "axios", "tanstack-query", "redux-toolkit", "i18next"]
  },
  {
    base: "nextjs",
    templates: ["app-router", "pages-router"],
    stack: ["tailwind", "firebase", "auth", "prisma", "clerk", "next-auth", "trpc", "zustand", "shadcn-ui", "drizzle", "uploadthing", "mongodb", "supabase"]
  },
  {
    base: "react-native",
    templates: ["bare-typescript", "bare-javascript"],
    stack: ["redux", "react-navigation", "tailwind", "axios", "firebase", "react-native-maps", "reanimated", "zustand", "sqlite"]
  },
  {
    base: "expo",
    templates: ["blank", "tabs", "drawer"],
    stack: ["tailwind", "firebase", "auth", "nativewind", "react-navigation", "expo-camera", "expo-location", "redux", "axios"]
  },
  {
    base: "electron",
    templates: ["react", "nextjs", "vue", "vite", "vanilla"],
    stack: ["tailwind", "sqlite", "firebase", "electron-builder", "electron-updater"]
  },
  {
    base: "vue",
    templates: ["vite", "vue-cli", "webpack"],
    stack: ["pinia", "tailwind", "vue-router", "axios", "firebase", "i18next", "vite-plugin-pages"]
  },
  {
    base: "svelte",
    templates: ["vite", "sveltekit"],
    stack: ["tailwind", "firebase", "sveltekit-routing", "axios", "i18next"]
  },
  {
    base: "vanilla",
    templates: ["vite", "webpack", "parcel", "basic"],
    stack: ["tailwind", "firebase", "axios", "auth"]
  },
  {
    base: "angular",
    templates: ["angular-cli", "nx"],
    stack: ["ngrx", "angular-material", "rxjs", "tailwind", "firebase", "auth", "angular-router", "axios", "i18next"]
  }
];

export default techStacks;  