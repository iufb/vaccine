import { Trans, useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import { Container, P, Zero, One, Two } from '~/components/P';
import { StackScreen } from '~/components/StackScreen';

export default function Vaccination() {
  const { t } = useTranslation('');
  return (
    <>
      <StackScreen title={t('info.vac.title')} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 5,
          paddingVertical: 10,
          backgroundColor: 'white',
        }}>
        <Trans
          i18nKey={`info.vac.data`}
          components={{
            container: <Container></Container>,
            zero: <Zero></Zero>,
            one: <One></One>,
            two: <Two></Two>,
          }}
        />
      </ScrollView>
    </>
  );
}
