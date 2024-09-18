import { Href } from 'expo-router';
import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { Link } from '~/components/Link';
import { Container, One, Two, UIText, Zero } from '~/components/P';
import { StackScreen } from '~/components/StackScreen';
const links = {
  link1: 'info.time.link1',
  link2: 'info.time.link2',
};
const getLinks = () => {
  const { t } = useTranslation();
  const linksObject: Record<string, JSX.Element> = {};
  Object.keys(links).forEach((l, idx) => {
    const link = links[l as keyof typeof links];
    linksObject[`link${idx + 1}`] = (
      <Link
        style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginBottom: 10 }}
        href={`/info/time/link/${link}` as Href<string>}
        name={t(`${link}.link`)}></Link>
    );
  });
  return linksObject;
};
interface Link {
  lvl1: string;
  lvl2: {
    name: string;
    href: string;
  }[];
}
export default function Time() {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState('nac');
  const tabs = t('info.time.tabs', { returnObjects: true }) as string[];
  const nacLinks: Link[] = t('info.time.nacLinks', { returnObjects: true });
  const epidLinks: Link[] = t('info.time.epidLinks', { returnObjects: true });

  return (
    <>
      <StackScreen title={t('info.time.title')} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 5,
          paddingVertical: 10,
          backgroundColor: 'white',
          flexGrow: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#cbd5e1',
            paddingVertical: 4,
            paddingHorizontal: 10,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          {tabs
            .map((tab, idx) => ({ label: tab, val: idx == 0 ? 'nac' : 'epid' }))
            .map((tab) => (
              <TouchableOpacity
                key={tab.label}
                onPress={() => setSelectedTab(tab.val)}
                style={[
                  { flex: 1 },
                  tab.val == selectedTab
                    ? { backgroundColor: 'white', paddingVertical: 9, borderRadius: 10 }
                    : {},
                ]}>
                <UIText
                  style={[
                    { textAlign: 'center', fontSize: 15 },
                    tab.val == selectedTab ? { fontWeight: 900 } : { fontWeight: 400 },
                  ]}>
                  {tab.label}
                </UIText>
              </TouchableOpacity>
            ))}
        </View>
        <Container>
          {(selectedTab == 'nac' ? nacLinks : epidLinks).map((link) => (
            <Link
              style={{ borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 15 }}
              key={link.lvl1}
              href={{
                pathname: `/info/time/link` as any,
                params: { id: link.lvl1, other: encodeURIComponent(JSON.stringify(link)) },
              }}
              name={link.lvl1}
            />
          ))}
        </Container>
      </ScrollView>
    </>
  );
}
