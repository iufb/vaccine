import { FontAwesome } from '@expo/vector-icons';

import React, { ReactNode, useState } from 'react';
import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { UIText } from '~/components/P';
import { isTablet } from '~/components/constants';

export const Accordion = ({ title, children }: { title: string; children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const onPress = () => {
    setOpen(!open);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
          <UIText style={styles.btnText}>{title}</UIText>
          <View>
            <FontAwesome size={22} color={'white'} name="chevron-down" />
          </View>
        </TouchableOpacity>
      </View>
      {open && <View style={styles.content}>{children}</View>}
    </SafeAreaView>
  );
};
function AccordionItem({
  isExpanded,
  children,
  viewKey,
  style,
}: {
  isExpanded: boolean;
  children: ReactNode;
  viewKey: string;
  style?: StyleProp<ViewStyle>;
  duration?: number;
}) {
  return (
    <View style={[style]}>
      <View style={styles.wrapper}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    gap: 10,
    marginBottom: 10,
    paddingHorizontal: isTablet ? 50 : 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#15803d',
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
    paddingVertical: 20,
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
  containerBtn: {
    marginHorizontal: 10,
  },
});
