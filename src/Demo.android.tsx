import notifee, { AndroidImportance } from '@notifee/react-native';
import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { mediaDevices, MediaStream, RTCView } from 'react-native-webrtc';

interface Props {}

const Demo: React.FC<Props> = () => {
  const [stream, setStream] = useState<MediaStream>();

  const startFgService = async () => {
    try {
      const channelId = await notifee.createChannel({
        id: 'screen_capture',
        name: 'Screen Capture',
        lights: false,
        vibration: false,
        importance: AndroidImportance.DEFAULT,
      });

      await notifee.displayNotification({
        title: 'Screen Capture',
        body: 'Displayed during screen capture',
        android: {
          channelId,
          asForegroundService: true,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const stopFgService = async () => {
    try {
      await notifee.stopForegroundService();
    } catch (err) {
      console.log(err);
    }
  };

  const startStream = async () => {
    try {
      const _stream = (await mediaDevices.getDisplayMedia()) as MediaStream;
      setStream(_stream);
    } catch (err) {
      console.log(err);
    }
  };

  const start = async () => {
    try {
      await startFgService();
      await startStream();
    } catch (err) {
      console.log(err);
    }
  };

  const stop = async () => {
    try {
      await stopFgService();
      setStream(undefined);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View className="flex-1 bg-blue-100 items-center justify-center">
      <View className="flex-1 p-2 w-full">
        {stream && (
          <RTCView
            // @ts-ignore
            className="flex-1"
            objectFit="contain"
            streamURL={stream.toURL()}
          />
        )}
      </View>
      <View className="my-4">
        <Button
          onPress={() => (stream ? stop() : start())}
          title={stream ? 'Stop' : 'Start'}
        />
      </View>
    </View>
  );
};

export default Demo;
