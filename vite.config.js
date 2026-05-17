import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  return {
    define: {
      'process.env': '{}',
      'global': 'globalThis',
    },
    build: {
      outDir: "deploy/_site",
      target: "es2015",
      rollupOptions: {
        input: {
          main: 'index.html',
          game: 'game.html',
        },
        output: {
          format: "iife"
        }
      }
    },
    resolve: {
      alias: {
        './libs/io-client.js': './src/libs/io-client.js',
      }
    }
  }
});
