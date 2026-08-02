import { defineConfig } from "vite";
import { glob } from "glob";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  root: "src",
  base: "/goit-js-hw-09/",
  server: {
    host: true,
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      input: glob.sync("./src/*.html"),
    },
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [injectHTML(), FullReload(["./src/**/**.html"])],
});
