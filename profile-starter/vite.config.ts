import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'profile',
      filename: 'remoteEntry.js',
      remotes: {
        mediastore: 'https://users.metropolia.fi/~karripar/microfrontend/mediastore/assets/remoteEntry.js',
        front_and_sidebar: 'https://users.metropolia.fi/~karripar/microfrontend/frontsidebar/assets/remoteEntry.js',
      },
      exposes: {
        './DeleteMedia': './src/views/profile/DeleteMedia.tsx',
        './FormSwitch': './src/views/profile/FormSwitch.tsx',
        './LoginForm': './src/views/profile/LoginForm.tsx',
        './ModifyMedia': './src/views/profile/ModifyMedia.tsx',
        './Profile': './src/views/profile/Profile.tsx',
        './ProfileThumbnail': './src/views/profile/ProfileThumbnail.tsx',
        './RegisterForm': './src/views/profile/RegisterForm.tsx',
        './UserInfo': './src/views/profile/UserInfo.tsx',
      },
      shared: {
        react: { requiredVersion: '^18.3.1' },
        'react-dom': { requiredVersion: '^18.3.1' },
        'react-router-dom': { requiredVersion: '^6.26.0' },
      },
    }),
  ],
  server: {
    port: 3005,
    strictPort: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  },
  preview: {
    port: 3005,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
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
