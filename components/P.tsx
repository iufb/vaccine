import * as Device from 'expo-device';
import { ReactNode } from 'react';
import { StyleProp, Text, TextProps, View } from 'react-native';
import { isIOS, isTablet } from '~/components/constants';
interface BaseProps extends TextProps {
  children?: ReactNode;
}
const P = ({ children }: BaseProps) => {
  return (
    <View style={{ paddingHorizontal: 8 }}>
      <UIText
        style={{
          paddingHorizontal: 10,
        }}>
        {children}
      </UIText>
    </View>
  );
};
const UIText = ({ children, style }: BaseProps) => {
  return (
    <Text
      style={[
        {
          fontFamily: 'Rubik_400Regular',
          fontSize: isTablet ? 22 : 18,
          color: '#111827',
          lineHeight: isTablet ? 28 : 24,
        },
        ...(Array.isArray(style) ? style : [style]),
      ]}>
      {children}
    </Text>
  );
};
const Container = ({ children }: BaseProps) => (
  <View style={{ paddingHorizontal: 10 }}>{children}</View>
);
const Zero = ({ children, style }: BaseProps) => <UIText style={[style]}>{children}</UIText>;
const One = ({ children, style }: BaseProps) => (
  <UIText
    style={[
      {
        paddingLeft: isTablet ? 25 : 15,
        fontWeight: 600,
        fontFamily: 'Rubik_600SemiBold',
        color: '#450a0a',
      },
      style,
    ]}>
    {children}
  </UIText>
);
const Two = ({ children }: BaseProps) => (
  <UIText
    style={{
      paddingLeft: isTablet ? 45 : 25,
      fontStyle: 'italic',
      color: 'black',
    }}>
    {children}
  </UIText>
);
export { Container, One, P, Two, Zero, UIText };
