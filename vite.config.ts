import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url"
import { resolve } from "path"
import Pages from 'vite-plugin-pages';
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    Pages({
      dirs: [
         { dir: 'src/views/', baseRoute: '/' },
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  envDir: resolve(__dirname, './env'),
});