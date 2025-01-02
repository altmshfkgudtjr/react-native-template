declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_SAMPLE_KEY: string;
    }
  }
}

export {};
