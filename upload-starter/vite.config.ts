import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'upload',
      filename: 'remoteEntry.js',
      remotes: {
        mediastore: 'http://10.120.33.54:3001/assets/remoteEntry.js',
      },
      exposes: {
        './Upload': './src/views/upload/Upload.tsx',
        './MediaForm': './src/views/upload/MediaForm.tsx',
      },
      shared: {
        react: { requiredVersion: '^18.3.1' },
        'react-dom': { requiredVersion: '^18.3.1' },
        'react-router-dom': { requiredVersion: '^6.26.0' },
      },
    }),
  ],
  server: {
    port: 3006,
    strictPort: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  },
  preview: {
    port: 3006,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@sharedTypes': path.resolve(__dirname, '../palvelinohjelmointi-types'),
    },
  },
  build: {
    target: 'esnext',
  },
});
