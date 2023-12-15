import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      assets: path.resolve(__dirname, "./src/assets/"),
      styles: path.resolve(__dirname, "./src/styles/"),
    },
  },
});
