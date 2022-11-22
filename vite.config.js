import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   lib: {
  //     entry: 'src/my-element.js',
  //     formats: ['es'],
  //   },
  //   rollupOptions: {
  //     external: /^lit/,
  //   },
  // },
  server: {
    open: '/index.html',
    host: '0.0.0.0',
  },
});
