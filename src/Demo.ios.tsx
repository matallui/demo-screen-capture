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
    const startStream = async () => {
      const _stream = (await mediaDevices.getDisplayMedia()) as MediaStream;
      console.log(_stream);
      setStream(_stream);
    };

    if (isCaptured) {
      startStream();
    } else {
      setStream(undefined);
    }
  }, [isCaptured, setStream]);

  const showScreenRecordPicker = async () => {
    const handle = findNodeHandle(screenCapturePickerViewRef.current);
    NativeModules.ScreenCapturePickerViewManager.show(handle);
  };

  return (
    <View className="flex-1 bg-blue-100 items-center justify-center">
      <View className="flex-1 p-2 w-full">
        {stream && (
          <RTCView
            // @ts-ignore
            className="flex-1 bg-green-400"
            objectFit="contain"
            streamURL={stream.toURL()}
          />
        )}
        <ScreenCapturePickerView ref={screenCapturePickerViewRef} />
      </View>
      <View className="my-4">
        <Button
          onPress={showScreenRecordPicker}
          title={stream ? 'Stop' : 'Start'}
        />
      </View>
    </View>
  );
};

export default Demo;
