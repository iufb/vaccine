import { Stack } from 'expo-router';
import { Trans, useTranslation } from 'react-i18next';
import { Image, Text } from 'react-native';
import { H2, Paragraph, ScrollView, View } from 'tamagui';
import * as Device from 'expo-device';
export default function Vvedenie() {
  const { t } = useTranslation();
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: t('home.content.1.title'),
          headerTitleAlign: 'center',
          headerBackTitle: undefined, // Hide the back button text
          headerBackTitleVisible: false, // Ensure back button text is hidden
        }}
      />
      <ScrollView
        contentContainerStyle={{ paddingVertical: 10 }}
        style={{ backgroundColor: 'white' }}>
        <Trans
          i18nKey={'home.content.1.info'}
          components={{
            h: <H2 style={{ textAlign: 'center' }} color={'black'}></H2>,
            p: (
              <Paragraph
                size={Device.deviceType === Device.DeviceType.TABLET ? '$8' : '$6'}
                style={{ paddingHorizontal: 20, textAlign: 'justify' }}
                color={'$gray1Dark'}></Paragraph>
            ),
            red: <Text style={{ paddingLeft: 20 }}></Text>,
          }}
        />
      </ScrollView>
    </>
  );
}
