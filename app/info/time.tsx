import { Trans, useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import { Container, One, Two, Zero } from '~/components/P';
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
            zero: <Zero style={{ fontFamily: 'Rubik_600SemiBold' }}></Zero>,
            one: <One style={{ paddingLeft: 0 }}></One>,
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
