import { Href } from 'expo-router';
import { Trans, useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import { Link } from '~/components/Link';
import { Container, One, Two, Zero } from '~/components/P';
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
          flexGrow: 1,
        }}>
        <Trans
          i18nKey={`info.time.data`}
          components={{
            container: <Container></Container>,
            zero: <Zero style={{ fontFamily: 'Rubik_600SemiBold' }}></Zero>,
            ...getLinks(),
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
