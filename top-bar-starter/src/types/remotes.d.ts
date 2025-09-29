declare module 'mediastore/UserContext' {
  import * as React from 'react';
  export const UserProvider: React.ComponentType<{ children: React.ReactNode }>;
  export function useUserContext(): {
    user: any;
    login: () => void;
    logout: () => void;
  };
}

declare module 'mediastore/contextHooks' {
  import * as React from 'react';
  export const UserProvider: React.ComponentType<{ children: React.ReactNode }>;
  export function useUserContext(): {
    user: any;
    login: () => void;
    logout: () => void;
  };
}
declare module 'mediastore/content/MediaContext' {
  import * as React from 'react';
  export const MediaProvider: React.ComponentType<{ children: React.ReactNode }>;
  export function useMediaContext(): {
    media: any;
    play: () => void;
    pause: () => void;
  };
}