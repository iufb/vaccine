import React, { ReactNode } from 'react';
import {
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  SharedValue,
  StyleProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Paragraph, Text } from 'tamagui';

export const Accordion = ({ title, children }: { title: string; children: ReactNode }) => {
  const open = useSharedValue(false);
  const onPress = () => {
    open.value = !open.value;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
          <Text fontWeight={900} color={'white'} fontSize={'$6'} style={styles.btnText}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <AccordionItem duration={150} isExpanded={open} viewKey="Accordion">
          {children}
        </AccordionItem>
      </View>
    </SafeAreaView>
  );
};
function AccordionItem({
  isExpanded,
  children,
  viewKey,
  style,
  duration = 200,
}: {
  isExpanded: SharedValue<boolean>;
  children: ReactNode;
  viewKey: string;
  style?: StyleProp<ViewStyle>;
  duration?: number;
}) {
  const height = useSharedValue(0);

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(isExpanded.value), {
      duration,
    })
  );
  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }));

  return (
    <Animated.View key={`accordionItem_${viewKey}`} style={[styles.animatedView, bodyStyle, style]}>
      <View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={styles.wrapper}>
        {children}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    gap: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#24C7C7',
  },
  btnText: {
    textAlign: 'left',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  parent: {
    width: 200,
  },
  wrapper: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
  },
  animatedView: {
    width: '100%',
    overflow: 'hidden',
  },
});
