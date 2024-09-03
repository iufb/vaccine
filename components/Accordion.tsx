import { FontAwesome } from '@expo/vector-icons';
import React, { ReactNode, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
  Text,
} from 'react-native';
import Animated, {
  SharedValue,
  StyleProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const Accordion = ({ title, children }: { title: string; children: ReactNode }) => {
  const open = useSharedValue(false);
  const onPress = () => {
    open.value = !open.value;
    rotation.value = withTiming(open.value ? 0 : 180, { duration: 400 });
  };
  const rotation = useSharedValue(0); // Rotation value in degrees

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
          <Text style={styles.btnText}>{title}</Text>
          <Animated.View style={[animatedStyle]}>
            <FontAwesome size={22} color={'white'} name="chevron-down" />
          </Animated.View>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <AccordionItem isExpanded={open} viewKey="Accordion">
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
    overflow: 'hidden',
  }));

  return (
    <Animated.View key={`accordionItem_${viewKey}`} style={[styles.animatedView, bodyStyle, style]}>
      <View
        onLayout={(e) => {
          height.value = Math.ceil(e.nativeEvent.layout.height);
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#24C7C7',
  },
  btnText: {
    textAlign: 'left',
    color: 'white',
    fontWeight: '900',
    fontFamily: 'Rubik_400Regular',
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
    position: 'absolute',
    display: 'flex',
    borderRadius: 10,
    paddingVertical: 10,
    left: 10,
    right: 10,
    alignItems: 'center',
    backgroundColor: '#e2e8f0',
  },
  animatedView: {
    width: '100%',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
