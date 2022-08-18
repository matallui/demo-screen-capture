import React from 'react';
import { Text, View } from 'react-native';

interface Props {}

const Demo: React.FC<Props> = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Demo App</Text>
    </View>
  );
};

export default Demo;
