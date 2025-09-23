import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        mediastore: 'http://localhost:3001/assets/remoteEntry.js',
        front_and_sidebar: 'http://localhost:3002/assets/remoteEntry.js',
        video_player: 'http://localhost:3004/assets/remoteEntry.js',
        profile: 'http://localhost:3005/assets/remoteEntry.js',
      },
      
      shared: ["react", "react-dom", "react-router-dom"],
    }),

    //: federation config
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    target: "esnext",
  },
});
