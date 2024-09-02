import * as Device from 'expo-device';
import { ReactNode } from 'react';
import { Text, View } from 'react-native';
export const P = ({ children }: { children?: ReactNode }) => {
  return (
    <View style={{ paddingHorizontal: 8 }}>
      <Text
        style={{
          fontFamily: 'Rubik_400Regular',
          fontSize: Device.deviceType === Device.DeviceType.TABLET ? 25 : 20,
          fontWeight: 400,
          color: '#111827',
          textAlign: 'justify',
          paddingHorizontal: 10,
        }}>
        {children}
      </Text>
    </View>
  );
};
