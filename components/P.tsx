import * as Device from 'expo-device';
import { ReactNode } from 'react';
import { Text, View } from 'react-native';
interface BaseProps {
  children?: ReactNode;
}
const P = ({ children }: BaseProps) => {
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

const Container = ({ children }: BaseProps) => (
  <View style={{ paddingHorizontal: 10 }}>{children}</View>
);
const Zero = ({ children }: BaseProps) => (
  <Text style={{ fontFamily: 'Rubik_400Regular', fontSize: 18 }}>{children}</Text>
);
const One = ({ children }: BaseProps) => (
  <Text
    style={{
      paddingLeft: 15,
      fontWeight: 900,
      fontFamily: 'Rubik_900Black',
      fontSize: 18,
      color: '#450a0a',
    }}>
    {children}
  </Text>
);
const Two = ({ children }: BaseProps) => (
  <Text
    style={{
      paddingLeft: 25,
      fontFamily: 'Rubik_400Regular',
      fontSize: 18,
      fontStyle: 'italic',
      color: 'black',
    }}>
    {children}
  </Text>
);
export { Container, One, P, Two, Zero };
