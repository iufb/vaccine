import { Stack } from 'expo-router';
import { Text } from 'react-native';

export const StackScreen = ({ title }: { title: string }) => {
  return (
    <Stack.Screen
      options={{
        headerTitleAlign: 'center',
        headerTitle: () => (
          <Text
            ellipsizeMode="tail"
            style={{
              color: '#111827',
              fontSize: 20,
              fontFamily: 'Rubik_400Regular',
            }}
            numberOfLines={1}>
            {title}
          </Text>
        ),
        headerBackTitleVisible: false,
      }}
    />
  );
};
