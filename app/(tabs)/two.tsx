import { Href } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Link } from '~/components/Link';

import { StackScreen } from '~/components/StackScreen';
import { isTablet } from '~/components/constants';

const imageMap = [
  require('../../assets/info-link-virus.png'),
  require('../../assets/info-link-rules.png'),
  require('../../assets/info-link-group.png'),
  require('../../assets/info-link-vac.png'),
  require('../../assets/info-link-not.png'),
  require('../../assets/info-link-time.png'),
  require('../../assets/info-link-test.png'),
  require('../../assets/info-link-about.png'),
];
function getRandomInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
export default function Infomation() {
  const { t } = useTranslation();
  const links = t('info.links', { returnObjects: true }) as Array<{ href: string; name: string }>;
  return (
    <>
      <StackScreen showBackBtn={false} title={t('info.title')} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginVertical: 10,
        }}>
        {links.map(({ href, name }, idx) => {
          return (
            <Link
              img={imageMap[idx]}
              href={href as Href<string>}
              key={idx}
              name={name}
              style={[
                idx < links.length - 1 &&
                  (idx + 1) % 3 != 0 && { borderBottomColor: '#c2c2c2', borderBottomWidth: 1 },
                (idx + 1) % 3 == 0 && { marginBottom: isTablet ? 40 : 20 },
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
