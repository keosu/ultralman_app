import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yi.page',
  appName: 'page',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
