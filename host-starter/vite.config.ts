import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        mediastore:
          "https://users.metropolia.fi/~karripar/microfrontend/mediastore/assets/remoteEntry.js",
        front_and_sidebar:
          "https://users.metropolia.fi/~karripar/microfrontend/frontsidebar/assets/remoteEntry.js",
        video_player:
          "https://users.metropolia.fi/~karripar/microfrontend/videoplayer/assets/remoteEntry.js",
        upload:
          "https://users.metropolia.fi/~karripar/microfrontend/upload/assets/remoteEntry.js",
        profile:
          "https://users.metropolia.fi/~karripar/microfrontend/profile/assets/remoteEntry.js",
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
