/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_FILE_SERVER: string;
    readonly VITE_STREAM_SERVER: string;
    // add more env vars here if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  