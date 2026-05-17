import { defineConfig } from "vite";
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  return {
    plugins: [
      nodePolyfills({
        // Whether to polyfill specific globals.
        globals: {
          process: true,
        },
      }),
    ],
    build: {
      outDir: "deploy/_site",
      target: "esnext",
      rollupOptions: {
        input: {
          main: 'index.html',
          game: 'game.html',
        },
        output: {
          format: "iife",
          inlineDynamicImports: true
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
