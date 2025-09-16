import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    // TODO: federation config, name: front_and_sidebar,
    // expose Front, Sidebar, and ThumbCarousel,
    // shared: react, react-dom, react-router-dom
  ],
  server: {
    port: 3002, // Set the desired port here
  },
  preview: {
    port: 3002, // Set the desired port here
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
  },
});
