import { Trans, useTranslation } from 'react-i18next';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Container, One, P, Zero } from '~/components/P';
import { StackScreen } from '~/components/StackScreen';
import { isIOS, isTablet } from '~/components/constants';

export default function About() {
  const { t } = useTranslation('');
  return (
    <>
      <StackScreen title={t('info.about.title')} />
      <SafeAreaView
        style={{
          paddingHorizontal: 5,
          paddingTop: 40,
          paddingBottom: 10,
          gap: 10,
          flex: 1,
          backgroundColor: 'white',
        }}>
        <One
          style={[
            {
              fontSize: isTablet ? 30 : 25,
              marginBottom: 30,
              color: '#24C7C7',
            },
            isIOS && {
              marginTop: 40,
            },
          ]}>
          {t('info.about.name')}
        </One>
        <Trans
          i18nKey={`info.about.data`}
          components={{
            container: <Container></Container>,
            zero: <Zero></Zero>,
            b: <Zero style={{ fontFamily: 'Rubik_600SemiBold' }}></Zero>,
          }}
        />
      </SafeAreaView>
    </>
  );
}
