import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'video_player',
      filename: 'remoteEntry.js',
      exposes: {
        './VideoPlayer': './src/components/player/VideoPlayer.tsx',
        './VideoButtons': './src/components/player/VideoButtons.tsx',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    })
  ],
  server: {
    port: 3004, // Set the desired port here
  },
  preview: {
    port: 3004, // Set the desired port here
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
