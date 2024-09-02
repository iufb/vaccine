import * as Device from 'expo-device';
import { Trans, useTranslation } from 'react-i18next';
import { ScrollView, Text } from 'react-native';
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
            p: <P></P>,
          }}
        />
      </ScrollView>
    </>
  );
}
