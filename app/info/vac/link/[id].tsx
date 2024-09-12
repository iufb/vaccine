import { useGlobalSearchParams } from 'expo-router';
import { Trans, useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import { Zero, One, Two, Container } from '~/components/P';
import { StackScreen } from '~/components/StackScreen';

export default function VacLink() {
  const { t } = useTranslation();
  const params = useGlobalSearchParams();

  return (
    <>
      <StackScreen title={t(params.id + '.link')} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 5,
          paddingVertical: 10,
          backgroundColor: 'white',
        }}>
        <Container>
          <Trans
            i18nKey={params.id + '.content'}
            components={{
              zero: <Zero></Zero>,
              one: <One></One>,
              two: <Two></Two>,
            }}
          />
        </Container>
      </ScrollView>
    </>
  );
}
