import { Trans, useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import { P } from '~/components/P';
import { StackScreen } from '~/components/StackScreen';

export default function Groups() {
  const { t } = useTranslation('');
  return (
    <>
      <StackScreen title={t('info.groups.title')} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 5,
          paddingVertical: 10,
          backgroundColor: 'white',
        }}>
        <Trans
          i18nKey={`info.groups.data`}
          components={{
            container: <View style={{ paddingHorizontal: 10 }}></View>,
            zero: <Text style={{ fontFamily: 'Rubik_400Regular', fontSize: 18 }}></Text>,
            one: (
              <Text
                style={{ paddingLeft: 15, fontFamily: 'Rubik_400Regular', fontSize: 18 }}></Text>
            ),
            two: (
              <Text
                style={{
                  paddingLeft: 25,
                  fontFamily: 'Rubik_400Regular',
                  fontSize: 18,
                  fontStyle: 'italic',
                  color: 'black',
                }}></Text>
            ),
          }}
        />
      </ScrollView>
    </>
  );
}
