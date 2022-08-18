import {
  AndroidConfig,
  ConfigPlugin,
  withAndroidManifest,
} from '@expo/config-plugins';

const { getMainApplicationOrThrow } = AndroidConfig.Manifest;

const withAndroidNotifeeService: ConfigPlugin = (config, _props) => {
  // Android
  config = withAndroidManifest(config, async (config) => {
    config.modResults = ensureNotifeeServiceManifest(config.modResults);
    return config;
  });
  return config;
};

const ensureNotifeeServiceManifest = (
  androidManifest: AndroidConfig.Manifest.AndroidManifest
): AndroidConfig.Manifest.AndroidManifest => {
  const serviceName = 'app.notifee.core.ForegroundService';
  const app = getMainApplicationOrThrow(androidManifest);

  if (!app.service) {
    app.service = [];
  }

  if (!app.service.some((s) => s.$['android:name'] === serviceName)) {
    app.service.push({
      $: {
        'android:name': serviceName,
        // @ts-ignore
        'android:foregroundServiceType': 'mediaProjection|camera|microphone',
      },
    });
  }

  return androidManifest;
};

export default withAndroidNotifeeService;
