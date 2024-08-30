import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { withSSR } from 'react-i18next';
import { View, Text, TouchableOpacity, StyleSheet, LayoutChangeEvent } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { H3, Paragraph } from 'tamagui';

export const Accordion = ({ title, children }: { title: string; children: ReactNode }) => {
  const [expanded, setExpanded] = useState(false);
  const height = useSharedValue(0);
  const opacity = useSharedValue(0);
  const [childHeight, setChildHeight] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  const onLayout = (event: LayoutChangeEvent) => {
    const { height: layoutHeight } = event.nativeEvent.layout;
    if (childHeight === 0) {
      setChildHeight(layoutHeight);
      setIsInitialized(true);
    }
  };

  useEffect(() => {
    if (!isInitialized) return;

    if (expanded) {
      height.value = withTiming(childHeight, { duration: 300 });
      opacity.value = withTiming(1, { duration: 1500 });
    } else {
      height.value = withTiming(0, { duration: 300 });
      opacity.value = withTiming(0, { duration: 300 });
    }
  }, [expanded, childHeight, height, opacity, isInitialized]);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
      opacity: opacity.value,
    };
  });

  return (
    <View
      style={[
        styles.container,
        !expanded && { borderBottomWidth: 2, borderBottomColor: '#129595' },
      ]}>
      <TouchableOpacity onPress={toggleAccordion} style={styles.header}>
        <H3 size={'$8'} fontWeight={900}>
          {title}
        </H3>
      </TouchableOpacity>
      <Animated.View
        onLayout={onLayout}
        style={[animatedStyle, childHeight === 0 && { height: 'auto', padding: 0 }]}>
        <Text style={styles.body}>{children}</Text>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  header: {
    padding: 10,
    backgroundColor: '#24C7C7',
  },
  body: {
    paddingHorizontal: 10,
    fontSize: 20,
  },
});
