import notifee from '@notifee/react-native';

export const initializeApp = () => {
  notifee.registerForegroundService((_notification) => {
    return new Promise(() => {});
  });
};
