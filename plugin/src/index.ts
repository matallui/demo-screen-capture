import { ConfigPlugin, withPlugins } from '@expo/config-plugins';

import withAndroidNotifeeService from './withAndroidNotifeeService';
import withIosBroadcastExtension from './withIosBroadcastExtension';

const withScreenCapture: ConfigPlugin = (config) => {
  return withPlugins(config, [withAndroidNotifeeService, withIosBroadcastExtension]);
};

export default withScreenCapture;
