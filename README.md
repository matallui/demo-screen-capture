# Expo Demo: Screen Capture with Managed Workflow

This code demonstrates how to setup screen capture on an Expo app, without having to eject from the managed workflow.

Since screen capture requires significant native changes (mostly on iOS side), this example shows how this can be achieved via [Expo Plugins](https://docs.expo.dev/guides/config-plugins).

## State

 - Android: ✅
 - iOS: ✅

 For iOS you currently get a red screen instead of the expected hall-of-mirrors.
 This is due to an issue that has now been reported [here](https://github.com/jitsi/jitsi-meet/issues/12040).

## Build and Run the App

 - Clone this repo and cd into it
 - Install dependencies (this will also build plugins): `yarn`
 - Generate native projects: `npx expo prebuild`
 - Run native project: `npx expo run:android -d` (or `ios`)

## Notes

 - **This won't work on a simulator**

## References

 - [Android Setup](https://github.com/react-native-webrtc/react-native-webrtc/blob/16cff1523da457dbcc27bb0744ee2bad3a987c41/Documentation/AndroidInstallation.md#screen-capture-support---android-10)
 - [iOS Setup](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-ios-sdk/#screen-sharing-integration)
 - https://github.com/react-native-webrtc/react-native-webrtc/issues/1175
 - https://github.com/andrew-levy/react-native-safari-extension
 - https://github.com/bndkt/react-native-app-clip
 - https://github.com/irohitb/screenshare-webrtc
