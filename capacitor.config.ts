import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'starter_app',
  webDir: 'www',
  plugins: {
    LiveUpdates: {
      appId: '4d65b71a',
      channel: 'dev-1.0.0',
      autoUpdateMethod: 'background',
      maxVersions: 2,
    },
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
