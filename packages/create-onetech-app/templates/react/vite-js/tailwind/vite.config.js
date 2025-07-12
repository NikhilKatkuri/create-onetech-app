import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
//  enjoy the tailwindcss https://tailwindcss.com/docs/installation/using-vite
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
