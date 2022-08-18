# Expo Demo: Screen Capture with Managed Workflow

This code demonstrates how to setup screen capture on an Expo app, without having to eject from the managed workflow.

Since screen capture requires significant native changes (mostly on iOS side), this example shows how this can be achieved via [Expo Plugins](https://docs.expo.dev/guides/config-plugins).

## State

 - Android: ✅
 - iOS: ❌ (WIP)

## Build and Run the App

 - Clone this repo and cd into it
 - Install dependencies (this will also build plugins): `yarn`
 - Generate native projects: `npx expo prebuild -p android` (only Android for now)
 - Run native project: `npx expo run:android -d` (only Android for now)

## Notes

 - **This won't work on a simulator**

## References

 - [Android Setup](https://github.com/react-native-webrtc/react-native-webrtc/blob/16cff1523da457dbcc27bb0744ee2bad3a987c41/Documentation/AndroidInstallation.md#screen-capture-support---android-10)
 - [iOS Setup](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-ios-sdk/#screen-sharing-integration)
 - https://github.com/react-native-webrtc/react-native-webrtc/issues/1175
