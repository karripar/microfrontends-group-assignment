import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        front_and_sidebar: 'http://localhost:3002/remoteEntry.js',
        video_player: 'http://localhost:3004/remoteEntry.js',
        profile: 'http://localhost:3005/remoteEntry.js',
        upload: 'http://localhost:3006/remoteEntry.js',
        mediastore: 'http://localhost:3001/remoteEntry.js',
        topbar: 'http://localhost:3003/remoteEntry.js',
      },

      shared: ['react', 'react-dom', 'react-router-dom'],
    }),

    //: federation config
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'esnext',
  },
});
