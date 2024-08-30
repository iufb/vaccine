import { Stack } from 'expo-router';
import { Trans, useTranslation } from 'react-i18next';
import { H2, Paragraph, ScrollView, View, Text } from 'tamagui';

import * as Device from 'expo-device';

export default function Opredeleniya() {
  const { t } = useTranslation();
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: t('home.content.2.title'),
          headerTitleAlign: 'center',
          headerBackTitle: undefined, // Hide the back button text
          headerBackTitleVisible: false, // Ensure back button text is hidden
        }}
      />
      <ScrollView
        contentContainerStyle={{ paddingVertical: 10 }}
        style={{ backgroundColor: 'white' }}>
        <Trans
          i18nKey={'home.content.2.info'}
          components={{
            p: (
              <Paragraph
                size={Device.deviceType === Device.DeviceType.TABLET ? '$8' : '$6'}
                style={{ paddingHorizontal: 20, textAlign: 'justify', textAlignVertical: 'bottom' }}
                color={'$gray1Dark'}></Paragraph>
            ),
            r: <Text color={'$red9Light'} fontWeight={'900'}></Text>,
          }}
        />
      </ScrollView>
    </>
  );
}
