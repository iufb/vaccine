import { Href, Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { View } from 'tamagui';
import { Link } from '~/components/Link';

import { ScreenContent } from '~/components/ScreenContent';
import { StackScreen } from '~/components/StackScreen';

const imageMap = {
  'virus-1': require('../../assets/virus-1.png'),
  'virus-2': require('../../assets/virus-2.png'),
  'virus-3': require('../../assets/virus-3.png'),
};

export default function Infomation() {
  const { t } = useTranslation();
  const links = t('info.links', { returnObjects: true }) as Array<{ href: string; name: string }>;
  return (
    <>
      <StackScreen title={t('info.title')} />
      <View gap={10} paddingLeft={20} paddingVertical={10} backgroundColor={'white'} mt={10}>
        {links.map(({ href, name }, idx) => {
          return (
            <Link
              img={imageMap[`virus-${idx + 1}` as keyof typeof imageMap]}
              href={href as Href<string>}
              key={idx}
              name={name}
              style={[
                idx < links.length - 1 && { borderBottomColor: '#c2c2c2', borderBottomWidth: 1 },
              ]}
            />
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
