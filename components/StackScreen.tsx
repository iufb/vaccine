import { Stack } from 'expo-router';

export const StackScreen = ({ title }: { title: string }) => {
  return (
    <Stack.Screen
      options={{
        title,
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}
    />
  );
};
