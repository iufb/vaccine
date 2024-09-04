import * as Device from 'expo-device';
import { ReactNode } from 'react';
import { StyleProp, Text, TextProps, View } from 'react-native';
interface BaseProps extends TextProps {
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
const One = ({ children, style }: BaseProps) => (
  <Text
    style={[
      {
        paddingLeft: 15,
        fontWeight: 600,
        fontFamily: 'Rubik_600SemiBold',
        fontSize: 18,
        color: '#450a0a',
      },
      style,
    ]}>
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
