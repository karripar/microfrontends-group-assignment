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
          "http://10.120.33.54/store/assets/remoteEntry.js",
        front_and_sidebar:
          "http://10.120.33.54/bars/assets/remoteEntry.js",
        video_player:
          "http://10.120.33.54/video/assets/remoteEntry.js",
        profile:
          "http://10.120.33.54/profile/assets/remoteEntry.js",
        upload:
          "http://10.120.33.54/upload/assets/remoteEntry.js",
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
