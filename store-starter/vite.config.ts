import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // TODO: Add the federation configuration
    // name: mediastore
    // exposes: contextHooks, MediaContext, UserContext, apiHooks
    // shared: react, react-dom, react-router-dom
  ],
  server: {
    port: 3001, // Set the desired port here
  },
  preview: {
    port: 3001, // Set the desired port here
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
