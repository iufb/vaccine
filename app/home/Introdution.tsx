import * as Device from 'expo-device';
import { Trans, useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { H2, Paragraph, ScrollView } from 'tamagui';
import { P } from '~/components/P';
import { StackScreen } from '~/components/StackScreen';
export default function Introdution() {
  const { t } = useTranslation();
  return (
    <>
      <StackScreen title={t('home.content.1.title')} />
      <ScrollView
        contentContainerStyle={{ paddingVertical: 10 }}
        style={{ backgroundColor: 'white' }}>
        <Trans
          i18nKey={'home.content.1.info'}
          components={{
            h: <H2 style={{ textAlign: 'center' }} color={'black'}></H2>,
            p: <P></P>,
            red: <Text style={{ paddingLeft: 20 }}></Text>,
          }}
        />
      </ScrollView>
    </>
  );
}
