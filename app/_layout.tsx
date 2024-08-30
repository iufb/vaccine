import { useFonts } from 'expo-font';
import { Rubik_900Black } from '@expo-google-fonts/rubik';
import { SplashScreen, Stack } from 'expo-router';
import React, { useEffect } from 'react';
import '~/i18n';
import { TamaguiProvider } from 'tamagui';

import config from '../tamagui.config';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded] = useFonts({
    Rubik_900Black,
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </TamaguiProvider>
  );
}
