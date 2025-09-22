import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        mediastore: 'https://users.metropolia.fi/~karripar/microfrontend/store/assets/remoteEntry.js',
        front_and_sidebar: 'https://users.metropolia.fi/~karripar/microfrontend/bars/assets/remoteEntry.js',
        video_player: 'https://users.metropolia.fi/~karripar/microfrontend/player/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    })
    
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
