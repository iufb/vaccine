import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as Device from 'expo-device';
import { UIText } from '~/components/P';
import { getDimenstions, isTablet } from '~/components/constants';
const Question = () => {};

const Answer = () => {};

const RadioButton = ({
  selected,
  onPress,
  label,
}: {
  selected: boolean;
  onPress: (value: string) => void;
  label: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(label)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        maxWidth: 300,
      }}>
      <View
        style={{
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: '#24c7c7',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 10,
        }}>
        {selected ? (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: '#24c7c7',
            }}
          />
        ) : null}
      </View>
      <UIText
        style={[
          selected && {
            fontFamily: 'Rubik_600SemiBold',
            marginBottom: 3,
            maxWidth: getDimenstions().width - 110,
          },
        ]}>
        {label}
      </UIText>
    </TouchableOpacity>
  );
};

const RadioButtonsGroup = ({
  values,
  onSelect,
}: {
  values: string[];
  onSelect: (value: string) => void;
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };
  useEffect(() => {
    if (selectedValue) onSelect(selectedValue);
  }, [selectedValue]);
  return (
    <View>
      {values.map((value, idx) => (
        <RadioButton
          key={idx}
          label={value}
          selected={selectedValue == value}
          onPress={(value) => {
            handleSelect(value);
          }}
        />
      ))}
    </View>
  );
};
export { Question, Answer, RadioButtonsGroup };
