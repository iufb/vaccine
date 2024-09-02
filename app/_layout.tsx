import {
  useFonts,
  Rubik_900Black,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_600SemiBold,
  Rubik_300Light_Italic,
  Rubik_400Regular_Italic,
  Rubik_600SemiBold_Italic,
} from '@expo-google-fonts/rubik';
import { SplashScreen, Stack } from 'expo-router';
import React, { useEffect } from 'react';
import '~/i18n';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Rubik_900Black,
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_600SemiBold,
    Rubik_300Light_Italic,
    Rubik_400Regular_Italic,
    Rubik_600SemiBold_Italic,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
}
