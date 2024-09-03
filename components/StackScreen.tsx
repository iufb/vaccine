import { Stack } from 'expo-router';
import TextTicker from 'react-native-text-ticker';

export const StackScreen = ({ title }: { title: string }) => {
  return (
    <Stack.Screen
      options={{
        headerTitleAlign: 'center',
        headerTitle: () => (
          <TextTicker
            style={{ fontSize: 24, fontFamily: 'Rubik_400Regular' }}
            duration={10000}
            loop
            bounce
            repeatSpacer={50}
            marqueeDelay={1000}>
            {title}
          </TextTicker>
        ),
        headerBackTitleVisible: false,
      }}
    />
  );
};
