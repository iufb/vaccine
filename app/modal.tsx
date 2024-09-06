import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { Platform, Text, View } from 'react-native';
import { LangPicker } from '~/components/LangPicker';
import { UIText } from '~/components/P';
import { Select } from '~/components/Select';
import { StackScreen } from '~/components/StackScreen';

export default function Modal() {
  const { t } = useTranslation();
  return (
    <>
      <StackScreen title={t('settings.title')} />
      <View
        style={{
          padding: 20,
          backgroundColor: 'white',
          marginTop: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 30,
        }}>
        <UIText>{t('settings.lang')}</UIText>
        <LangPicker />
      </View>
    </>
  );
}
