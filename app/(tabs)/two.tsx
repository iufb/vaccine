import { Href } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Link } from '~/components/Link';

import { StackScreen } from '~/components/StackScreen';

const imageMap = {
  'virus-1': require('../../assets/virus-1.png'),
  'virus-2': require('../../assets/virus-2.png'),
  'virus-3': require('../../assets/virus-3.png'),
  'virus-4': require('../../assets/virus-4.png'),
};

export default function Infomation() {
  const { t } = useTranslation();
  const links = t('info.links', { returnObjects: true }) as Array<{ href: string; name: string }>;
  return (
    <>
      <StackScreen title={t('info.title')} />
      <ScrollView
        contentContainerStyle={{
          paddingLeft: 10,
          paddingVertical: 10,
          marginVertical: 10,
        }}>
        {links.map(({ href, name }, idx) => {
          return (
            <Link
              img={imageMap[`virus-${2}` as keyof typeof imageMap]}
              href={href as Href<string>}
              key={idx}
              name={name}
              style={[
                idx < links.length - 1 &&
                  (idx + 1) % 3 != 0 && { borderBottomColor: '#c2c2c2', borderBottomWidth: 1 },
                (idx + 1) % 3 == 0 && { marginBottom: 20 },
                idx == links.length - 1 && { marginBottom: 40 },
              ]}
            />
          );
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
