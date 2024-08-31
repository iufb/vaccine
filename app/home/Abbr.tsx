import { Stack } from 'expo-router';
import { Paragraph, ScrollView, Square, Text, View } from 'tamagui';
import * as Device from 'expo-device';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion } from '~/components/Accordion';
import { StackScreen } from '~/components/StackScreen';

export default function Sokrasheniya() {
  const { t } = useTranslation();
  const data = t('home.content.3.data', { returnObjects: true }) as Array<{
    key: string;
    description: string;
  }>;

  return (
    <>
      <StackScreen title={t('home.content.3.title')} />
      <ScrollView
        contentContainerStyle={{ paddingVertical: 10 }}
        style={{ backgroundColor: 'white' }}>
        <View paddingVertical={10} marginBottom={30}>
          {data.map((item: { key: string; description: string }) => (
            <Accordion key={item.key} title={item.key}>
              <Paragraph color={'$gray5'} size={'$6'}>
                {item.description}
              </Paragraph>
            </Accordion>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
