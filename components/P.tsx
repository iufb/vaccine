import * as Device from 'expo-device';
import { ReactNode } from 'react';
import { Text, View } from 'react-native';
export const P = ({ children }: { children?: ReactNode }) => {
  return (
    <View style={{ paddingHorizontal: 8 }}>
      <Text
        style={{
          fontFamily: 'Rubik_400Regular',
          fontSize: Device.deviceType === Device.DeviceType.TABLET ? 25 : 18,
          color: '#111827',
          maxWidth: 400,
          textAlign: 'justify',
          lineHeight: 24,
          paddingHorizontal: 10,
        }}>
        {children}
      </Text>
    </View>
  );
};
