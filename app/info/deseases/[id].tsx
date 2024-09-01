import { useGlobalSearchParams } from 'expo-router';
import { Trans, useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import { P } from '~/components/P';
import { StackScreen } from '~/components/StackScreen';

export default function Desease() {
  const { t } = useTranslation();
  const params = useGlobalSearchParams();
  console.log(params);

  return (
    <>
      <StackScreen title={params.id as string} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 5,
          paddingVertical: 10,
          backgroundColor: 'white',
        }}>
        <Trans i18nKey={`info.characteristics.desease.${params.id}`} components={{ p: <P></P> }} />
      </ScrollView>
    </>
  );
}
