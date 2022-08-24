import React, { useEffect, useRef, useState } from 'react';
import { Button, findNodeHandle, NativeModules, View } from 'react-native';
import { useIsCaptured } from 'react-native-is-screen-captured-ios';
import {
  mediaDevices,
  MediaStream,
  RTCView,
  ScreenCapturePickerView,
} from 'react-native-webrtc';

interface Props {}

const Demo: React.FC<Props> = () => {
  const screenCapturePickerViewRef = useRef(null);
  const [stream, setStream] = useState<MediaStream>();
  const isCaptured = useIsCaptured();

  useEffect(() => {
    if (!isCaptured) {
      setStream(undefined);
    }
  }, [isCaptured, setStream]);

  const showBroadcast = async () => {
    const handle = findNodeHandle(screenCapturePickerViewRef.current);
    return NativeModules.ScreenCapturePickerViewManager.show(handle);
  };

  const start = async () => {
    try {
      await showBroadcast();
      const _stream = (await mediaDevices.getDisplayMedia()) as MediaStream;
      setStream(_stream);
    } catch (err) {
      console.log(err);
    }
  };

  const stop = async () => {
    try {
      await showBroadcast();
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
        <ScreenCapturePickerView ref={screenCapturePickerViewRef} />
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
