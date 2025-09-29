import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'TopBar',
      filename: 'remoteEntry.js', 
      remotes: {
          mediastore: 'http://localhost:3001/remoteEntry.js',
          host: 'http://localhost:3000/remoteEntry.js',
        },
      exposes: {
            './TopBar': './src/components/TopBar.tsx', 
          },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3003, // Unique port for top-bar-starter
    strictPort: true,
  },
  build: {
    target: 'esnext',
  },
})

