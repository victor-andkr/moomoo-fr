import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  return {
    build: {
      outDir: "deploy/_site",
      target: "esnext",
      rollupOptions: {
        input: {
          main: 'index.html',
          game: 'game.html',
        },
        output: {
          format: "es"
        }
      }
    }
  }
});
