import { ConfigPlugin, withPlugins } from '@expo/config-plugins';

import withAndroidNotifeeService from './withAndroidNotifeeService';

const withScreenCapture: ConfigPlugin = (config) => {
  return withPlugins(config, [withAndroidNotifeeService]);
};

export default withScreenCapture;
