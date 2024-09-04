import { useTranslation, Trans } from 'react-i18next';
import { ScrollView } from 'react-native';
import { Container, Zero, One, Two } from '~/components/P';
import { StackScreen } from '~/components/StackScreen';

export default function Time() {
  const { t } = useTranslation();
  return (
    <>
      <StackScreen title={t('info.time.title')} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 5,
          paddingVertical: 10,
          backgroundColor: 'white',
        }}>
        <Trans
          i18nKey={`info.time.data`}
          components={{
            container: <Container></Container>,
            zero: <Zero></Zero>,
            one: <One></One>,
            two: <Two></Two>,
            i: (
              <One
                style={{
                  fontStyle: 'italic',
                }}></One>
            ),
          }}
        />
      </ScrollView>
    </>
  );
}
