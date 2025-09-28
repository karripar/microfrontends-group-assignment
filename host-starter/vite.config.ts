import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        mediastore:
          "http://10.120.33.54:3001/assets/remoteEntry.js",
        front_and_sidebar:
          "http://10.120.33.54:3002/assets/remoteEntry.js",
        video_player:
          "http://10.120.33.54:3004/assets/remoteEntry.js",
        profile:
          "http://10.120.33.54:3005/assets/remoteEntry.js",
        upload:
          "http://10.120.33.54:3006/assets/remoteEntry.js",
      },

      shared: ["react", "react-dom", "react-router-dom"],
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
