import { Stack } from 'expo-router';
import { Paragraph, ScrollView, Square, Text } from 'tamagui';
import * as Device from 'expo-device';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion } from '~/components/Accordion';

export default function Sokrasheniya() {
  const { t } = useTranslation();
  const data = t('home.content.3.data', { returnObjects: true }) as Array<{
    key: string;
    description: string;
  }>;

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: t('home.content.3.title'),
          headerTitleAlign: 'center',
          headerBackTitle: undefined, // Hide the back button text
          headerBackTitleVisible: false, // Ensure back button text is hidden
        }}
      />
      <ScrollView
        contentContainerStyle={{ paddingVertical: 10 }}
        style={{ backgroundColor: 'white' }}>
        {data.map((item: { key: string; description: string }) => (
          <Accordion key={item.key} title={item.key}>
            <Paragraph color={'$gray8'} size={'$6'}>
              {item.description}
            </Paragraph>
          </Accordion>
        ))}
      </ScrollView>
    </>
  );
}
