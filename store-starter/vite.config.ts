import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mediastore',
      filename: 'remoteEntry.js',
      exposes: {
        './contextHooks': './src/hooks/contextHooks.ts',
        './apiHooks': './src/hooks/apiHooks.ts',
        './MediaContext': './src/contexts/MediaContext.tsx',
        './UserContext': './src/contexts/UserContext.tsx',
      },
      shared: {
        react: { requiredVersion: "^18.3.1" },
        "react-dom": { requiredVersion: "^18.3.1" },
        "react-router-dom": { requiredVersion: "^6.26.0" }
      },
    })
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
