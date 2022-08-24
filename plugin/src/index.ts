import { ConfigPlugin, withPlugins } from '@expo/config-plugins';

import withAndroidNotifeeService from './withAndroidNotifeeService';
import withIosBroadcastExtension from './withIosBroadcastExtension';
import withIosScreenCapture from './withIosScreenCapture';

const withScreenCapture: ConfigPlugin = (config) => {
  // for some reason had to switch the ios plugins in order for
  // them to run in the required order
  return withPlugins(config, [
    withAndroidNotifeeService,
    withIosScreenCapture,
    withIosBroadcastExtension,
  ]);
};

export default withScreenCapture;
